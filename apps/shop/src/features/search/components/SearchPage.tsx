"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "./SearchFilter";
import SearchResultHeader from "./SearchResultHeader";
import ProductList from "./ProductList";
import { searchProducts } from "@/src/features/search/api/searchProductApi";
import type { SearchResultResponse } from "@/src/features/search/types";

// 컵사이즈 매핑 (UI 텍스트 -> 실제 DB Categories ID)
const getCupSizeId = (cupSize: string): string => {
    const cupSizeMapping: Record<string, string> = {
        Small: "5", // DB id:5 - SHORT
        Medium: "7", // DB id:7 - GRANDE
        Large: "8", // DB id:8 - VENTI
    };
    return cupSizeMapping[cupSize] || "5";
};

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [searchResults, setSearchResults] = useState<SearchResultResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
    const [selectedCupSize, setSelectedCupSize] = useState<string | null>(null);

    // 강도 매핑 (UI 텍스트 -> 실제 DB Categories ID)
    const strengthMapping: Record<string, string> = {
        연함: "1", // DB id:1 - 연함
        중간: "2", // DB id:2 - 중간
        진함: "3", // DB id:3 - 진함
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
                    {/* 검색 결과 타이틀 */}
                    <SearchResultHeader resultCount={searchResults?.totalElements || 0} searchTerm={query} />

                    {/* 필터 및 상품 목록 */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                        {/* 필터 */}
                        <SearchFilter
                            resultCount={searchResults?.totalElements}
                            selectedIntensity={selectedIntensity}
                            selectedCupSize={selectedCupSize}
                            onIntensityChange={handleIntensityChange}
                            onCupSizeChange={handleCupSizeChange}
                        />

                        {/* 상품 목록 */}
                        <ProductList products={searchResults?.content || []} />
                    </div>
                </div>
            </main>
        </div>
    );
}
