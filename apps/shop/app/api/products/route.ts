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
    detailImage: string;
    intensity: string;
    cupSize: string;
    isSoldOut: boolean;
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
            sort: searchParams.get("sort") || "id,desc",
        };

        // 문자열 필터 파라미터 추가
        const intensity = searchParams.get("intensity") || undefined;
        const cupSize = searchParams.get("cupSize") || undefined;

        // 목데이터 필터링
        const filteredProducts = MOCK_PRODUCTS.filter(product => {
            // 이름 검색
            if (params.name && !product.name.toLowerCase().includes(params.name.toLowerCase())) {
                return false;
            }

            // 강도 필터링
            if (params.intensityId) {
                const allowedIntensities = INTENSITY_MAP[params.intensityId];
                if (allowedIntensities && !allowedIntensities.includes(product.intensity)) {
                    return false;
                }
            } else if (intensity && product.intensity !== intensity) {
                return false;
            }

            // 컵사이즈 필터링
            if (params.cupSizeId) {
                const allowedCupSizes = CUP_SIZE_MAP[params.cupSizeId];
                if (allowedCupSizes && !allowedCupSizes.includes(product.cupSize)) {
                    return false;
                }
            } else if (cupSize && product.cupSize !== cupSize) {
                return false;
            }

            return true;
        });

        // 정렬 처리
        const sortParts = params.sort?.split(",") || ["id", "desc"];
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
                    comparison = a.id - b.id;
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

        // 백엔드 API 응답 형식에 맞춰 반환
        const response = {
            content: paginatedProducts,
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
