import { ProductPage } from "@/src/features/product/components/ProductPage";
import { getProduct, getProductReviews, getProductReviewStats, getRecommendedProducts } from "@/src/features/product/api/productApi";

interface ProductDetailPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductDetailPage({ params, searchParams }: ProductDetailPageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const id = resolvedParams.id;
    const sort = (resolvedSearchParams.sort as string) || "";

    const [product, review, reviewStats] = await Promise.all([
        getProduct(id),
        getProductReviews(id, 0, sort), // 정렬 파라미터 추가
        getProductReviewStats(id),
    ]);

    return <ProductPage product={product} reviews={review.content} reviewStats={reviewStats} />;
}
