import type React from "react";

interface ProductFeatureProps {
    icon?: string;
    value: string;
    label?: string;
    strength?: number;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({
    icon,
    value,
    label,
    strength,
}) => {
    if (strength) {
        return (
            <div className="flex flex-col items-center self-stretch my-auto w-12">
                <div className="w-10 text-base font-semibold tracking-tight">
                    <div className="px-1 w-full h-10 rounded-full bg-neutral-100 fill-neutral-100">
                        {strength}
                    </div>
                </div>
                <div className="mt-1.5 text-xs tracking-tight leading-snug text-neutral-700">
                    강도
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center self-stretch my-auto w-auto min-w-12">
            {icon && (
                <img
                    src={icon}
                    alt={`${value} ${label ? label : "특성"}`}
                    className="object-contain w-full aspect-square"
                />
            )}
            <div className="mt-1.5 text-sm tracking-tight leading-snug text-neutral-700 whitespace-nowrap">
                {value}
            </div>
            {label && (
                <div className="text-xs tracking-tight leading-snug text-neutral-700 whitespace-nowrap">
                    {label}
                </div>
            )}
        </div>
    );
};
