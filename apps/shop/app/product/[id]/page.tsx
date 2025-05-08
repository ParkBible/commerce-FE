import * as React from "react";
import { ProductPage } from "@/src/features/product/components/ProductPage";
import {
    mockProduct,
    mockReviews,
    mockReviewStats,
    mockRecommendedProducts,
} from "@/src/features/product/data/mockProduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `${mockProduct.title} | 801 COFFEE`,
    description: mockProduct.description,
};

export default function ProductDetailPage({
    params,
}: { params: { id: string } }) {
    // ID를 사용하여 필요한 데이터를 불러올 예정
    return (
        <ProductPage
            product={mockProduct}
            reviews={mockReviews}
            reviewStats={mockReviewStats}
            recommendedProducts={mockRecommendedProducts}
        />
    );
}
