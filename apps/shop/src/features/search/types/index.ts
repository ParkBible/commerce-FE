// Badge 타입 정의
export interface Badge {
    text: string;
    type: "category" | "new" | "best" | "decaf";
}

// Product 타입 정의 (백엔드 API 구조에 맞춤)
export interface Product {
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

// 검색 결과 응답 타입
export interface SearchResultResponse {
    content?: Product[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
    searchTerm?: string;
}
