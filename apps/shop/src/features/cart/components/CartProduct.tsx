"use client";

import type { CartItem } from "@/app/cart/page";
import Item from "./Item";
import { useState } from "react";
import { type CustomError, fetchClient } from "@/src/shared/fetcher";

interface DeleteCartItemsRequest {
    productIds: number[];
}

export default function CartProduct({ cartItems }: { cartItems: CartItem[] }) {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const fetch = fetchClient();
    const isAllSelected = cartItems.length > 0 && selectedItems.length === cartItems.length;

    const onSelectAllClick = () => {
        if (isAllSelected) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map(item => item.cartItemId));
        }
    };

    const onItemSelectChange = (id: number) => {
        setSelectedItems(prev => {
            if (prev.includes(id)) {
                return prev.filter(itemId => itemId !== id);
            }

            return [...prev, id];
        });
    };

    const onDelete = (id: number) => {
        requestDelete(id);
    };

    const onDeleteAll = async () => {
        if (selectedItems.length === 0) return;

        try {
            await fetch("/cart/items", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productIds: selectedItems }),
            });
            setSelectedItems([]);
        } catch (e) {
            const err = e as CustomError;
            console.error(`${err.code} - ${err.message}`);
        }
    };

    const requestDelete = async (cartItemId: number) => {
        return fetch(`/cart/items/${cartItemId}`, {
            method: "DELETE",
        })
            .then(() => setSelectedItems(prev => prev.filter(itemId => itemId !== cartItemId)))
            .catch(e => {
                const err = e as CustomError;
                console.error(`${err.code} - ${err.message}`);
            });
    };

    return (
        <>
            <div className="flex gap-2 w-full justify-between items-center">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <input type="checkbox" className="w-4.5 h-4.5" onChange={onSelectAllClick} checked={isAllSelected} aria-checked={isAllSelected} />
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">전체선택</p>
                </div>
                <button
                    type="button"
                    className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#47484C] p-2 rounded-md border border-[#E8E8EA] disabled:bg-[#E8E8EA] disabled:text-[#858588] hover:bg-[#F2F2F2]"
                    onClick={onDeleteAll}
                    disabled={selectedItems.length === 0}
                >
                    전체 삭제
                </button>
            </div>
            {cartItems.map(item => (
                <Item
                    key={item.cartItemId}
                    productId={item.productId}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    stockQuantity={item.stockQuantity}
                    image={item.thumbnail}
                    selected={selectedItems.includes(item.cartItemId)}
                    onSelectChange={() => onItemSelectChange(item.cartItemId)}
                    onDelete={() => onDelete(item.cartItemId)}
                />
            ))}
            <p className="flex-grow-0 flex-shrink-0 text-xs text-[#858588]">*수량은 각 제품 캡슐 단위로 변경이 가능합니다.</p>
        </>
    );
}
