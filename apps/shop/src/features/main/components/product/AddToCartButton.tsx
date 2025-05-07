import type React from "react";

interface AddToCartButtonProps {
    disabled?: boolean;
    onClick?: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
    disabled,
    onClick,
}) => {
    const baseClasses =
        "gap-2 self-center px-4 py-3 max-w-full text-sm font-semibold tracking-tight text-center rounded-lg w-full";
    const activeClasses =
        "text-white bg-green-700 hover:bg-green-800 transition-colors";
    const disabledClasses = "bg-zinc-100 text-neutral-700 cursor-not-allowed";

    return (
        <button
            type="button"
            className={`${baseClasses} ${disabled ? disabledClasses : activeClasses}`}
            onClick={onClick}
            disabled={disabled}
        >
            {disabled ? "일시품절" : "장바구니 담기"}
        </button>
    );
};
