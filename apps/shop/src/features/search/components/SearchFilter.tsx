import { useState } from "react";
import { ArrowIcon } from "@/src/shared/components/shared/Icon";

interface SearchFilterProps {
    resultCount?: number;
    selectedIntensity?: string | null;
    selectedCupSize?: string | null;
    onIntensityChange?: (intensity: string | null) => void;
    onCupSizeChange?: (cupSize: string | null) => void;
}

export default function SearchFilter({ resultCount, selectedIntensity, selectedCupSize, onIntensityChange, onCupSizeChange }: SearchFilterProps) {
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
            <h3 className="text-lg font-bold mb-8">
                필터
                {resultCount !== undefined && <span className="text-sm font-normal text-[#37383c]/60 ml-2">({resultCount}개 결과)</span>}
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
                            onClick={() => handleIntensityClick("라이트 0-5")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "라이트 0-5"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            라이트 0-5
                        </button>
                        <button
                            type="button"
                            onClick={() => handleIntensityClick("마일드 6-8")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "마일드 6-8"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            마일드 6-8
                        </button>
                        <button
                            type="button"
                            onClick={() => handleIntensityClick("인텐스 9-11")}
                            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                                selectedIntensity === "인텐스 9-11"
                                    ? "bg-white text-black border border-black font-bold"
                                    : "text-[#2e2f33]/88 border border-gray-200/30"
                            }`}
                        >
                            인텐스 9-11
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
                        {["30ml", "110ml", "250ml", "350ml", "470ml"].map(cupSize => (
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
