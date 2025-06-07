import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { SearchParams } from "@/types/api";

interface ProductRow {
    id: number;
    name: string;
    price: number;
    quantity: number; // inventory 테이블에서 가져올 실제 재고
    thumbnail: string;
    detail_image: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // 쿼리 파라미터 파싱
        const params: SearchParams = {
            name: searchParams.get("name") || undefined,
            intensityId: searchParams.get("intensityId") ? Number.parseInt(searchParams.get("intensityId") || "0") : undefined,
            cupSizeId: searchParams.get("cupSizeId") ? Number.parseInt(searchParams.get("cupSizeId") || "0") : undefined,
            status: searchParams.get("status") || "ON_SALE",
            page: Number.parseInt(searchParams.get("page") || "0"),
            size: Number.parseInt(searchParams.get("size") || "20"),
            sort: searchParams.get("sort") || "created_at,desc",
        };

        // SQL 쿼리 구성 - 단순화: 상품과 재고만 조회
        let baseQuery = `
            SELECT p.*, inv.quantity
            FROM products p
            LEFT JOIN inventory inv ON inv.product_id = p.id
            WHERE p.is_deleted = false
        `;

        const queryParams: unknown[] = [];
        let paramIndex = 1;

        // 필터 조건 추가
        if (params.name) {
            baseQuery += ` AND p.name ILIKE $${paramIndex}`;
            queryParams.push(`%${params.name}%`);
            paramIndex++;
        }

        if (params.status) {
            baseQuery += ` AND p.status = $${paramIndex}`;
            queryParams.push(params.status);
            paramIndex++;
        }

        // 카테고리 필터링
        if (params.intensityId) {
            baseQuery += ` AND EXISTS (
                SELECT 1 FROM product_categories pc 
                WHERE pc.product_id = p.id AND pc.category_id = $${paramIndex}
            )`;
            queryParams.push(params.intensityId);
            paramIndex++;
        }

        if (params.cupSizeId) {
            baseQuery += ` AND EXISTS (
                SELECT 1 FROM product_categories pc 
                WHERE pc.product_id = p.id AND pc.category_id = $${paramIndex}
            )`;
            queryParams.push(params.cupSizeId);
            paramIndex++;
        }

        // 정렬 처리
        const sortParts = params.sort?.split(",") || ["created_at", "desc"];
        const [sortField, sortDirection] = sortParts;
        const allowedSortFields = ["name", "price", "created_at"];
        const validSortField = allowedSortFields.includes(sortField) ? sortField : "created_at";
        const validSortDirection = sortDirection === "asc" ? "ASC" : "DESC";

        baseQuery += ` ORDER BY p.${validSortField} ${validSortDirection}`;

        // 페이지네이션
        const page = params.page || 0;
        const size = params.size || 20;
        const offset = page * size;
        baseQuery += ` LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        queryParams.push(size, offset);

        // 전체 개수 조회 - 단순화
        let countQuery = `
            SELECT COUNT(p.id)
            FROM products p
            WHERE p.is_deleted = false
        `;

        const countParams: unknown[] = [];
        let countParamIndex = 1;

        // count 쿼리에도 동일한 필터 조건 추가
        if (params.name) {
            countQuery += ` AND p.name ILIKE $${countParamIndex}`;
            countParams.push(`%${params.name}%`);
            countParamIndex++;
        }

        if (params.status) {
            countQuery += ` AND p.status = $${countParamIndex}`;
            countParams.push(params.status);
            countParamIndex++;
        }

        if (params.intensityId) {
            countQuery += ` AND EXISTS (
                SELECT 1 FROM product_categories pc 
                WHERE pc.product_id = p.id AND pc.category_id = $${countParamIndex}
            )`;
            countParams.push(params.intensityId);
            countParamIndex++;
        }

        if (params.cupSizeId) {
            countQuery += ` AND EXISTS (
                SELECT 1 FROM product_categories pc 
                WHERE pc.product_id = p.id AND pc.category_id = $${countParamIndex}
            )`;
            countParams.push(params.cupSizeId);
            countParamIndex++;
        }

        // 쿼리 실행
        const [productsResult, countResult] = await Promise.all([
            db.query(baseQuery, queryParams), 
            db.query(countQuery, countParams)
        ]);

        // 백엔드 원본 필드명 그대로 응답 (변환 없음)
        const products = productsResult.rows.map((row: ProductRow, index: number) => {
            const quantity = row.quantity ?? 0;
            
            const product = {
                id: row.id,  // ✅ number 그대로
                name: row.name,  // ✅ name 그대로 (title 변환 안함)
                price: row.price,
                quantity: quantity,  // ✅ 백엔드 필드명 그대로
                thumbnail: row.thumbnail,  // ✅ thumbnail 그대로 (imageUrl 변환 안함)
                detail_image: row.detail_image,  // ✅ 백엔드 필드명 그대로
                intensity: "Medium",  // 기본값으로 설정 (추후 별도 API로 분리 가능)
                cupSize: "Large",   // 기본값으로 설정
                status: row.status,  // ✅ 백엔드 필드명 추가
                is_deleted: row.is_deleted,  // ✅ 백엔드 필드명 추가
                created_at: row.created_at,  // ✅ 백엔드 필드명 추가
                updated_at: row.updated_at,  // ✅ 백엔드 필드명 추가
            };
            
            return product;
        });

        const totalElements = Number.parseInt(countResult.rows[0].count);
        const totalPages = Math.ceil(totalElements / size);

        const response = {
            content: products,
            page,
            size,
            totalPages,
            totalElements,
        };

        return NextResponse.json({
            data: response,
            error: null,
        });
    } catch (error) {
        console.error("상품 조회 오류:", error);
        return NextResponse.json(
            {
                data: null,
                error: {
                    code: "PRODUCT_SEARCH_ERROR",
                    message: "상품 조회 중 오류가 발생했습니다.",
                },
            },
            { status: 500 },
        );
    }
}
