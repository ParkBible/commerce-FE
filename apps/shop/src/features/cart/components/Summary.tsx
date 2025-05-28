"use client";

import { useRouter } from "next/navigation";
import type { CartItem } from "@/src/features/cart/types/cart";

interface SummaryProps {
    cartItems: CartItem[];
    shippingFee: number;
}

export default function Summary({ cartItems, shippingFee }: SummaryProps) {
    const QUANTITY_STEP = 10;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity / QUANTITY_STEP), 0) + shippingFee;
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/order/checkout");
    };

    return (
        <div
            className="
                p-4 border-t border-gray-200 w-full 
                lg:flex lg:flex-col lg:justify-start lg:items-start lg:relative lg:px-12 lg:py-10 lg:rounded-2xl lg:border lg:border-[#E8E8EA] lg:min-w-md"
        >
            <h2 className="text-xl font-bold text-left text-black mb-6">구매 금액</h2>
            {cartItems.map(item => (
                <div key={item.cartItemId} className="flex justify-between w-full items-center mt-2">
                    <p className="text-sm text-left text-[#47484C]">
                        {item.name}(x{item.quantity})
                    </p>
                    <p>&#8361; {item.price.toLocaleString()}</p>
                </div>
            ))}
            <div className="flex justify-between w-full items-center mt-2">
                <p className="text-sm text-left text-[#47484C]">배송비</p>
                <p>&#8361; {shippingFee.toLocaleString()}</p>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex justify-between w-full items-center mt-2 font-bold">
                <p>Total</p>
                <p>&#8361; {totalPrice.toLocaleString()}</p>
            </div>
            <button
                type="button"
                className="flex justify-center items-center self-stretch flex-shrink-0 mt-4 w-full h-12 relative gap-2 px-4 py-3 rounded-lg bg-[#257a57] text-sm font-semibold text-center text-white"
                onClick={handleCheckout}
            >
                {totalPrice.toLocaleString()}원 구매하기
            </button>
        </div>
    );
}
