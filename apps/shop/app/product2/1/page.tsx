import * as React from "react";
import { ProductPage } from "@/src/features/product2/components/ProductPage";
import {
    mockProduct,
    mockReviews,
    mockReviewStats,
    mockRecommendedProducts,
} from "@/src/features/product2/data/mockProduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `${mockProduct.title} | 801 COFFEE`,
    description: mockProduct.description,
};

export default function ProductDetailPage() {
    return (
        <ProductPage
            product={mockProduct}
            reviews={mockReviews}
            reviewStats={mockReviewStats}
            recommendedProducts={mockRecommendedProducts}
        />
    );
}
