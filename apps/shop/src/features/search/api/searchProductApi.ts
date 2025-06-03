import { fetchData } from "@/src/shared/utils/api";
import { getMockSearchProducts } from "@/src/features/search/mocks/searchProductMock";
import type { SearchResultResponse } from "@/src/features/search/types";

/**
 * 상품 검색 API 함수
 */
export async function searchProducts(searchTerm = "버츄오", page = 0, size = 10): Promise<SearchResultResponse> {
    const defaultValue = {
        content: [],
        page: 0,
        size: 10,
        totalPages: 0,
        totalElements: 0,
        searchTerm: searchTerm,
    };

    // 목 데이터 생성 함수
    const mockFn = () => getMockSearchProducts(searchTerm, page, size);

    return fetchData({
        endpoint: `/products/search?q=${encodeURIComponent(searchTerm)}&page=${page}&size=${size}`,
        defaultValue,
        mockDataFn: mockFn,
    });
}
