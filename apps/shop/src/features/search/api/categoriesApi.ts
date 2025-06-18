import { fetchServer } from "@/src/shared/fetcher";

export interface CategoryItem {
    id: string;
    label: string;
}

export interface CategoriesResponse {
    cupSizes: CategoryItem[];
    intensities: CategoryItem[];
}

interface BackendCategoriesData {
    cupSizes: CategoryItem[];
    intensities: CategoryItem[];
}

/**
 * 목데이터 - API 실패 시 fallback 용도
 */
const MOCK_CATEGORIES: CategoriesResponse = {
    cupSizes: [
        { id: "1", label: "25ml" },
        { id: "2", label: "40ml" },
        { id: "3", label: "80ml" },
        { id: "4", label: "150ml" },
        { id: "5", label: "230ml" },
        { id: "6", label: "355ml" },
    ],
    intensities: [
        { id: "7", label: "1" },
        { id: "8", label: "2" },
        { id: "9", label: "3" },
        { id: "10", label: "4" },
        { id: "11", label: "5" },
        { id: "12", label: "6" },
        { id: "13", label: "7" },
        { id: "14", label: "8" },
        { id: "15", label: "9" },
    ],
};

/**
 * 에러를 로깅하고 목데이터를 반환하는 헬퍼 함수
 */
function handleCategoriesError(error: unknown, context: string): CategoriesResponse {
    console.error(`[카테고리 API ${context}]:`, error);
    console.warn("[카테고리 API] 목데이터로 fallback 합니다.");
    return MOCK_CATEGORIES;
}

/**
 * 상품 카테고리 조회 API 함수
 */
export async function getProductCategories(): Promise<CategoriesResponse> {
    try {
        const fetcher = fetchServer();
        const response = await fetcher<BackendCategoriesData>("/products/categories");

        // API 응답 구조 검증
        if (response.data?.cupSizes && response.data?.intensities) {
            return {
                cupSizes: response.data.cupSizes,
                intensities: response.data.intensities,
            };
        }

        // API 응답 구조가 예상과 다른 경우
        return handleCategoriesError(new Error("API 응답 구조가 예상과 다름"), "응답 구조 오류");
    } catch (error) {
        // 네트워크 오류 또는 기타 예외 상황
        return handleCategoriesError(error, "네트워크 오류");
    }
}
