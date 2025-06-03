"use client";

import { useState } from "react";
import MyReviewCard from "./MyReviewCard";
import type { UserReview } from "@/src/features/myReviews/types";
import { fetchClient } from "@/src/shared/fetcher";
import CreateReviewModal from "../../review/components/CreateReviewModal";

interface MyReviewListProps {
    reviews: UserReview[];
    hasMore?: boolean;
}

export default function MyReviewList({ reviews, hasMore = false }: MyReviewListProps) {
    const [reviewList, setReviewList] = useState(reviews);
    const [editingReview, setEditingReview] = useState<UserReview | null>(null);
    const fetch = fetchClient();

    const handleEdit = (review: UserReview) => {
        setEditingReview(review);
    };

    const handleDelete = (reviewId: number) => {
        // TODO: 리뷰 삭제 API 호출
        const confirmDelete = confirm("정말 이 리뷰를 삭제하시겠습니까?");
        if (confirmDelete) {
            setReviewList(prev => prev.filter(review => review.reviewId !== reviewId));
        }
    };

    if (!reviewList || reviewList.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-2">작성한 리뷰가 없습니다</div>
                <div className="text-gray-500 text-sm">구매하신 상품에 대한 리뷰를 작성해보세요</div>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-6">
                {/* 리뷰 목록 */}
                <div className="space-y-4">
                    {reviewList.map(review => (
                        <UserReviewCard key={`review-${review.reviewId}`} review={review} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </div>

                {/* 더보기 버튼 */}
                {hasMore && (
                    <div className="text-center pt-8">
                        <button
                            type="button"
                            className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            더보기
                        </button>
                    </div>
                )}
            </div>
            {editingReview && (
                <CreateReviewModal
                    isEdit={true}
                    reviewInfo={{
                        reviewId: editingReview.reviewId,
                        rating: editingReview.rating,
                        content: editingReview.content || "",
                    }}
                    product={{
                        productId: editingReview.productId,
                        title: editingReview.productName,
                        imageUrl: editingReview.productThumbnail || "",
                    }}
                    isOpen={!!editingReview}
                    onClickClose={() => setEditingReview(null)}
                />
            )}
        </>
    );
}
