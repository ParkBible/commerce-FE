"use client";

import { useState } from "react";

type QuantityChangeProps = {
    initQuantity: number;
    stockQuantity: number;
};

export default function QuantityChange({ initQuantity, stockQuantity }: QuantityChangeProps) {
    const [quantity, setQuantity] = useState<number>(initQuantity);
    const QUANTITY_STEP = 10;

    const onMinusClick = () => {
        if (quantity - QUANTITY_STEP > 0) {
            setQuantity(quantity - QUANTITY_STEP);
        }
    };

    const onPlusClick = () => {
        if (quantity + QUANTITY_STEP <= stockQuantity) {
            setQuantity(quantity + QUANTITY_STEP);
        }
    };

    return (
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <button type="button" onClick={onMinusClick}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M5.33398 10.6666V9.33325H14.6673V10.6666H5.33398Z" fill="black" />
                </svg>
            </button>
            <input
                type="number"
                className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[4rem] h-8 relative gap-2 px-4 py-2 rounded border-[0.5px] border-[#70737c]/[0.22] text-base font-semibold text-center text-black"
                value={quantity}
                readOnly
                tabIndex={-1}
            />
            <button type="button" onClick={onPlusClick}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M9.33398 10.6666H5.33398V9.33325H9.33398V5.33325H10.6673V9.33325H14.6673V10.6666H10.6673V14.6666H9.33398V10.6666Z"
                        fill="black"
                    />
                </svg>
            </button>
        </div>
    );
}
