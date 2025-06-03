// Badge 타입 정의
export interface Badge {
    text: string;
    type: "category" | "new" | "best" | "decaf";
}

// Product 타입 정의
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    capsuleCount: number;
    intensity: number;
    cupSize: string;
    imageUrl: string;
    badges: Badge[];
    inStock: boolean;
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
