interface MockProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    detailImage: string;
    intensity: string;
    cupSize: string;
    isSoldOut: boolean;
}

export const MOCK_PRODUCTS: MockProduct[] = [
    {
        id: 1,
        name: "네스프레소 에스프레소 25ml",
        price: 2500,
        quantity: 100,
        thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop&crop=center",
        intensity: "8",
        cupSize: "25ml",
        isSoldOut: false,
    },
    {
        id: 2,
        name: "네스프레소 아메리카노 355ml",
        price: 3000,
        quantity: 150,
        thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center",
        intensity: "5",
        cupSize: "355ml",
        isSoldOut: false,
    },
    {
        id: 3,
        name: "돌체구스토 카페라떼 150ml",
        price: 4000,
        quantity: 80,
        thumbnail: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=400&fit=crop&crop=center",
        intensity: "4",
        cupSize: "150ml",
        isSoldOut: false,
    },
    {
        id: 4,
        name: "네스프레소 카푸치노 230ml",
        price: 4200,
        quantity: 120,
        thumbnail: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop&crop=center",
        intensity: "6",
        cupSize: "230ml",
        isSoldOut: false,
    },
    {
        id: 5,
        name: "돌체구스토 마키아토 40ml",
        price: 4500,
        quantity: 60,
        thumbnail: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&crop=center",
        intensity: "7",
        cupSize: "40ml",
        isSoldOut: false,
    },
    {
        id: 6,
        name: "네스프레소 바닐라라떼 355ml",
        price: 4800,
        quantity: 90,
        thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&crop=center",
        intensity: "2",
        cupSize: "355ml",
        isSoldOut: false,
    },
    {
        id: 7,
        name: "돌체구스토 헤이즐넛 라떼 80ml",
        price: 5000,
        quantity: 70,
        thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop&crop=center",
        intensity: "4",
        cupSize: "80ml",
        isSoldOut: false,
    },
    {
        id: 8,
        name: "아이스아메리카노 355ml",
        price: 3200,
        quantity: 85,
        thumbnail: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&crop=center",
        intensity: "5",
        cupSize: "355ml",
        isSoldOut: false,
    },
    {
        id: 9,
        name: "돌체구스토 콜드브루 230ml",
        price: 3800,
        quantity: 95,
        thumbnail: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop&crop=center",
        intensity: "8",
        cupSize: "230ml",
        isSoldOut: false,
    },
    {
        id: 10,
        name: "네스프레소 플랫 화이트 25ml",
        price: 3500,
        quantity: 0,
        thumbnail: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop&crop=center",
        detailImage: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop&crop=center",
        intensity: "3",
        cupSize: "25ml",
        isSoldOut: true,
    },
];

// 카테고리 API 목데이터와 일치하는 필터링 매핑
// 실제 카테고리 ID와 상품 데이터 매핑
export const INTENSITY_MAP: Record<number, string[]> = {
    7: ["1"], // 카테고리 id:7 = 강도 1
    8: ["2"], // 카테고리 id:8 = 강도 2
    9: ["3"], // 카테고리 id:9 = 강도 3
    10: ["4"], // 카테고리 id:10 = 강도 4
    11: ["5"], // 카테고리 id:11 = 강도 5
    12: ["6"], // 카테고리 id:12 = 강도 6
    13: ["7"], // 카테고리 id:13 = 강도 7
    14: ["8"], // 카테고리 id:14 = 강도 8
    15: ["9"], // 카테고리 id:15 = 강도 9
};

export const CUP_SIZE_MAP: Record<number, string[]> = {
    1: ["25ml"], // 카테고리 id:1 = 25ml
    2: ["40ml"], // 카테고리 id:2 = 40ml
    3: ["80ml"], // 카테고리 id:3 = 80ml
    4: ["150ml"], // 카테고리 id:4 = 150ml
    5: ["230ml"], // 카테고리 id:5 = 230ml
    6: ["355ml"], // 카테고리 id:6 = 355ml
};
