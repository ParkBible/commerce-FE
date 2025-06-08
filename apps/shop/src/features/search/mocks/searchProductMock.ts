import type { SearchResultResponse } from "@/src/features/search/types";

/**
 * 검색 상품 목 데이터를 반환하는 함수 - 백엔드 원본 형식
 */
export function getMockSearchProducts(searchTerm = "", page = 0, size = 10, strength?: string, cupSize?: string): SearchResultResponse {
    const allProducts = [
        {
            id: 1,
            name: "에스프레소",
            price: 2500,
            quantity: 150,
            thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&h=400",
            intensity: "Very Strong",
            cupSize: "30ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T09:00:00.000Z",
            updated_at: "2025-01-14T09:00:00.000Z",
        },
        {
            id: 2,
            name: "아메리카노",
            price: 3000,
            quantity: 200,
            thumbnail: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=600&h=400",
            intensity: "Medium",
            cupSize: "350ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T09:15:00.000Z",
            updated_at: "2025-01-14T09:15:00.000Z",
        },
        {
            id: 3,
            name: "카페라떼",
            price: 4000,
            quantity: 180,
            thumbnail: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&h=400",
            intensity: "Mild",
            cupSize: "470ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T09:30:00.000Z",
            updated_at: "2025-01-14T09:30:00.000Z",
        },
        {
            id: 4,
            name: "카푸치노",
            price: 4200,
            quantity: 160,
            thumbnail: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600&h=400",
            intensity: "Medium",
            cupSize: "250ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T09:45:00.000Z",
            updated_at: "2025-01-14T09:45:00.000Z",
        },
        {
            id: 5,
            name: "마키아토",
            price: 4500,
            quantity: 140,
            thumbnail: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&h=400",
            intensity: "Strong",
            cupSize: "110ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T10:00:00.000Z",
            updated_at: "2025-01-14T10:00:00.000Z",
        },
        {
            id: 6,
            name: "바닐라라떼",
            price: 4800,
            quantity: 120,
            thumbnail: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&h=400",
            intensity: "Light",
            cupSize: "470ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T10:15:00.000Z",
            updated_at: "2025-01-14T10:15:00.000Z",
        },
        {
            id: 7,
            name: "카라멜마끼아토",
            price: 5000,
            quantity: 100,
            thumbnail: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&h=400",
            intensity: "Medium",
            cupSize: "350ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T10:30:00.000Z",
            updated_at: "2025-01-14T10:30:00.000Z",
        },
        {
            id: 8,
            name: "아이스아메리카노",
            price: 3200,
            quantity: 220,
            thumbnail: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&h=400",
            intensity: "Strong",
            cupSize: "470ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T10:45:00.000Z",
            updated_at: "2025-01-14T10:45:00.000Z",
        },
        {
            id: 9,
            name: "콜드브루",
            price: 3800,
            quantity: 80,
            thumbnail: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&h=400",
            intensity: "Very Strong",
            cupSize: "250ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T11:00:00.000Z",
            updated_at: "2025-01-14T11:00:00.000Z",
        },
        {
            id: 10,
            name: "헤이즐넛 라떼",
            price: 3500,
            quantity: 0, // 품절
            thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=300&h=300",
            detail_image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&h=400",
            intensity: "Light",
            cupSize: "350ml",
            status: "ON_SALE" as const,
            is_deleted: false,
            created_at: "2025-01-14T11:15:00.000Z",
            updated_at: "2025-01-14T11:15:00.000Z",
        },
    ];

    // 필터링 로직
    let filteredProducts = allProducts;

    // 검색어 필터링
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // 강도 필터링
    if (strength) {
        filteredProducts = filteredProducts.filter(product => product.intensity === strength);
    }

    // 컵사이즈 필터링
    if (cupSize) {
        filteredProducts = filteredProducts.filter(product => product.cupSize === cupSize);
    }

    // 페이지네이션
    const startIndex = page * size;
    const endIndex = startIndex + size;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const mockData = {
        content: paginatedProducts,
        page: page,
        size: size,
        totalPages: Math.ceil(filteredProducts.length / size),
        totalElements: filteredProducts.length,
        searchTerm: searchTerm,
    };

    return mockData;
}
