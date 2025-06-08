import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { db } from "@/lib/db"; // DB 제거
import type { SearchParams } from "@/types/api";
import { MOCK_PRODUCTS, INTENSITY_MAP, CUP_SIZE_MAP } from "./mock/products";

interface ProductRow {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    detail_image: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
    intensity: string;
    cupSize: string;
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

        // 목데이터 필터링
        const filteredProducts = MOCK_PRODUCTS.filter(product => {
            // 삭제되지 않고 판매 중인 상품만
            if (product.is_deleted || product.status !== params.status) {
                return false;
            }

            // 이름 검색
            if (params.name && !product.name.toLowerCase().includes(params.name.toLowerCase())) {
                return false;
            }

            // 강도 필터링 (import한 매핑 사용)
            if (params.intensityId) {
                const allowedIntensities = INTENSITY_MAP[params.intensityId];
                if (allowedIntensities && !allowedIntensities.includes(product.intensity)) {
                    return false;
                }
            }

            // 컵사이즈 필터링 (import한 매핑 사용)
            if (params.cupSizeId) {
                const allowedCupSizes = CUP_SIZE_MAP[params.cupSizeId];
                if (allowedCupSizes && !allowedCupSizes.includes(product.cupSize)) {
                    return false;
                }
            }

            return true;
        });

        // 정렬 처리
        const sortParts = params.sort?.split(",") || ["created_at", "desc"];
        const [sortField, sortDirection] = sortParts;

        filteredProducts.sort((a, b) => {
            let comparison = 0;

            switch (sortField) {
                case "name":
                    comparison = a.name.localeCompare(b.name);
                    break;
                case "price":
                    comparison = a.price - b.price;
                    break;
                default:
                    comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                    break;
            }

            return sortDirection === "asc" ? comparison : -comparison;
        });

        // 페이지네이션
        const page = params.page || 0;
        const size = params.size || 20;
        const totalElements = filteredProducts.length;
        const totalPages = Math.ceil(totalElements / size);
        const startIndex = page * size;
        const endIndex = startIndex + size;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // 백엔드 Example Value 형식에 맞춰 응답 생성
        const products = paginatedProducts.map((row: ProductRow) => {
            const quantity = row.quantity ?? 0;

            return {
                id: row.id,
                name: row.name,
                price: row.price,
                quantity: quantity,
                thumbnail: row.thumbnail,
                detailImage: row.detail_image,
                intensity: row.intensity,
                cupSize: row.cupSize,
                isSoldOut: quantity === 0,
            };
        });

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
