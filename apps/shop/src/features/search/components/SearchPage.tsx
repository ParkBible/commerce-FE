"use client";

import { useState, useEffect } from "react";
import SearchFilter from "@/src/features/search/components/SearchFilter";
import SearchResultHeader from "@/src/features/search/components/SearchResultHeader";
import ProductList from "@/src/features/search/components/ProductList";
import { searchProducts } from "@/src/features/search/api/searchProductApi";
import type { Product } from "@/src/features/search/types";

interface SearchPageProps {
    initialProducts?: Product[];
    initialTotalElements?: number;
    initialSearchTerm?: string;
}

export default function SearchPage({ initialProducts = [], initialTotalElements = 0, initialSearchTerm = "버츄오" }: SearchPageProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [totalElements, setTotalElements] = useState(initialTotalElements);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // 초기 데이터가 있으면 API 호출 스킵
        if (initialProducts.length > 0) {
            return;
        }

        const fetchSearchResults = async () => {
            try {
                setIsLoading(true);
                const searchResult = await searchProducts(searchTerm, 0, 10);

                setProducts(searchResult.content || []);
                setTotalElements(searchResult.totalElements || 0);
            } catch (error) {
                console.error("검색 결과를 가져오는데 실패했습니다:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchTerm, initialProducts.length]);

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg">검색 중...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 md:px-8">
            {/* 메인 콘텐츠 */}
            <main className="flex-1 bg-white py-16">
                <div className="max-w-[75rem] mx-auto">
                    {/* 검색 결과 타이틀 */}
                    <SearchResultHeader resultCount={totalElements} searchTerm={searchTerm} />

                    {/* 필터 및 상품 목록 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                        {/* 필터 */}
                        <SearchFilter />

                        {/* 상품 목록 */}
                        <ProductList products={products} />
                    </div>
                </div>
            </main>
        </div>
    );
}
