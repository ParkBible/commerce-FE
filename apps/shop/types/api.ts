// 상품 관련 타입
export interface Product {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    detail_image: string;
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    group_id: number;
    sort_order: number;
}

export interface CategoryGroup {
    id: number;
    title: string;
    categories: Category[];
}

// 검색 관련 타입
export interface SearchParams {
    name?: string;
    intensityId?: number;
    cupSizeId?: number;
    status?: string;
    page?: number;
    size?: number;
    sort?: string;
}

export interface SearchResponse {
    products: Product[];
    totalElements: number;
    totalPages: number;
    currentPage: number;
    size: number;
}

// 장바구니 관련 타입
export interface CartItem {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    product: Product;
}

export interface CartResponse {
    items: CartItem[];
    totalPrice: number;
}

// 주문 관련 타입
export interface Order {
    id: number;
    order_number: string;
    user_id: number;
    total_amount: number;
    status: string;
    created_at: string;
}

// API 응답 타입
export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface ApiError {
    message: string;
    statusCode: number;
}
