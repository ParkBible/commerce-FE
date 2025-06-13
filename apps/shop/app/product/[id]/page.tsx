import { notFound } from "next/navigation";
import { ProductPage } from "@/src/features/product/components/ProductPage";
import { getProduct, getProductReviews, getProductReviewStats } from "@/src/features/product/api/productApi";

interface ProductDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    try {
        const [product, reviews, reviewStats] = await Promise.all([getProduct(id), getProductReviews(id), getProductReviewStats(id)]);

        return <ProductPage product={product} reviews={reviews} reviewStats={reviewStats} recommendedProducts={[]} />;
    } catch (error: unknown) {
        // 상품을 찾을 수 없는 경우 404 페이지 표시
        if (error instanceof Error && "code" in error && (error as { code: string }).code === "PRODUCT_NOT_FOUND") {
            notFound();
        }

        // 다른 에러는 그대로 던짐
        throw error;
    }
}
