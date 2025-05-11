"use client";

import { useState } from "react";

export default function ProductQuantity() {
    const [quantity, setQuantity] = useState(10);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    return (
        <div>
            <h3 className="text-base font-bold mb-3">수량</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => handleQuantityChange(0)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                        quantity === 0
                            ? "border-black font-semibold"
                            : "border-gray-300 opacity-90"
                    }`}
                >
                    직접 입력
                </button>
                {[10, 20, 30, 40, 50, 60].map(qty => (
                    <button
                        key={`qty-${qty}`}
                        type="button"
                        onClick={() => handleQuantityChange(qty)}
                        className={`px-4 py-2 border rounded-md min-w-[60px] text-center text-sm ${
                            quantity === qty
                                ? "border-black font-semibold"
                                : "border-gray-300 opacity-90"
                        }`}
                    >
                        {qty}
                    </button>
                ))}
            </div>
        </div>
    );
}
