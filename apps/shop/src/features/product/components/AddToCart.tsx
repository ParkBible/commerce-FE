"use client";

import { useToast } from "@/src/shared/hooks/useToast";

export default function AddToCart({ title }: { title: string }) {
    const { toast, ToastUI } = useToast();

    const handleAddToCart = () => {
        toast({
            message: `${title} 상품이 장바구니에 담겼습니다.`,
        });
    };

    return (
        <>
            <button
                type="button"
                className="w-full bg-[#257a57] text-white font-semibold py-4 rounded-lg hover:bg-[#1e6647] active:scale-[0.98] transition-all cursor-pointer"
                onClick={handleAddToCart}
            >
                장바구니 담기
            </button>
            {ToastUI}
        </>
    );
}
