"use client";

export default function AddToCartButton({ inStock, onClick }: { inStock: boolean; onClick: () => void }) {
    const handleClick = () => {
        if (inStock) {
            onClick();
        }
    };

    return (
        <>
            <button
                type="button"
                className={`w-full py-4 rounded-lg font-semibold ${
                    inStock ? "bg-[#257a57] text-white" : "bg-[#f4f4f5] text-[#37383c] opacity-30"
                }`}
                disabled={!inStock}
                onClick={handleClick}
            >
                {inStock ? "장바구니 담기" : "일시품절"}
            </button>
        </>
    );
}
