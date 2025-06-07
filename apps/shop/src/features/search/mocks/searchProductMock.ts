import type { SearchResultResponse } from "@/src/features/search/types";

/**
 * 검색 상품 목 데이터를 반환하는 함수 - 백엔드 원본 형식
 */
export function getMockSearchProducts(searchTerm = "", page = 0, size = 10): SearchResultResponse {
    const mockData = {
        content: [
            {
                id: 1,  // ✅ number 그대로
                name: "스위트 바닐라향* 디카페나토",  // ✅ title → name
                price: 11500,
                quantity: 150,  // ✅ stockQuantity → quantity
                thumbnail: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",  // ✅ imageUrl → thumbnail
                detail_image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200",  // ✅ 백엔드 필드
                intensity: "Medium",  // ✅ 문자열 그대로
                cupSize: "230ml",
                status: "ON_SALE" as const,  // ✅ 백엔드 필드
                is_deleted: false,  // ✅ 백엔드 필드
                created_at: "2025-06-03T12:32:04.590Z",  // ✅ 백엔드 필드
                updated_at: "2025-06-03T12:32:04.590Z",  // ✅ 백엔드 필드
            },
            {
                id: 2,
                name: "아메리카노 로스팅",
                price: 9800,
                quantity: 50,
                thumbnail: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000",
                detail_image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000",
                intensity: "Strong",
                cupSize: "230ml",
                status: "ON_SALE" as const,
                is_deleted: false,
                created_at: "2025-06-03T12:32:04.590Z",
                updated_at: "2025-06-03T12:32:04.590Z",
            },
            {
                id: 3,
                name: "에스프레소 인텐소",
                price: 12000,
                quantity: 10,
                thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000",
                detail_image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200",
                intensity: "Very Strong",
                cupSize: "40ml",
                status: "ON_SALE" as const,
                is_deleted: false,
                created_at: "2025-06-03T12:32:04.590Z",
                updated_at: "2025-06-03T12:32:04.590Z",
            },
            {
                id: 4,
                name: "콜드브루 디카페인",
                price: 13500,
                quantity: 0,  // ✅ 품절 상태
                thumbnail: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000",
                detail_image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1200",
                intensity: "Light",
                cupSize: "230ml",
                status: "ON_SALE" as const,
                is_deleted: false,
                created_at: "2025-06-03T12:32:04.590Z",
                updated_at: "2025-06-03T12:32:04.590Z",
            },
            {
                id: 5,
                name: "카라멜 마끼아또",
                price: 14000,
                quantity: 200,
                thumbnail: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000",
                detail_image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200",
                intensity: "Medium",
                cupSize: "230ml",
                status: "ON_SALE" as const,
                is_deleted: false,
                created_at: "2025-06-03T12:32:04.590Z",
                updated_at: "2025-06-03T12:32:04.590Z",
            }
        ],
        page: page,
        size: size,
        totalPages: 1,
        totalElements: 5,
        searchTerm: searchTerm,
    };
    
    return mockData;
}
