import Image from "next/image";
import { CupSizeCircleIcon } from "@/src/shared/components/shared/Icon";
import AddToCart from "@/src/features/product/components/AddToCart";
import type { Product } from "@/src/features/search/types";

interface ProductItemProps extends Product {}

export default function ProductItem({ id, name, price, quantity, thumbnail, detailImage, intensity, cupSize, isSoldOut }: ProductItemProps) {
    // 동적으로 배지 생성 (프론트에서 처리) - 모든 배지 제거
    const getBadges = () => {
        const badges: { text: string; type: "category" | "new" | "best" | "decaf" }[] = [];

        // 모든 배지 제거
        // if (cupSize?.includes("40ml") || cupSize === "Small") {
        //     badges.push({ text: "에스프레소", type: "category" as const });
        // } else {
        //     badges.push({ text: "머그", type: "category" as const });
        // }

        // if (isSoldOut) {
        //     badges.push({ text: "품절", type: "decaf" as const });
        // }

        // if (quantity > 0 && quantity <= 10) {
        //     badges.push({ text: "한정", type: "best" as const });
        // }

        return badges;
    };

    // intensity 숫자 문자열을 변환 (실제 API 데이터 구조에 맞게)
    const getIntensityDisplay = (intensity: string): number => {
        const num = Number.parseInt(intensity, 10);
        // 1-9 범위의 유효한 숫자인지 확인, 아니면 0으로 표시
        return !Number.isNaN(num) && num >= 1 && num <= 9 ? num : 0;
    };

    const badges = getBadges();
    const intensityDisplay = getIntensityDisplay(intensity);

    return (
        <div className="border border-gray-200/70 rounded-xl p-4">
            <div className="mb-4">
                <div className="flex gap-2 mb-6">
                    {badges.map(badge => (
                        <span key={badge.text} className={`inline-block px-2.5 py-1.5 rounded-md text-xs ${getBadgeStyle(badge.type)}`}>
                            {badge.text}
                        </span>
                    ))}
                </div>
                <div className="h-40 bg-gray-100 flex items-center justify-center mb-4 relative overflow-hidden rounded-md">
                    <Image src={thumbnail} alt={name} fill className="object-cover" />
                </div>
                <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#f7f7f8] flex items-center justify-center mb-1">
                            <span className="text-[#37383c]/60 text-base font-medium">{intensityDisplay}</span>
                        </div>
                        <span className="text-[#37383c]/60 text-xs">강도</span>
                    </div>
                    <div className="h-5 w-px bg-[#70737c]/16" />
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#f7f7f8] flex items-center justify-center mb-1">
                            <CupSizeCircleIcon className="text-[#37383c]/60" />
                        </div>
                        <span className="text-[#37383c]/60 text-xs">{cupSize}</span>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <h3 className="text-[#37383c] text-lg mb-2">{name}</h3>
                    <p className="text-[#37383c]/60 text-sm">₩{price.toLocaleString()}</p>
                </div>
                <div className="flex justify-center">
                    <AddToCart productId={id} title={name} stockQuantity={quantity} withPopup={true} />
                </div>
            </div>
        </div>
    );
}

function getBadgeStyle(type: string) {
    switch (type) {
        case "category":
            return "bg-[#37383c]/16 text-[#171719]";
        case "new":
            return "bg-[#ffc000] text-[#171719]";
        case "best":
            return "bg-[#7030a0] text-white";
        case "decaf":
            return "bg-[#a80000] text-white";
        default:
            return "bg-[#37383c]/16 text-[#171719]";
    }
}
