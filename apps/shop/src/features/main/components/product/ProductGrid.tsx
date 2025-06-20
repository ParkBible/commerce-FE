"use client";
import { useRef, useState } from "react";
import { BannerCard } from "./BannerCard";
import { ProductCard, type ProductCardProps } from "./ProductCard";

type BannerItem = {
    type: "banner";
    image: string;
    title: string;
    description: string;
};

type ProductItem = ProductCardProps & {
    type: "product";
    productId: number;
};

type ProductGridItem = BannerItem | ProductItem;

interface ProductGridProps {
    products: ProductGridItem[];
    showArrows?: boolean; // 화살표 표시 여부 (기본값: true)
}

/**
 * ProductItem 타입인지 확인하는 타입 가드
 */
const isProductItem = (item: ProductGridItem): item is ProductItem => {
    return item.type === "product";
};

/**
 * BannerItem 타입인지 확인하는 타입 가드
 */
const isBannerItem = (item: ProductGridItem): item is BannerItem => {
    return item.type === "banner";
};

/**
 * 안정적인 고유 키 생성 함수
 */
const getUniqueKey = (product: ProductGridItem, index: number): string => {
    // 유효한 ID가 있는 경우 사용
    if ("id" in product && typeof product.id === "string" && product.id) {
        return product.id;
    }

    // 타입에 따라 적절한 식별자 생성
    if (isBannerItem(product)) {
        return `banner-${index}-${product.title.substring(0, 10).replace(/\s+/g, "-")}`;
    }

    if (isProductItem(product)) {
        return `product-${index}-${product.name.substring(0, 10).replace(/\s+/g, "-")}`;
    }

    // 기본 키 생성
    return `item-${index}`;
};

export const ProductGrid = ({ products, showArrows = true }: ProductGridProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // 스크롤 상태 업데이트
    const updateScrollButtons = () => {
        if (!scrollContainerRef.current) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // 좌측으로 스크롤
    const scrollLeft = () => {
        if (!scrollContainerRef.current) return;
        
        const cardWidth = 280; // 카드 너비 + 간격
        scrollContainerRef.current.scrollBy({
            left: -cardWidth * 2, // 2개씩 스크롤
            behavior: 'smooth'
        });
    };

    // 우측으로 스크롤
    const scrollRight = () => {
        if (!scrollContainerRef.current) return;
        
        const cardWidth = 280; // 카드 너비 + 간격
        scrollContainerRef.current.scrollBy({
            left: cardWidth * 2, // 2개씩 스크롤
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative w-full">
            {/* 화살표 버튼들 - showArrows가 true일 때만 표시 */}
            {showArrows && (
                <>
                    {/* 좌측 화살표 버튼 */}
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center transition-all duration-200 ${
                            canScrollLeft 
                                ? 'hover:bg-gray-50 cursor-pointer' 
                                : 'opacity-50 cursor-not-allowed'
                        }`}
                        aria-label="이전 상품 보기"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* 우측 화살표 버튼 */}
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center transition-all duration-200 ${
                            canScrollRight 
                                ? 'hover:bg-gray-50 cursor-pointer' 
                                : 'opacity-50 cursor-not-allowed'
                        }`}
                        aria-label="다음 상품 보기"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </>
            )}

            {/* 스크롤 가능한 상품 컨테이너 */}
            <div
                ref={scrollContainerRef}
                onScroll={updateScrollButtons}
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    maxWidth: 'calc(4 * 256px + 3 * 16px)', // 4개 카드 + 3개 간격
                    margin: '0 auto' // 중앙 정렬
                }}
            >
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {products.map((product, index) => {
                        const uniqueKey = getUniqueKey(product, index);

                        if (isBannerItem(product)) {
                            return (
                                <div key={uniqueKey} className="flex-shrink-0 w-64">
                                    <BannerCard image={product.image} title={product.title} description={product.description} />
                                </div>
                            );
                        }

                        return (
                            <div key={uniqueKey} className="flex-shrink-0 w-64">
                                <ProductCard {...product} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 스크롤바 숨기기를 위한 CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};
