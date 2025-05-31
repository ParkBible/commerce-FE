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

const QUANTITY_STEP = 10;

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
            if (!quantity && quantity !== 0) return;
            validateQuantity(quantity) && addToCart(quantity);
        }
    };

    const validateQuantity = (quantity: number) => {
        if (quantity <= 0) {
            toast({
                message: "수량은 1개 이상이어야 합니다.",
            });

            return false;
        }

        if (quantity / QUANTITY_STEP !== Math.floor(quantity / QUANTITY_STEP)) {
            toast({
                message: `수량은 ${QUANTITY_STEP}의 배수로 입력해야 합니다.`,
            });
            return false;
        }

        if (quantity > stockQuantity) {
            toast({
                message: `재고가 부족합니다. 현재 재고는 ${stockQuantity}개입니다.`,
            });

            return false;
        }

        return true;
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

    const onAddToCartInPopup = (quantity: number) => {
        if (!validateQuantity(quantity)) {
            return;
        }

        addToCart(quantity);
        setIsPopupOpen(false);
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
            {isPopupOpen && <AddCartPopup stockQuantity={stockQuantity} onClose={handlePopupClose} onAddToCart={onAddToCartInPopup} />}
            {ToastUI}
        </>
    );
}
