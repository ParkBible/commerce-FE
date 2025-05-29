"use client";

import AddCartPopup from "@/src/features/product/components/AddCartPopup";
import AddToCartButton from "@/src/features/product/components/AddToCartButton";
import { type CustomError, fetchClient } from "@/src/shared/fetcher";
import { useToast } from "@/src/shared/hooks/useToast";
import { useState } from "react";

type AddToCartProps = {
    productId: number;
    title: string;
    stockQuantity: number;
    withPopup?: boolean;
    quantity?: number;
};

export default function AddToCart({ productId, title, stockQuantity, withPopup = false, quantity }: AddToCartProps) {
    const { toast, ToastUI } = useToast();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const fetch = fetchClient();
    const inStock = stockQuantity > 0;

    const onButtonClick = () => {
        if (!inStock) {
            return;
        }

        if (withPopup) {
            setIsPopupOpen(true);
        } else {
            addToCart(quantity ?? 10);
        }
    };

    const addToCart = (quantity: number) => {
        fetch("/cart/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                productId,
                quantity: quantity,
            }),
        })
            .then(() => {
                showToast();
            })
            .catch(error => {
                showErrorToast(error as CustomError);
            });
    };

    const showToast = () => {
        toast({
            message: `${title} 상품이 장바구니에 담겼습니다.`,
        });
    };

    const showErrorToast = (error: CustomError) => {
        toast({
            message: `장바구니에 추가하는 데 실패했습니다: ${error.code ?? ""} ${error instanceof Error ? error.message : "알 수 없는 오류"}`,
        });
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <AddToCartButton inStock={inStock} onClick={onButtonClick} />
            {isPopupOpen && <AddCartPopup stockQuantity={stockQuantity} onClose={handlePopupClose} onAddToCart={addToCart} />}
            {ToastUI}
        </>
    );
}
