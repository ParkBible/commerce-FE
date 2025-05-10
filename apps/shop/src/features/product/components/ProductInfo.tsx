"use client";

import { useState } from "react";
import type { ProductType } from "@/src/features/product/types";
import { CartToast } from "@/src/shared/components/CartToast";

interface ProductInfoProps {
    product: ProductType;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(10);
    const { toast, ToastUI } = CartToast({
        onGoToCart: () => {
            // 장바구니 페이지로 이동하는 로직
            alert("장바구니 페이지로 이동합니다.");
        },
    });

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString();
    };

    const handleAddToCart = () => {
        toast({
            title: product.title,
            action: "add-to-cart",
        });
        // 여기에 장바구니 추가 로직 구현
        console.log(`장바구니 추가: ${product.title}, 수량: ${quantity}`);
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-[33.5rem]">
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
                    <button
                        type="button"
                        onClick={() => handleQuantityChange(0)}
                        className={`px-4 py-2 border rounded-md text-sm ${
                            quantity === 0 ? "border-black font-semibold" : "border-gray-300 opacity-90"
                        }`}
                    >
                        직접 입력
                    </button>
                    {[10, 20, 30, 40, 50, 60].map(qty => (
                        <button
                            key={`qty-${qty}`}
                            type="button"
                            onClick={() => handleQuantityChange(qty)}
                            className={`px-4 py-2 border rounded-md min-w-[3.75rem] text-center text-sm ${
                                quantity === qty ? "border-black font-semibold" : "border-gray-300 opacity-90"
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
