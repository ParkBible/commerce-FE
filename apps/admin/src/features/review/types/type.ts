export interface AdminReply {
    content: string;
    createdAt: string;
}

export interface Review {
    reviewId: number;
    rating: number;
    content: string;
    createdAt: string;
    adminReply?: AdminReply | null;
    productId: number;
    productName: string;
    productThumbnail: string;
    user: User;
}

export interface ReviewData {
    content: Review[];
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
}

interface User {
    userId: string;
    nickname: string;
}
