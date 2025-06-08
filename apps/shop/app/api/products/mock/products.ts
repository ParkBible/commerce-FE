interface MockProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    detail_image: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
    intensity: string;
    cupSize: string;
}

export const MOCK_PRODUCTS: MockProduct[] = [
    {
        id: 1,
        name: "에스프레소",
        price: 2500,
        quantity: 100,
        thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Very Strong",
        cupSize: "30ml",
    },
    {
        id: 2,
        name: "아메리카노",
        price: 3000,
        quantity: 150,
        thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Medium",
        cupSize: "350ml",
    },
    {
        id: 3,
        name: "카페라떼",
        price: 4000,
        quantity: 80,
        thumbnail: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Mild",
        cupSize: "470ml",
    },
    {
        id: 4,
        name: "카푸치노",
        price: 4200,
        quantity: 120,
        thumbnail: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Medium",
        cupSize: "250ml",
    },
    {
        id: 5,
        name: "마키아토",
        price: 4500,
        quantity: 60,
        thumbnail: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Strong",
        cupSize: "110ml",
    },
    {
        id: 6,
        name: "바닐라라떼",
        price: 4800,
        quantity: 90,
        thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Light",
        cupSize: "470ml",
    },
    {
        id: 7,
        name: "헤이즐넛 라떼",
        price: 5000,
        quantity: 70,
        thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Medium",
        cupSize: "350ml",
    },
    {
        id: 8,
        name: "아이스아메리카노",
        price: 3200,
        quantity: 85,
        thumbnail: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Strong",
        cupSize: "470ml",
    },
    {
        id: 9,
        name: "콜드브루",
        price: 3800,
        quantity: 95,
        thumbnail: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Very Strong",
        cupSize: "250ml",
    },
    {
        id: 10,
        name: "플랫 화이트",
        price: 3500,
        quantity: 0, // 품절 상품
        thumbnail: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop&crop=center",
        detail_image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop&crop=center",
        status: "ON_SALE",
        is_deleted: false,
        created_at: "2025-06-03T21:32:04.590Z",
        updated_at: "2025-06-03T21:32:04.590Z",
        intensity: "Mild",
        cupSize: "350ml",
    },
];

// 필터링을 위한 매핑 상수들
export const INTENSITY_MAP: Record<number, string[]> = {
    1: ["Light", "Mild"], // 라이트 0-5
    2: ["Medium"], // 마일드 6-8
    3: ["Strong", "Very Strong"], // 인텐스 9-11
};

export const CUP_SIZE_MAP: Record<number, string[]> = {
    1: ["30ml", "110ml"], // 에스프레소, 룽고 사이즈
    2: ["250ml", "350ml"], // 스몰, 미디엄 사이즈
    3: ["470ml"], // 라지 사이즈
};
