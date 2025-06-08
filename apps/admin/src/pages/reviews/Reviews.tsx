import type { ReviewData } from "@/features/review/types/type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table/table";
import { fetcher } from "@/shared/kyInstance";
import { useQuery } from "@tanstack/react-query";

export default function ReviewsPage() {
    const { data } = useQuery<ReviewData>({
        queryKey: ["reviews"],
        queryFn: () => fetcher("/admin/reviews"),
    });

    const reviews = data?.content || [];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-h2 font-bold text-gray-900">리뷰 관리</h1>
                    <p className="mt-2 text-gray-600">리뷰 목록을 확인하고 관리하세요.</p>
                </div>
                <button
                    type="button"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    + 상품 추가
                </button>
            </div>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">리뷰 ID</TableHead>
                            <TableHead>상품 ID</TableHead>
                            <TableHead>상품명</TableHead>
                            <TableHead className="text-right">작성자</TableHead>
                            <TableHead className="text-right">등록일</TableHead>
                            <TableHead className="text-right">상태</TableHead>
                            <TableHead className="text-right">평점</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reviews.map(review => (
                            <TableRow key={review.reviewId}>
                                <TableCell className="font-medium">{review.reviewId}</TableCell>
                                <TableCell>{review.productId}</TableCell>
                                <TableCell>{review.productName}</TableCell>
                                <TableCell className="text-right">{`${review.user.nickname}(${review.user.userId})`}</TableCell>
                                <TableCell className="text-right">{review.createdAt}</TableCell>
                                <TableCell className="text-right">{review.adminReply ? "답변 완료" : "미답변"}</TableCell>
                                <TableCell className="text-right">{review.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
