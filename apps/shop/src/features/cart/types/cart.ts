export interface CartItem {
    cartItemId: number;
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    stockQuantity: number;
    thumbnail: string;
    isAvailable: boolean;
}

export interface GetCartResponse {
    cartItems: CartItem[];
    totalPrice: number;
    deliveryPrice: number;
}

// 상품 추가 (POST /cart-items)
export interface AddCartItemRequest {
    productId: number;
    quantity: number;
}

export interface AddCartItemResponse {
    quantity: number;
    stockQuantity: number;
    requiresQuantityAdjustment: boolean;
}

// 수량 수정 (PATCH /cart-items/{cartItemid})
export interface UpdateCartItemRequest {
    quantity: number;
}

export interface UpdateCartItemResponse {
    userId: number;
    quantity: number;
    stockQuantity: number;
    requiresQuantityAdjustment: boolean;
}

// 삭제 (DELETE /cart-items/delete)
export interface DeleteCartItemsRequest {
    productIds: number[];
}
