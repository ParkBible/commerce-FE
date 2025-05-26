/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

// 커맨드
// pnpm exec swagger-typescript-api generate -p ./packages/types/swagger.yaml -o ./packages/types --no-client --extract-request-body --extract-response-body

export interface Category {
    id?: number;
    label?: string;
}

export interface ProductStatus {
    code?: "ON_SALE" | "STOPPED" | "HIDDEN";
    label?: string;
}

export interface ProductRequest {
    name: string;
    price: number;
    quantity: number;
    /** @format uri */
    thumbnail: string;
    /** @format uri */
    detailImage: string;
    intensityId: number;
    cupSizeId: number;
}

export type ProductUpdateRequest = ProductRequest & {
    status: "ON_SALE" | "STOPPED" | "HIDDEN";
};

export interface ProductResponse {
    id?: number;
    name?: string;
    price?: number;
    quantity?: number;
    /** @format uri */
    thumbnail?: string;
    /** @format uri */
    detailImage?: string;
    intensity?: Category;
    cupSize?: Category;
    status?: ProductStatus;
    isSoldOut?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
}

export interface CartItem {
    cartItemId?: number;
    productId?: number;
    name?: string;
    price?: number;
    quantity?: number;
    stockQuantity?: number;
    /** @format uri */
    thumbnail?: string;
    isSoldOut?: boolean;
    isAvailable?: boolean;
    requiresQuantityAdjustment?: boolean;
}

export interface CartResponse {
    items?: CartItem[];
    totalPrice?: number;
}

export interface CreateOrderRequest {
    cartItemIds?: number[];
    items?: {
        productId?: number;
        quantity?: number;
    }[];
    deliveryAddressId?: number | null;
    deliveryAddress?: {
        recipientName?: string;
        recipientPhone?: string;
        zipCode?: string;
        address1?: string;
        address2?: string;
    };
    deliveryMessage?: string;
    paymentMethod?: string;
}

export interface OrderListResponse {
    content?: {
        orderNumber?: string;
        status?: {
            code?: string;
            label?: string;
        };
        /** @format date-time */
        orderedAt?: string;
        originalPrice?: number;
        totalDiscount?: number;
        totalPrice?: number;
        items?: {
            productId?: number;
            name?: string;
            /** @format uri */
            thumbnail?: string;
            price?: number;
            quantity?: number;
        }[];
    }[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
}

export interface OrderDetailResponse {
    orderNumber?: string;
    user?: {
        externalId?: string;
        name?: string;
    };
    status?: {
        code?: string;
        label?: string;
    };
    /** @format date-time */
    orderedAt?: string;
    paymentNumber?: string;
    paymentStatus?: {
        code?: string;
        label?: string;
    };
    paymentMethod?: string;
    /** @format date-time */
    paidAt?: string;
    originalPrice?: number;
    itemDiscountTotal?: number;
    orderDiscountTotal?: number;
    totalDiscount?: number;
    totalPrice?: number;
    orderDiscounts?: {
        type?: string;
        name?: string;
        amount?: number;
        couponCode?: string;
    }[];
    items?: {
        productId?: number;
        name?: string;
        thumbnail?: string;
        price?: number;
        quantity?: number;
        originalPrice?: number;
        discountAmount?: number;
        finalPrice?: number;
        discounts?: {
            type?: string;
            name?: string;
            amount?: number;
            couponCode?: string;
        }[];
    }[];
    deliveryAddress?: {
        recipientName?: string;
        recipientPhone?: string;
        zipCode?: string;
        address1?: string;
        address2?: string;
    };
    deliveryMessage?: string;
    deliveryTracking?: {
        companyCode?: string;
        companyName?: string;
        trackingNumber?: string;
        trackingUrl?: string;
    };
    deliveryHistory?: {
        status?: string;
        label?: string;
        /** @format date-time */
        updatedAt?: string;
    }[];
    statusHistory?: {
        type?: string;
        status?: string;
        /** @format date-time */
        updatedAt?: string;
    }[];
    cancellable?: boolean;
    cancelRequested?: boolean;
    cancelReason?: string;
    /** @format date-time */
    canceledAt?: string;
    refundRequested?: boolean;
    refundReason?: string;
    /** @format date-time */
    refundRequestedAt?: string;
    refunded?: boolean;
    /** @format date-time */
    refundedAt?: string;
    reviewable?: boolean;
    reviewWritten?: boolean;
    invoiceUrl?: string;
}

export interface PaymentMethod {
    code?: string;
    label?: string;
}

export interface PaymentResponse {
    paymentNumber?: string;
    orderNumber?: string;
    status?: {
        code?: string;
        label?: string;
    };
    paymentMethod?: string;
    /** @format date-time */
    paidAt?: string;
    totalPrice?: number;
}

export interface PaymentStatusChangeResponse {
    paymentNumber?: string;
    orderNumber?: string;
    status?: {
        code?: string;
        label?: string;
    };
    /** @format date-time */
    updatedAt?: string;
}

export interface PaymentCancelResponse {
    paymentNumber?: string;
    orderNumber?: string;
    status?: {
        code?: string;
        label?: string;
    };
    cancelReason?: string;
    /** @format date-time */
    cancelRequestedAt?: string;
    /** @format date-time */
    cancelApprovedAt?: string;
}

export interface PaymentListResponse {
    content?: {
        paymentNumber?: string;
        orderNumber?: string;
        userName?: string;
        status?: {
            code?: string;
            label?: string;
        };
        paymentMethod?: string;
        /** @format date-time */
        paidAt?: string;
        totalPrice?: number;
    }[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
}

export interface ProductReviewListResponse {
    /** @format float */
    averageRating?: number;
    ratingDistribution?: Record<string, number>;
    reviews?: ReviewWithAdminReply[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
}

export interface UserReviewListResponse {
    content?: (ReviewWithAdminReply & {
        productId?: number;
        productName?: string;
        productThumbnail?: string;
    })[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
}

export interface AdminReviewListResponse {
    content?: {
        reviewId?: number;
        user?: {
            externalId?: string;
            nickname?: string;
        };
        product?: {
            productId?: number;
            name?: string;
        };
        order?: {
            orderNumber?: string;
            /** @format date-time */
            orderedAt?: string;
        };
        orderItemId?: number;
        rating?: number;
        content?: string;
        /** @format date-time */
        createdAt?: string;
        adminReply?: AdminReply;
    }[];
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
}

export interface ReviewWithAdminReply {
    reviewId?: number;
    nickname?: string;
    rating?: number;
    content?: string;
    /** @format date-time */
    createdAt?: string;
    adminReply?: AdminReply;
}

export type AdminReply = {
    content?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
} | null;

export interface ProductCategoriesListData {
    intensities?: Category[];
    cupSizes?: Category[];
}

export interface ProductStatusListData {
    status?: ProductStatus[];
}

export type ProductsListData = ProductResponse[];

export type ProductsCreateData = any;

export type ProductsDetailData = ProductResponse;

export type ProductsUpdateData = any;

export type ProductsDeleteData = any;

export type CartListData = CartResponse;

export interface ItemsCreatePayload {
    productId: number;
    quantity: number;
}

export type ItemsCreateData = CartItem;

export type ItemsDeleteData = any;

export interface ItemsPartialUpdatePayload {
    quantity: number;
}

export type ItemsPartialUpdateData = CartItem;

export type ItemsDelete2Data = any;

export type OrdersListData = OrderListResponse;

export type OrdersCreateData = any;

export type OrdersDetailData = OrderDetailResponse;

export interface CancelCreatePayload {
    reason?: string;
}

export type CancelCreateData = any;

export interface RefundCreatePayload {
    reason?: string;
}

export type RefundCreateData = any;

export type OrdersListResult = any;

export interface OrdersRefundApproveCreatePayload {
    reason?: string;
}

export type OrdersRefundApproveCreateData = any;

export interface OrdersDeliveryStatusPartialUpdatePayload {
    status?: string;
    trackingNumber?: string;
    companyCode?: string;
}

export type OrdersDeliveryStatusPartialUpdateData = any;

export type MethodsListData = PaymentMethod[];

export interface PaymentsCreatePayload {
    orderNumber?: string;
    paymentMethod?: string;
}

export type PaymentsCreateData = PaymentResponse;

export type PaymentsDetailData = PaymentResponse;

export type PaymentsPartialUpdateData = PaymentListResponse;

export interface PaymentsStatusPartialUpdatePayload {
    status?: string;
    reason?: string;
}

export type PaymentsStatusPartialUpdateData = PaymentStatusChangeResponse;

export interface PaymentsCancelCreatePayload {
    reason?: string;
}

export type PaymentsCancelCreateData = PaymentCancelResponse;

export type ReviewsListData = ProductReviewListResponse;

export type MeReviewsListData = UserReviewListResponse;

export interface ReviewsCreatePayload {
    orderNumber?: string;
    orderItemId?: number;
    rating?: number;
    content?: string;
}

export interface ReviewsCreateData {
    reviewId?: number;
    /** @format date-time */
    createdAt?: string;
}

export interface ReviewsUpdatePayload {
    rating?: number;
    content?: string;
}

export interface ReviewsUpdateData {
    /** @format date-time */
    updatedAt?: string;
}

export type ReviewsDeleteData = any;

export type ReviewsListResult = AdminReviewListResponse;

export interface ReviewsReplyCreatePayload {
    content?: string;
}

export interface ReviewsReplyCreateData {
    replyId?: number;
    reviewId?: number;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
}

export type ReviewsReplyDeleteData = any;
