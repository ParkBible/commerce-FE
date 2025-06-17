"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "./SearchFilter";
import ProductList from "./ProductList";
import { searchProducts } from "@/src/features/search/api/searchProductApi";
import type { SearchResultResponse, Product } from "@/src/features/search/types";

// 컵사이즈 매핑 (UI 텍스트 -> 필터 ID)
const getCupSizeId = (cupSize: string): string => {
    const cupSizeMapping: Record<string, string> = {
        Small: "5", // 25-80ml 범위
        Medium: "7", // 150-230ml 범위
        Large: "8", // 355ml 이상
    };
    return cupSizeMapping[cupSize] || "5";
};

interface SearchPageProps {
    initialProducts?: Product[];
    initialTotalElements?: number;
    initialSearchTerm?: string;
}

export default function SearchPage({ initialProducts = [], initialTotalElements = 0, initialSearchTerm = "" }: SearchPageProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || initialSearchTerm;

    const [searchResults, setSearchResults] = useState<SearchResultResponse | null>({
        content: initialProducts,
        totalElements: initialTotalElements,
        totalPages: Math.ceil(initialTotalElements / 20),
        page: 0,
        size: 20,
    });
    const [loading, setLoading] = useState(false);
    const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
    const [selectedCupSize, setSelectedCupSize] = useState<string | null>(null);

    // 강도 매핑 (UI 텍스트 -> 필터 ID)
    const strengthMapping: Record<string, string> = {
        연함: "1", // 레벨 1-3 (연함)
        중간: "2", // 레벨 4-6 (중간)
        진함: "3", // 레벨 7-9 (진함)
    };

    const fetchSearchResults = useCallback(async () => {
        setLoading(true);
        try {
            // UI 텍스트를 API 파라미터로 변환
            const intensityId = selectedIntensity ? strengthMapping[selectedIntensity] : undefined;
            const cupSizeId = selectedCupSize ? getCupSizeId(selectedCupSize) : undefined;

            const results = await searchProducts(query, 0, 20, intensityId, cupSizeId);
            setSearchResults(results);
        } catch (error) {
            console.error("검색 실패:", error);
        } finally {
            setLoading(false);
        }
    }, [query, selectedIntensity, selectedCupSize]);

    useEffect(() => {
        fetchSearchResults();
    }, [fetchSearchResults]);

    const handleIntensityChange = (intensity: string | null) => {
        setSelectedIntensity(intensity);
    };

    const handleCupSizeChange = (cupSize: string | null) => {
        setSelectedCupSize(cupSize);
    };

    if (loading) {
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
            <main className="flex-1 bg-white py-8">
                <div className="max-w-[75rem] mx-auto">
                    {/* 필터 및 상품 목록 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                        {/* 필터 */}
                        <SearchFilter
                            resultCount={searchResults?.totalElements}
                            selectedIntensity={selectedIntensity}
                            selectedCupSize={selectedCupSize}
                            onIntensityChange={handleIntensityChange}
                            onCupSizeChange={handleCupSizeChange}
                            searchTerm={query}
                        />

                        {/* 상품 목록 */}
                        <ProductList products={searchResults?.content || []} />
                    </div>
                </div>
            </main>
        </div>
    );
}
