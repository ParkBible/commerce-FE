"use client";
import * as React from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ReviewSection } from "./ReviewSection";
import { ProductDetails } from "./ProductDetails";

// 임시 상품 데이터
const SAMPLE_PRODUCT = {
  id: '1',
  name: "에티오피아 예가체프 G1 싱글 오리진",
  rating: 4.8,
  price: 22500,
  description: [
    "에티오피아 현지 밭에서 직접 수확한 최상급 예가체프 원두입니다.",
    "화사한 꽃향과 은은한 과일향, 달콤한 시트러스 산미가 특징입니다.",
    "직화 로스팅으로 고소한 풍미가 일품이며, 카페인 함량이 적어 밤에도 안심하고 즐기실 수 있습니다.",
    "아이스 커피로도 훌륭한 맛을 자랑합니다."
  ],
  details: {
    imageUrl: "/images/coffee.jpg",
    imageAlt: "에티오피아 예가체프 G1 싱글 오리진 상세 이미지",
    backgroundColor: "#e5d9c1",
    title: "에티오피아 예가체프\nG1 싱글 오리진",
    description: "화사한 꽃향과 달콤한 과일향이 어우러진 최고급 에티오피아 원두로 만든 프리미엄 커피",
    notice: "* 로스팅 후 2주 이내의 신선한 원두로 배송됩니다."
  }
};

// ProductDetailPageReview 컴포넌트
interface ProductDetailPageReviewProps {
  productId?: string;
}

export const ProductDetailPageReview = ({ productId }: ProductDetailPageReviewProps) => {
  const [activeTab, setActiveTab] = React.useState<'details' | 'reviews'>('details');
  
  // 실제로는 여기서 productId를 기반으로 API 호출 등을 통해 상품 정보를 가져올 수 있음
  // 예: const { data: product } = useQuery(['product', productId], () => fetchProduct(productId));
  const product = SAMPLE_PRODUCT;

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col mx-auto w-full max-w-[1240px] max-md:max-w-full">
        {/* <Breadcrumb /> */}
        <div className="mt-10 max-md:max-w-full">
          {productId && <div className="mb-4 text-sm text-gray-500">상품 ID: {productId}</div>}
          <div className="flex gap-5 max-md:flex-col">
            <ProductGallery />
            <ProductInfo 
              name={product.name}
              rating={product.rating}
              price={product.price}
              description={product.description}
            />
          </div>
        </div>

        <nav className="flex gap-10 justify-center mt-16 max-w-full text-xl leading-none max-md:mt-10">
          <div className="flex flex-col items-center">
            <button
              className={`px-4 ${activeTab === 'details' ? 'font-medium' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              상품 상세
            </button>
            {activeTab === 'details' && (
              <div className="mt-6 h-1 w-full border-b-4 border-black" />
            )}
          </div>
          
          <div className="flex flex-col items-center">
            <button
              className={`px-4 ${activeTab === 'reviews' ? 'font-medium' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              리뷰
            </button>
            {activeTab === 'reviews' && (
              <div className="mt-6 h-1 w-full border-b-4 border-black" />
            )}
          </div>
        </nav>
        <hr className="h-px border border-solid border-gray-200 border-opacity-50 max-md:max-w-full" />

        {activeTab === 'details' && (
          <ProductDetails 
            imageUrl={product.details.imageUrl}
            imageAlt={product.details.imageAlt}
            backgroundColor={product.details.backgroundColor}
            title={product.details.title}
            description={product.details.description}
            notice={product.details.notice}
          />
        )}
        {activeTab === 'reviews' && <ReviewSection />}
      </div>
    </main>
  );
}; 