import { getMockSearchProducts } from "@/src/features/search/mocks/searchProductMock";
import { fetchServer } from "@/src/shared/fetcher";
import type { SearchResultResponse, Product } from "@/src/features/search/types";

// 백엔드 원본 응답 (Product 타입과 동일)
interface BackendProduct extends Product {}

interface BackendSearchData {
    content: BackendProduct[];
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
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
        return getMockSearchProducts(searchTerm, page, size);
    } catch (error) {
        console.error("검색 API 오류:", error);
        return getMockSearchProducts(searchTerm, page, size);
    }
}
