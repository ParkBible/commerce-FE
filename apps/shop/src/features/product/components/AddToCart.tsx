"use client";

import AddCartPopup from "@/src/features/product/components/AddCartPopup";
import AddToCartButton from "@/src/features/product/components/AddToCartButton";
import { useToast } from "@/src/shared/hooks/useToast";
import { useState } from "react";

export default function AddToCart({
    title,
    inStock,
    withPopup = false,
}: { title: string; inStock: boolean; withPopup?: boolean }) {
    const { toast, ToastUI } = useToast();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onButtonClick = () => {
        if (!inStock) {
            return;
        }

        if (withPopup) {
            setIsPopupOpen(true);
        } else {
            AddToCart();
        }
    };

    const AddToCart = () => {
        console.log("장바구니에 담기 로직");
        showToast();
    };

    const showToast = () => {
        toast({
            message: `${title} 상품이 장바구니에 담겼습니다.`,
        });
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <AddToCartButton inStock={inStock} onClick={onButtonClick} />
            {isPopupOpen && <AddCartPopup onClose={handlePopupClose} onAddToCart={AddToCart} />}
            {ToastUI}
        </>
    );
}
