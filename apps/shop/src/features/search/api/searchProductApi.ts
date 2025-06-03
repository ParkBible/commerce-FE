import { getMockSearchProducts } from "@/src/features/search/mocks/searchProductMock";
import { fetchServer } from "@/src/shared/fetcher";
import type { SearchResultResponse } from "@/src/features/search/types";

interface BackendProduct {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    detail_image: string;
    status: string;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
}

interface BackendSearchData {
    products: BackendProduct[];
    totalElements: number;
    totalPages: number;
    currentPage: number;
    size: number;
}

interface BackendResponse {
    success: boolean;
    data: BackendSearchData;
}

/**
 * 상품 검색 API 함수
 */
export async function searchProducts(searchTerm = "", page = 0, size = 10): Promise<SearchResultResponse> {
    try {
        const fetcher = fetchServer();

        // API 호출 파라미터 설정
        const searchParams = new URLSearchParams({
            name: searchTerm,
            page: page.toString(),
            size: size.toString(),
            status: "ON_SALE",
        });

        const response = await fetcher<BackendSearchData>(`/api/products?${searchParams}`);

        console.log("API 응답 전체 (JSON):", JSON.stringify(response, null, 2));

        // createFetcher가 백엔드 응답의 data 부분만 추출해서 반환
        if (response.data?.products && Array.isArray(response.data.products)) {
            const backendData = response.data;
            console.log("백엔드 데이터:", backendData);

            // 백엔드 응답을 프론트엔드 형식에 맞게 변환
            return {
                content: backendData.products.map((product: BackendProduct) => ({
                    id: product.id.toString(),
                    title: product.name,
                    description: product.name,
                    price: product.price,
                    capsuleCount: 10, // 기본값
                    intensity: 5, // 기본값
                    cupSize: "230ml", // 기본값
                    imageUrl: product.thumbnail,
                    badges: [{ text: "머그", type: "category" as const }],
                    inStock: true,
                })),
                page: backendData.currentPage,
                size: backendData.size,
                totalPages: backendData.totalPages,
                totalElements: backendData.totalElements,
                searchTerm: searchTerm,
            };
        }

        console.log("API 응답 구조가 예상과 다름, 목 데이터 사용");
        console.log("response.data 구조 (JSON):", JSON.stringify(response.data, null, 2));
        // API 실패 시 목 데이터 반환
        return getMockSearchProducts(searchTerm, page, size);
    } catch (error) {
        console.error("검색 API 오류:", error);
        // 에러 시 목 데이터 반환
        return getMockSearchProducts(searchTerm, page, size);
    }
}
