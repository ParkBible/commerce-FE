import { getUserReviews } from "@/src/features/myReviews/api/userReviewApi";
import MyReviewsPage from "@/src/features/myReviews/components/MyReviewsPage";

type PageProps = {
    searchParams?: Promise<{
        monthRange?: string | string[];
        page?: string | string[];
    }>;
};

export default async function ReviewManagePage({ searchParams }: PageProps) {
    const parsedParams = await searchParams;

    const monthRange = Number.parseInt(String(parsedParams?.monthRange));
    const page = Number.parseInt(String(parsedParams?.page)) || 0;

    // 사용자의 리뷰 목록
    const reviewsData = await getUserReviews({ monthRange, page });
    const reviews = reviewsData.content || [];

    return (
        <MyReviewsPage
            reviews={reviews}
            totalElements={reviewsData.totalElements || 0}
            totalPages={reviewsData.totalPages || 0}
            currentPage={reviewsData.page || 0}
        />
    );
}
