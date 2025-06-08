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

        // API 응답 구조가 예상과 다른 경우 빈 결과 반환
        console.log("API 응답 구조가 예상과 다름");
        return {
            content: [],
            page: page,
            size: size,
            totalPages: 0,
            totalElements: 0,
            searchTerm: searchTerm,
        };
    } catch (error) {
        console.error("검색 API 오류:", error);
        // 오류 발생 시 빈 결과 반환
        return {
            content: [],
            page: page,
            size: size,
            totalPages: 0,
            totalElements: 0,
            searchTerm: searchTerm,
        };
    }
}
