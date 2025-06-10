import type { ReviewData } from "@/features/review/types/type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table/table";
import { useQuery } from "@tanstack/react-query";
import { getMockReviews } from "@/mocks/reviewMock";
import { useState } from "react";
import { createStars } from "@/shared/utils/createStars";
import ReviewDetail from "@/features/review/components/ReviewDetail";

export default function ReviewsPage() {
    const { data } = useQuery<ReviewData>({
        queryKey: ["reviews"],
        queryFn: () => getMockReviews(), // 목 데이터 사용
        // queryFn: () => fetcher("/admin/reviews"), // 실제 API (나중에 활성화)
    });

    const reviews = data?.content || [];
    const [openedReviewIds, setOpenedReviewIds] = useState<number[]>([]);

    const toggleReviewDetails = (reviewId: number) => {
        setOpenedReviewIds(prev => (prev.includes(reviewId) ? prev.filter(id => id !== reviewId) : [...prev, reviewId]));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-h2 font-bold text-gray-900">리뷰 관리</h1>
                    <p className="mt-2 text-gray-600">리뷰 목록을 확인하고 관리하세요.</p>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">리뷰 ID</TableHead>
                            <TableHead>상품 ID</TableHead>
                            <TableHead>상품명</TableHead>
                            <TableHead className="text-right">평점</TableHead>
                            <TableHead className="text-right">작성자</TableHead>
                            <TableHead className="text-right">등록일</TableHead>
                            <TableHead className="text-right">상태</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reviews.map(review => (
                            <>
                                <TableRow
                                    key={review.reviewId}
                                    className={`${review.adminReply ? "bg-[#F9FAFB]" : "bg-white"} cursor-pointer`}
                                    onClick={() => toggleReviewDetails(review.reviewId)}
                                >
                                    <TableCell className="font-medium">{review.reviewId}</TableCell>
                                    <TableCell>{review.productId}</TableCell>
                                    <TableCell>{review.productName}</TableCell>
                                    <TableCell className="text-right">{createStars(review.rating)}</TableCell>
                                    <TableCell className="text-right">{`${review.user.nickname}(${review.user.userId})`}</TableCell>
                                    <TableCell className="text-right">{review.createdAt}</TableCell>
                                    <TableCell className="text-right">{review.adminReply ? "답변 완료" : "미답변"}</TableCell>
                                </TableRow>
                                {openedReviewIds.includes(review.reviewId) && <ReviewDetail review={review} />}
                            </>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
