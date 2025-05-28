// 상품 추가 (POST /cart/items?userId={})
export interface AddCartItemRequest {
    productId: number;
    quantity: number;
}

export interface AddCartItemResponse {
    stockQuantity: number;
    requiresQuantityAdjustment: boolean;
}

// 수량 수정 (PATCH /cart/items/{cartItemid})
export interface UpdateCartItemRequest {
    userId: number;
    quantity: number;
    stockQuantity: number;
    requiresQuantityAdjustment: boolean;
}

// 삭제 (DELETE /carts)
export interface DeleteCartItemsRequest {
    productIds: number[];
}
