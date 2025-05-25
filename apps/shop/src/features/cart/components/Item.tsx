"use client";

import { CancelIcon } from "@/src/shared/icons/Cancel";
import QuantityChange from "./QuantityChange";

interface ItemProps {
    title: string;
    price: number;
    quantity: number;
    stockQuantity: number;
    image: string;
    selected: boolean;
    onSelectChange: () => void;
    onDelete: () => void;
}

const LOW_STOCK_QUANTITY = 10;

export default function Item({ title, price, quantity, stockQuantity, image, selected, onSelectChange, onDelete }: ItemProps) {
    const getQuantityMessage = () => {
        if (quantity <= 0) {
            return "품절";
        }

        return `품절 임박! 남은 수량: ${stockQuantity}`;
    };

    return (
        <div className="md:min-w-md">
            <div className="flex justify-between items-center">
                <input type="checkbox" className="w-4.5 h-4.5" checked={selected} onChange={onSelectChange} />
                <button type="button" onClick={onDelete}>
                    <CancelIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="flex items-center gap-4 p-4 border-b border-gray-200">
                <img src={image} alt={title} className="w-16 h-16 object-cover" />
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col justify-start items-start flex-grow gap-2">
                        <h2 className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">{title}</h2>
                        <div className="flex gap-1 items-center">
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#257a57]">&#8361; {price.toLocaleString()}</p>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#257a57]">
                                ({quantity} x &#8361;{price.toLocaleString()})
                            </p>
                        </div>
                        <QuantityChange initQuantity={quantity} />
                    </div>
                    <div>{stockQuantity < LOW_STOCK_QUANTITY && <p className="text-red-500 text-xs font-bold">{getQuantityMessage()}</p>}</div>
                </div>
            </div>
        </div>
    );
}
