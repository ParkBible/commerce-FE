import { ProductDetailPageReview } from "./components";
import { use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <ProductDetailPageReview productId={id} />;
} 