import type { SearchResultResponse } from "@/src/features/search/types";

/**
 * 검색 상품 목 데이터를 반환하는 함수
 */
export function getMockSearchProducts(searchTerm = "버츄오", page = 0, size = 10): SearchResultResponse {
    return {
        content: [
            {
                id: "1",
                title: "스위트 바닐라향* 디카페나토",
                description: "달콤한 바닐라향과 함께하는 여유",
                price: 11500,
                capsuleCount: 10,
                intensity: 6,
                cupSize: "230ml",
                imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",
                badges: [
                    { text: "머그", type: "category" as const },
                    { text: "신제품", type: "new" as const },
                    { text: "디카페인", type: "decaf" as const },
                ],
                inStock: true,
            },
            {
                id: "2",
                title: "알티시오 디카페나토",
                description: "풍부한 바디감의 디카페인",
                price: 8000,
                capsuleCount: 10,
                intensity: 9,
                cupSize: "40ml",
                imageUrl: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000",
                badges: [
                    { text: "에스프레소", type: "category" as const },
                    { text: "베스트", type: "best" as const },
                    { text: "디카페인", type: "decaf" as const },
                ],
                inStock: true,
            },
            {
                id: "3",
                title: "비비다",
                description: "고소한 비스킷향 커피",
                price: 12000,
                capsuleCount: 10,
                intensity: 6,
                cupSize: "230ml",
                imageUrl: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1000",
                badges: [
                    { text: "머그", type: "category" as const },
                    { text: "신제품", type: "new" as const },
                ],
                inStock: true,
            },
            {
                id: "4",
                title: "엘살바도르",
                description: "레드 허니 가공의 과일잼향",
                price: 11000,
                capsuleCount: 10,
                intensity: 5,
                cupSize: "230ml",
                imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000",
                badges: [{ text: "머그", type: "category" as const }],
                inStock: true,
            },
        ],
        page: page,
        size: size,
        totalPages: 1,
        totalElements: 4,
        searchTerm: searchTerm,
    };
}
