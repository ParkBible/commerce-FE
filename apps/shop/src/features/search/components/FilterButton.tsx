interface FilterButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
    className?: string;
}

export function FilterButton({ label, isSelected, onClick, className = "" }: FilterButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`py-2.5 px-4 rounded-md text-sm transition-colors ${
                isSelected ? "bg-white text-black border border-black font-bold" : "text-[#2e2f33]/88 border border-gray-200/30"
            } ${className}`}
        >
            {label}
        </button>
    );
}
