"use client";
import * as React from "react";
import { NavigationBar } from "./NavigationBar";
import { Breadcrumb } from "./Breadcrumb";
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
    <main className="flex overflow-hidden flex-col pb-20 bg-white">
      <NavigationBar />
      <div className="flex flex-col self-center mt-6 w-full max-w-[1240px] max-md:max-w-full">
        <Breadcrumb />
        <div className="mt-10 max-md:max-w-full">
          {productId && <div className="mb-4 text-sm text-gray-500">상품 ID: {productId}</div>}
          <div className="flex gap-5 max-md:flex-col">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>

        <nav className="flex z-10 flex-wrap gap-10 self-center mt-20 ml-20 max-w-full text-xl leading-none w-[658px] max-md:mt-10">
          <button
            className={`grow shrink self-start w-[116px] ${
              activeTab === 'details' ? 'font-medium' : ''
            }`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </button>
          <div className="flex flex-col grow shrink-0 font-medium text-center text-black basis-0 w-fit">
            <button
              className={activeTab === 'reviews' ? 'font-medium' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Rating & Reviews
            </button>
            {activeTab === 'reviews' && (
              <div className="shrink-0 mt-6 h-0.5 border-2 border-black border-solid" />
            )}
          </div>
        </nav>
        <hr className="shrink-0 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />

        {activeTab === 'reviews' && <ReviewSection />}
      </div>
    </main>
  );
}; 