"use client";

import { useState } from "react";
import type { UserReview } from "@/src/features/myReviews/types";
import { fetchClient } from "@/src/shared/fetcher";
import MyReviewCard from "@/src/features/myReviews/components/MyReviewCard";
import CreateReviewModal from "@/src/features/reviewCreate/components/CreateReviewModal";
import ConfirmDialog from "@/src/shared/components/shared/ConfirmDialog";
import { useToast } from "@/src/shared/hooks/useToast";

interface MyReviewListProps {
    reviews: UserReview[];
    hasMore?: boolean;
}

export default function MyReviewList({ reviews, hasMore = false }: MyReviewListProps) {
    const [reviewList, setReviewList] = useState(reviews);
    const [editingReview, setEditingReview] = useState<UserReview | null>(null);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
    const fetch = fetchClient();
    const { toast, ToastUI } = useToast();

    const handleEdit = (review: UserReview) => {
        setEditingReview(review);
    };

    const onDeleteClick = () => {
        // TODO: 리뷰 삭제 API 호출
        setIsDeleteAlertOpen(true);
    };

    const onDeleteConfirm = () => {
        setIsDeleteAlertOpen(false);
        requestDelete();
    };

    const requestDelete = async () => {
        const reviewId = editingReview?.reviewId;

        try {
            await fetch(`/reviews/${reviewId}`, {
                method: "DELETE",
            });
            setReviewList(prev => prev.filter(review => review.reviewId !== reviewId));
        } catch (error) {
            console.error("리뷰 삭제 실패:", error);
            toast({
                message: "리뷰 삭제 중 오류가 발생했습니다.",
            });
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
                        <MyReviewCard key={`review-${review.reviewId}`} review={review} onEdit={handleEdit} onDelete={onDeleteClick} />
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
            <ConfirmDialog
                open={isDeleteAlertOpen}
                title="리뷰 삭제"
                description={<span className="text-gray-700">정말 리뷰를 삭제하시겠습니까?</span>}
                cancelText="취소"
                confirmText="삭제"
                onCancel={() => setIsDeleteAlertOpen(false)}
                onConfirm={() => {
                    onDeleteConfirm();
                }}
            />
            {ToastUI}
        </>
    );
}
