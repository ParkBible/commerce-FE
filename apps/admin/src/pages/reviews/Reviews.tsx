import type { ReviewData } from "@/features/review/types/type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table/table";
import { useQuery } from "@tanstack/react-query";
import { getMockReviews } from "@/mocks/reviewMock";
import { useState } from "react";
import { createStars } from "@/shared/utils/createStars";
import ReviewDetail from "@/features/review/components/ReviewDetail";
import Search from "@/shared/components/shared/Search";
import { Pagination } from "@/shared/components/ui/pagination";

export default function ReviewsPage() {
    const { data } = useQuery<ReviewData>({
        queryKey: ["reviews"],
        queryFn: () => getMockReviews(), // 목 데이터 사용
        // queryFn: () => fetcher("/admin/reviews"), // 실제 API (나중에 활성화)
    });

    const reviews = data?.content || [];
    const [openedReviewIds, setOpenedReviewIds] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const toggleReviewDetails = (reviewId: number) => {
        setOpenedReviewIds(prev => (prev.includes(reviewId) ? prev.filter(id => id !== reviewId) : [...prev, reviewId]));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onSearch = (query: string) => {
        // 검색 로직 구현 (예: API 호출 또는 필터링)
        console.log("검색어:", query);
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
                <Search placeholder="상품명 또는 ID 검색" onEnterKeyPress={onSearch}>
                    <>
                        {/* 카테고리 필터 */}
                        <div className="w-auto">
                            <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="">모든 카테고리</option>
                                <option value="과일/채소">과일/채소</option>
                                <option value="정육/계란">정육/계란</option>
                                <option value="유제품">유제품</option>
                                <option value="베이커리">베이커리</option>
                                <option value="간식">간식</option>
                                <option value="음료">음료</option>
                                <option value="견과류">견과류</option>
                            </select>
                        </div>

                        {/* 상태 필터 */}
                        <div className="w-auto">
                            <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="">모든 상태</option>
                                <option value="active">판매 중</option>
                                <option value="inactive">판매 중지</option>
                            </select>
                        </div>
                    </>
                </Search>
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
            {/* 페이지네이션 */}
            <Pagination currentPage={currentPage} totalItems={reviews.length} onPageChange={handlePageChange} />
        </div>
    );
}
