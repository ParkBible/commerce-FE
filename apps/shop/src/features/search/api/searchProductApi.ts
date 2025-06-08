import { getMockSearchProducts } from "@/src/features/search/mocks/searchProductMock";
import { fetchServer } from "@/src/shared/fetcher";
import type { SearchResultResponse, Product } from "@/src/features/search/types";

interface BackendSearchData {
    content: Product[];
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
}

/**
 * 상품 검색 API 함수
 */
export async function searchProducts(searchTerm = "", page = 0, size = 10, intensityId?: string, cupSizeId?: string): Promise<SearchResultResponse> {
    try {
        const fetcher = fetchServer();

        // API 호출 파라미터 설정
        const searchParams = new URLSearchParams({
            name: searchTerm,
            page: page.toString(),
            size: size.toString(),
        });

        // 필터 파라미터 추가
        if (intensityId) {
            searchParams.append("intensityId", intensityId);
        }
        if (cupSizeId) {
            searchParams.append("cupSizeId", cupSizeId);
        }

        const response = await fetcher<BackendSearchData>(`/api/products?${searchParams}`);
        if (response.data?.content && Array.isArray(response.data.content)) {
            const backendData = response.data;

            const finalData: SearchResultResponse = {
                content: backendData.content,
                page: backendData.page,
                size: backendData.size,
                totalPages: backendData.totalPages,
                totalElements: backendData.totalElements,
                searchTerm: searchTerm,
            };

            return finalData;
        }

        console.log("API 응답 구조가 예상과 다름, 목 데이터 사용");
        return getMockSearchProducts(searchTerm, page, size, intensityId, cupSizeId);
    } catch (error) {
        console.error("검색 API 오류:", error);
        return getMockSearchProducts(searchTerm, page, size, intensityId, cupSizeId);
    }
}
