import * as React from "react";

function SubNav() {
    return (
        <div className="w-full bg-black text-white py-4">
            <nav className="flex flex-wrap justify-center items-center gap-4 mx-auto max-w-[1240px]">
                <div className="flex items-center">
                    <span className="text-base font-semibold">
                        New 시즌 한정 커피
                    </span>
                    <div className="mx-3 h-4 w-px bg-white" />
                </div>
                <div className="flex items-center">
                    <span className="text-base font-semibold">
                        더블 에스프레소 80ml
                    </span>
                    <div className="mx-3 h-4 w-px bg-white" />
                </div>
                <div className="flex items-center">
                    <span className="text-base font-semibold">추천 세트</span>
                    <div className="mx-3 h-4 w-px bg-white" />
                </div>
                <div className="flex items-center">
                    <span className="text-base font-semibold">
                        스타벅스 by 801 커피 for 버츄오
                    </span>
                    <div className="mx-3 h-4 w-px bg-white" />
                </div>
                <div className="flex items-center">
                    <span className="text-base font-semibold">디카페인</span>
                    <div className="mx-3 h-4 w-px bg-white" />
                </div>
                <div className="flex items-center">
                    <span className="text-base font-semibold">
                        그랑 룽고 150ml
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default SubNav;
