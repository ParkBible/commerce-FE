"use client";

import { useState, useRef, useEffect } from "react";
import type { ProductType } from "@/src/features/product/types";
import { useToast } from "@/src/shared/hooks/useToast";

interface ProductInfoProps {
    product: ProductType;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(0);
    const [selectedButton, setSelectedButton] = useState<number | null>(10);
    const [isInputActive, setIsInputActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { toast, ToastUI } = useToast();

    // 숫자 버튼 클릭시 선택 상태만 변경하고 입력창 포커스 해제
    const handleButtonSelect = (buttonValue: number) => {
        setSelectedButton(buttonValue);
        setIsInputActive(false);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleCustomQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 숫자만 입력 허용 (정규식으로 검사)
        const value = e.target.value.replace(/[^0-9]/g, "");

        if (value === "") {
            setQuantity(0);
        } else {
            let numValue = Number.parseInt(value, 10);

            // 999보다 큰 값은 999로 제한
            if (numValue > 999) {
                numValue = 999;
            }

            setQuantity(numValue);
        }
        setSelectedButton(null); // 직접 입력 시 선택된 버튼 초기화
    };

    // 입력창 클릭시 선택된 버튼 해제 및 입력창 활성화
    const handleInputFocus = () => {
        setSelectedButton(null);
        setIsInputActive(true);
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString();
    };

    const handleAddToCart = () => {
        if (quantity <= 0) {
            toast({
                message: "수량을 1개 이상 선택해주세요.",
            });
            return;
        }

        toast({
            message: `${product.title} 상품이 장바구니에 추가되었습니다.`,
        });
        // 여기에 장바구니 추가 로직 구현
        console.log(`장바구니 추가: ${product.title}, 수량: ${quantity}`);
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-xl">
            {/* 뱃지 영역 */}
            <div className="flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                    <div
                        key={`${badge.text}-${index}`}
                        className="px-[0.625rem] py-[0.375rem] rounded-md text-xs"
                        style={{
                            backgroundColor: badge.bgColor,
                            color: badge.textColor || (badge.bgColor === "#ffc000" ? "#171719" : "#fff"),
                        }}
                    >
                        {badge.text}
                    </div>
                ))}
            </div>

            {/* 제품 제목 및 설명 */}
            <div className="space-y-2">
                <h1 className="text-[1.75rem] font-bold leading-9 tracking-[-0.035rem]">{product.title}</h1>
                <p className="text-base text-[#171719]">{product.description}</p>
            </div>

            {/* 가격 정보 */}
            <div className="space-y-2">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-[#257a57]">₩</span>
                    <span className="text-2xl font-bold text-[#257a57] ml-1">{formatPrice(product.price)}</span>
                </div>
                {product.pricePerUnit && <p className="text-sm text-[#37383c] opacity-60">{product.pricePerUnit}</p>}
            </div>

            {/* 수량 선택 */}
            <div>
                <h3 className="text-base font-bold mb-3">수량</h3>
                <div className="flex flex-wrap gap-2">
                    <div
                        className={`flex items-center h-10 w-[4.5rem] border rounded-md box-border ${isInputActive ? "border-black" : "border-gray-300"}`}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={quantity === 0 ? "" : quantity}
                            onChange={handleCustomQuantityChange}
                            onFocus={handleInputFocus}
                            className="w-full h-full px-2 text-sm focus:outline-none text-center appearance-none bg-transparent"
                            placeholder="입력"
                            style={{
                                margin: 0,
                                border: "none",
                                lineHeight: "normal",
                            }}
                            maxLength={3}
                        />
                    </div>

                    {/* 수량 버튼들 */}
                    {[10, 20, 30, 40, 50, 60].map(qty => (
                        <button
                            key={`qty-${qty}`}
                            type="button"
                            onClick={() => handleButtonSelect(qty)}
                            className={`h-10 px-4 border rounded-md min-w-[3.75rem] text-center text-sm cursor-pointer ${
                                selectedButton === qty ? "border-black font-semibold" : "border-gray-300 opacity-90"
                            }`}
                        >
                            {qty}
                        </button>
                    ))}
                </div>
            </div>

            {/* 추가 설명 */}
            {(product.limitDescription || product.additionalDescription) && (
                <div className="text-xs text-[#37383c] opacity-60 space-y-1">
                    {product.limitDescription && <p>{product.limitDescription}</p>}
                    {product.additionalDescription && <p>{product.additionalDescription}</p>}
                </div>
            )}

            {/* 장바구니 버튼 */}
            <button
                type="button"
                className="w-full bg-[#257a57] text-white font-semibold py-4 rounded-lg hover:bg-[#1e6647] active:scale-[0.98] transition-all cursor-pointer"
                onClick={handleAddToCart}
            >
                장바구니 담기
            </button>

            {/* 장바구니 토스트 컴포넌트 */}
            {ToastUI}
        </div>
    );
}
