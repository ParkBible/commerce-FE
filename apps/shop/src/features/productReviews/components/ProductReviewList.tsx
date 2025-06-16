"use client";

import ProductReviewCard from "./ProductReviewCard";
import type { ReviewType } from "@/src/shared/entities/review/types";

interface ProductReviewListProps {
    reviews: ReviewType[];
}

export default function ProductReviewList({ reviews }: ProductReviewListProps) {
    return (
        <div className="space-y-6">
            {/* 리뷰 목록 */}
            <div className="space-y-6">
                {reviews.map(review => (
                    <ProductReviewCard key={review.reviewId} review={review} />
                ))}
            </div>
        </div>
    );
}
