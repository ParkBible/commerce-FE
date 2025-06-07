// Badge 타입 정의
export interface Badge {
    text: string;
    type: "category" | "new" | "best" | "decaf";
}

// Product 타입 정의
export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    detail_image: string;
    intensity: string;
    cupSize: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
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
