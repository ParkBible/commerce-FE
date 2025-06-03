import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { SearchParams, SearchResponse, Product } from "@/types/api";

interface ProductRow {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    detail_image: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
    intensity_name?: string;
    cupsize_name?: string;
}

export async function GET(request: NextRequest) {
    try {
        console.log("=== 상품 API 호출 시작 ===");

        const { searchParams } = new URL(request.url);
        console.log("검색 파라미터:", Object.fromEntries(searchParams.entries()));

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

        console.log("파싱된 파라미터:", params);

        // 먼저 간단한 테스트 쿼리로 연결 확인
        const testResult = await db.query("SELECT COUNT(*) as total FROM products");
        console.log("전체 상품 수:", testResult.rows[0]);

        // SQL 쿼리 구성 - 중복 방지를 위해 단순화
        let baseQuery = `
      SELECT p.*
      FROM products p
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

        // 카테고리 필터링 (필요한 경우에만)
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

        console.log("실행할 쿼리:", baseQuery);
        console.log("쿼리 파라미터:", queryParams);

        // 전체 개수 조회
        const countQuery = baseQuery.replace(/SELECT p\.\*/, "SELECT COUNT(p.id)").replace(/ORDER BY[\s\S]*$/, "");

        const countParams = queryParams.slice(0, -2); // LIMIT, OFFSET 제거

        // 쿼리 실행
        const [productsResult, countResult] = await Promise.all([db.query(baseQuery, queryParams), db.query(countQuery, countParams)]);

        console.log("상품 쿼리 결과 개수:", productsResult.rows.length);
        console.log("전체 개수 쿼리 결과:", countResult.rows[0]);

        const products: Product[] = productsResult.rows.map((row: ProductRow) => ({
            id: row.id,
            name: row.name,
            price: row.price,
            thumbnail: row.thumbnail,
            detail_image: row.detail_image,
            status: row.status,
            is_deleted: row.is_deleted,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }));

        const totalElements = Number.parseInt(countResult.rows[0].count);
        const totalPages = Math.ceil(totalElements / size);

        const response: SearchResponse = {
            products,
            totalElements,
            totalPages,
            currentPage: page,
            size: size,
        };

        console.log("최종 응답:", response);

        return NextResponse.json({
            data: response,
            success: true,
        });
    } catch (error) {
        console.error("상품 조회 오류:", error);
        return NextResponse.json(
            {
                message: "상품 조회 중 오류가 발생했습니다.",
                success: false,
            },
            { status: 500 },
        );
    }
}
