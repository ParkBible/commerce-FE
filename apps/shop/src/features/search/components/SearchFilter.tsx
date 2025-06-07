import { ArrowIcon } from "@/src/shared/components/shared/Icon";

export default function SearchFilter() {
    return (
        <div className="w-full lg:w-80 lg:flex-shrink-0">
            <h3 className="text-lg font-bold mb-8">필터</h3>

            {/* 강도 필터 */}
            <div className="mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200/70 mb-4">
                    <span className="font-bold text-base">강도</span>
                    <ArrowIcon direction="down" title="강도 필터 펼치기" />
                </div>
                <div className="flex flex-wrap gap-2">
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        라이트 0-5
                    </button>
                    <button type="button" className="py-2.5 px-4 bg-white text-black border border-black rounded-md text-base font-bold">
                        마일드 6-8
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        인텐스 9-11
                    </button>
                </div>
            </div>

            {/* 컵 사이즈 필터 */}
            <div className="mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200/70 mb-4">
                    <span className="font-bold text-base">컵사이즈</span>
                    <ArrowIcon direction="down" title="컵사이즈 필터 펼치기" />
                </div>
                <div className="flex flex-wrap gap-2">
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        80ml
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        버츄오 아이스 레시피
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        230ml
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        40ml
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        150ml
                    </button>
                    <button type="button" className="py-2.5 px-4 text-[#2e2f33]/88 border border-gray-200/30 rounded-md text-sm">
                        25ml
                    </button>
                </div>
            </div>
        </div>
    );
}
