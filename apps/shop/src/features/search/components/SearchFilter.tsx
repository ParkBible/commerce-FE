import { useState } from "react";
import { ArrowIcon } from "@/src/shared/components/shared/Icon";

interface SearchFilterProps {
    resultCount?: number;
    selectedIntensity?: string | null;
    selectedCupSize?: string | null;
    onIntensityChange?: (intensity: string | null) => void;
    onCupSizeChange?: (cupSize: string | null) => void;
    searchTerm?: string;
}

export default function SearchFilter({
    resultCount,
    selectedIntensity,
    selectedCupSize,
    onIntensityChange,
    onCupSizeChange,
    searchTerm,
}: SearchFilterProps) {
    const [isIntensityOpen, setIsIntensityOpen] = useState(true);
    const [isCupSizeOpen, setIsCupSizeOpen] = useState(true);

    const handleIntensityClick = (intensity: string) => {
        // 같은 버튼을 클릭하면 선택 해제, 다른 버튼을 클릭하면 해당 버튼 선택
        const newIntensity = selectedIntensity === intensity ? null : intensity;
        onIntensityChange?.(newIntensity);
    };

    const handleCupSizeClick = (cupSize: string) => {
        // 같은 버튼을 클릭하면 선택 해제, 다른 버튼을 클릭하면 해당 버튼 선택
        const newCupSize = selectedCupSize === cupSize ? null : cupSize;
        onCupSizeChange?.(newCupSize);
    };
    return (
        <div className="w-full lg:w-80 lg:flex-shrink-0">
            <h3 className="text-lg font-bold mb-8 flex items-center justify-between">
                <span className="flex items-center gap-2">
                    <span className="text-sm font-normal text-[#37383c]/60 bg-gray-100 px-2 py-1 rounded">
                        {searchTerm ? `'${searchTerm}' 검색결과: ${resultCount}개` : `검색결과: ${resultCount}개`}
                    </span>
                </span>
            </h3>

            {/* 강도 필터 */}
            <div className="mb-8">
                <button
                    type="button"
                    onClick={() => setIsIntensityOpen(!isIntensityOpen)}
                    className="w-full flex justify-between items-center pb-4 border-b border-gray-200/70 mb-4"
                >
                    <span className="font-bold text-base">강도</span>
                    <ArrowIcon direction={isIntensityOpen ? "up" : "down"} title={isIntensityOpen ? "강도 필터 접기" : "강도 필터 펼치기"} />
                </button>
                {isIntensityOpen && (
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => handleIntensityClick("연함")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "연함"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            연함
                        </button>
                        <button
                            type="button"
                            onClick={() => handleIntensityClick("중간")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "중간"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            중간
                        </button>
                        <button
                            type="button"
                            onClick={() => handleIntensityClick("진함")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "진함"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            진함
                        </button>
                    </div>
                )}
            </div>

            {/* 컵 사이즈 필터 */}
            <div className="mb-8">
                <button
                    type="button"
                    onClick={() => setIsCupSizeOpen(!isCupSizeOpen)}
                    className="w-full flex justify-between items-center pb-4 border-b border-gray-200/70 mb-4"
                >
                    <span className="font-bold text-base">컵사이즈</span>
                    <ArrowIcon direction={isCupSizeOpen ? "up" : "down"} title={isCupSizeOpen ? "컵사이즈 필터 접기" : "컵사이즈 필터 펼치기"} />
                </button>
                {isCupSizeOpen && (
                    <div className="flex flex-wrap gap-2">
                        {["Small", "Medium", "Large"].map(cupSize => (
                            <button
                                key={cupSize}
                                type="button"
                                onClick={() => handleCupSizeClick(cupSize)}
                                className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                    selectedCupSize === cupSize
                                        ? "bg-white text-black border border-black font-bold"
                                        : "text-[#2e2f33]/88 border border-gray-200/30"
                                }`}
                            >
                                {cupSize}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
