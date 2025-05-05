"use client";
import * as React from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ReviewSection } from "./ReviewSection";

// ProductDetailPageReview 컴포넌트
interface ProductDetailPageReviewProps {
  productId?: string;
}

export const ProductDetailPageReview = ({ productId }: ProductDetailPageReviewProps) => {
  const [activeTab, setActiveTab] = React.useState<'details' | 'reviews'>('reviews');

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col mx-auto w-full max-w-[1240px] max-md:max-w-full">
        {/* <Breadcrumb /> */}
        <div className="mt-10 max-md:max-w-full">
          {productId && <div className="mb-4 text-sm text-gray-500">상품 ID: {productId}</div>}
          <div className="flex gap-5 max-md:flex-col">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>

        <nav className="flex gap-10 self-center mt-16 max-w-full text-xl leading-none w-[658px] max-md:mt-10">
          <button
            className={`grow self-start w-[116px] ${
              activeTab === 'details' ? 'font-medium' : ''
            }`}
            onClick={() => setActiveTab('details')}
          >
            상품 상세
          </button>
          <div className="flex flex-col grow font-medium text-center text-black w-fit">
            <button
              className={activeTab === 'reviews' ? 'font-medium' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              리뷰
            </button>
            {activeTab === 'reviews' && (
              <div className="mt-6 h-1 border-b-4 border-black" />
            )}
          </div>
        </nav>
        <hr className="h-px border border-solid border-gray-200 border-opacity-50 max-md:max-w-full" />

        {activeTab === 'reviews' && <ReviewSection />}
      </div>
    </main>
  );
}; 