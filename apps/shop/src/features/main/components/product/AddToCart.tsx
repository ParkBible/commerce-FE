"use client";

import React from "react";

export default function AddToCart({ inStock }: { inStock: boolean }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        if (inStock) {
            setIsOpen(true);
            console.log("장바구니에 담기 클릭");
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className={`w-full py-4 rounded-lg font-semibold ${
                    inStock
                        ? "bg-[#257a57] text-white"
                        : "bg-[#f4f4f5] text-[#37383c] opacity-30"
                }`}
                disabled={!inStock}
                onClick={handleClick}
            >
                {inStock ? "장바구니 담기" : "일시품절"}
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="flex flex-col justify-start items-end w-[600px] overflow-hidden rounded-2xl">
                        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-4 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#70737c]/[0.22]">
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-black">
                                장바구니 담기
                            </p>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                                preserveAspectRatio="none"
                                onClick={handleClose}
                            >
                                <title>Close icon</title>
                                <path
                                    d="M8.53269 24.8715L7.12769 23.4665L14.5944 15.9998L7.12769 8.53317L8.53269 7.12817L15.9994 14.5948L23.466 7.12817L24.871 8.53317L17.4044 15.9998L24.871 23.4665L23.466 24.8715L15.9994 17.4048L8.53269 24.8715Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10 px-6 pt-6 pb-10 bg-white">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                                        수량
                                    </p>
                                </div>
                                <input
                                    type="number"
                                    placeholder="수량을 입력해 주세요.(10개 단위로 입력 가능합니다.)"
                                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[552px] h-10 relative gap-2.5 px-1 pb-2 border-t-0 border-r-0 border-b border-l-0 border-black"
                                />
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            0
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-black">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-black">
                                            10
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            20
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            30
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            40
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            50
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60px] h-8 relative gap-2 px-4 py-3 rounded border border-[#70737c]/[0.22]">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#2e2f33]/[0.88]">
                                            60
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-12 relative gap-2 px-4 py-3 rounded-lg bg-[#257a57]">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white">
                                    장바구니 담기
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
