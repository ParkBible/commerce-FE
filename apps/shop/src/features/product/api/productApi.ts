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

export async function getProductReviews(productId: string, sort?: string): Promise<ReviewType[]> {
    try {
        const fetch = fetchServer();

        // 정렬 파라미터가 있으면 쿼리에 추가
        const sortParam = sort ? `?sort=${sort}` : "";
        const response = await fetch<ProductReviewListResponse>(`/api/products/${productId}/reviews${sortParam}`);

        if (response.data === null) {
            return [];
        }

        // API 응답에서 reviews 배열 추출하고 ReviewType으로 변환
        const reviews = response.data.reviews || [];
        return reviews.map((review: ApiReviewResponse) => ({
            reviewId: review.reviewId,
            nickname: review.nickname,
            rating: review.rating,
            createdAt: review.createdAt,
            content: review.content,
            images: [], // API에서 이미지 정보가 없으므로 빈 배열
            adminReply: review.adminReply || undefined,
        }));
    } catch (error) {
        console.error("리뷰 데이터 가져오기 실패:", error);
        return []; // 리뷰는 실패해도 빈 배열 반환
    }
}

export async function getProductReviewStats(productId: string): Promise<{
    averageRating: number;
    ratingDistribution: {
        oneStarCount: number;
        twoStarsCount: number;
        threeStarsCount: number;
        fourStarsCount: number;
        fiveStarsCount: number;
    };
}> {
    try {
        const fetch = fetchServer();
        const response = await fetch<ProductReviewListResponse>(`/api/products/${productId}/reviews`);

        if (response.data === null) {
            return {
                averageRating: 0,
                ratingDistribution: {
                    oneStarCount: 0,
                    twoStarsCount: 0,
                    threeStarsCount: 0,
                    fourStarsCount: 0,
                    fiveStarsCount: 0,
                },
            };
        }

        return {
            averageRating: response.data.averageRating || 0,
            ratingDistribution: {
                oneStarCount: (response.data.ratingDistribution as Record<string, number>)["1"] || 0,
                twoStarsCount: (response.data.ratingDistribution as Record<string, number>)["2"] || 0,
                threeStarsCount: (response.data.ratingDistribution as Record<string, number>)["3"] || 0,
                fourStarsCount: (response.data.ratingDistribution as Record<string, number>)["4"] || 0,
                fiveStarsCount: (response.data.ratingDistribution as Record<string, number>)["5"] || 0,
            },
        };
    } catch (error) {
        console.error("리뷰 통계 데이터 가져오기 실패:", error);
        return {
            averageRating: 0,
            ratingDistribution: {
                oneStarCount: 0,
                twoStarsCount: 0,
                threeStarsCount: 0,
                fourStarsCount: 0,
                fiveStarsCount: 0,
            },
        }; // 리뷰 통계는 실패해도 기본값 반환
    }
}
