import { fetchServer } from "@/src/shared/fetcher";
import type { ProductType, ReviewType } from "@/src/features/product/types";

// API 응답 타입 정의
interface ApiReviewResponse {
    reviewId: number;
    nickname: string;
    rating: number;
    content: string;
    createdAt: string;
    adminReply: {
        content: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}

interface ProductReviewListResponse {
    averageRating: number;
    ratingDistribution: Record<string, number>;
    reviews: ApiReviewResponse[];
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
}

// 백엔드 API에서 직접 사용 (에러를 제대로 전파하기 위해 fetchServer 직접 사용)
export async function getProduct(productId: string): Promise<ProductType> {
    const fetch = fetchServer();
    const response = await fetch<ProductType>(`/api/products/${productId}`);

    if (response.data === null) {
        throw new Error("상품 데이터를 가져올 수 없습니다.");
    }

    return response.data;
}

export async function getProductReviews(productId: string): Promise<ReviewType[]> {
    try {
        const fetch = fetchServer();
        const response = await fetch<ProductReviewListResponse>(`/api/products/${productId}/reviews`);

        if (response.data === null) {
            return [];
        }

        // API 응답에서 reviews 배열 추출하고 ReviewType으로 변환
        const reviews = response.data.reviews || [];
        return reviews.map((review: ApiReviewResponse) => ({
            id: review.reviewId,
            userName: review.nickname,
            rating: review.rating,
            date: new Date(review.createdAt).toISOString().split("T")[0],
            content: review.content,
            images: [], // API에서 이미지 정보가 없으므로 빈 배열
        }));
    } catch (error) {
        console.error("리뷰 데이터 가져오기 실패:", error);
        return []; // 리뷰는 실패해도 빈 배열 반환
    }
}

export async function getProductReviewStats(productId: string): Promise<{
    totalRating: number;
    ratingCounts: number[];
}> {
    try {
        const fetch = fetchServer();
        const response = await fetch<ProductReviewListResponse>(`/api/products/${productId}/reviews`);

        if (response.data === null) {
            return {
                totalRating: 0,
                ratingCounts: [0, 0, 0, 0, 0],
            };
        }

        // ratingDistribution을 ratingCounts 배열로 변환 (5점부터 1점 순서)
        const ratingCounts = [
            (response.data.ratingDistribution as Record<string, number>)["5"] || 0,
            (response.data.ratingDistribution as Record<string, number>)["4"] || 0,
            (response.data.ratingDistribution as Record<string, number>)["3"] || 0,
            (response.data.ratingDistribution as Record<string, number>)["2"] || 0,
            (response.data.ratingDistribution as Record<string, number>)["1"] || 0,
        ];

        return {
            totalRating: response.data.averageRating || 0,
            ratingCounts,
        };
    } catch (error) {
        console.error("리뷰 통계 데이터 가져오기 실패:", error);
        return {
            totalRating: 0,
            ratingCounts: [0, 0, 0, 0, 0],
        }; // 리뷰 통계는 실패해도 기본값 반환
    }
}
