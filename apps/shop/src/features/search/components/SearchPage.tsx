import React from "react";
import SearchFilter from "@/src/features/search/components/SearchFilter";
import SearchResultHeader from "@/src/features/search/components/SearchResultHeader";
import ProductList from "@/src/features/search/components/ProductList";

export default function SearchPage() {
    // Mock data - 실제 구현에서는 props나 API에서 받아올 데이터
    const mockProducts = [
        {
            id: "1",
            title: "스위트 바닐라향* 디카페나토",
            description: "달콤한 바닐라향과 함께하는 여유",
            price: 11500,
            capsuleCount: 10,
            intensity: 6,
            cupSize: "230ml",
            imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",
            badges: [
                { text: "머그", type: "category" as const },
                { text: "신제품", type: "new" as const },
                { text: "디카페인", type: "decaf" as const },
            ],
            inStock: true,
        },
        {
            id: "2",
            title: "알티시오 디카페나토",
            description: "풍부한 바디감의 디카페인",
            price: 8000,
            capsuleCount: 10,
            intensity: 9,
            cupSize: "40ml",
            imageUrl: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000",
            badges: [
                { text: "에스프레소", type: "category" as const },
                { text: "베스트", type: "best" as const },
                { text: "디카페인", type: "decaf" as const },
            ],
            inStock: true,
        },
        {
            id: "3",
            title: "비비다",
            description: "고소한 비스킷향 커피",
            price: 12000,
            capsuleCount: 10,
            intensity: 6,
            cupSize: "230ml",
            imageUrl: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1000",
            badges: [
                { text: "머그", type: "category" as const },
                { text: "신제품", type: "new" as const },
            ],
            inStock: true,
        },
        {
            id: "4",
            title: "엘살바도르",
            description: "레드 허니 가공의 과일잼향",
            price: 11000,
            capsuleCount: 10,
            intensity: 5,
            cupSize: "230ml",
            imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000",
            badges: [{ text: "머그", type: "category" as const }],
            inStock: true,
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 md:px-8">
            {/* 메인 콘텐츠 */}
            <main className="flex-1 bg-white py-16">
                <div className="max-w-[75rem] mx-auto">
                    {/* 검색 결과 타이틀 */}
                    <SearchResultHeader resultCount={10} searchTerm="버츄오" />

                    {/* 필터 및 상품 목록 영역 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                        {/* 필터 */}
                        <SearchFilter />

                        {/* 상품 목록 */}
                        <ProductList products={mockProducts} />
                    </div>
                </div>
            </main>
        </div>
    );
}
