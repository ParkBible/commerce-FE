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
 * 상품 카테고리 조회 API 함수
 */
export async function getProductCategories(): Promise<CategoriesResponse | null> {
    try {
        const fetcher = fetchServer();
        const response = await fetcher<BackendCategoriesData>("/products/categories");

        if (response.data?.cupSizes && response.data?.intensities) {
            return {
                cupSizes: response.data.cupSizes,
                intensities: response.data.intensities,
            };
        }

        console.error("카테고리 API 응답 구조가 예상과 다름:", response);
        return null;
    } catch (error) {
        console.error("카테고리 조회 실패:", error);
        return null;
    }
}
