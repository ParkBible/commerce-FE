import Image from "next/image";
import { CupSizeCircleIcon } from "@/src/shared/components/shared/Icon";
import AddToCart from "@/src/features/product/components/AddToCart";
import type { Product } from "@/src/features/search/types";

interface ProductItemProps extends Product {}

export default function ProductItem({ 
    id, name, price, quantity, thumbnail, detail_image, intensity, cupSize, status 
}: ProductItemProps) {
    
    // 동적으로 배지 생성 (프론트에서 처리)
    const getBadges = () => {
        const badges = [];
        
        // 컵 사이즈에 따른 카테고리 배지
        if (cupSize?.includes("40ml") || cupSize === "Small") {
            badges.push({ text: "에스프레소", type: "category" as const });
        } else {
            badges.push({ text: "머그", type: "category" as const });
        }
        
        // 품절 여부에 따른 배지
        if (quantity === 0 || status !== "ON_SALE") {
            badges.push({ text: "품절", type: "decaf" as const });
        }
        
        // 재고가 적을 때 배지 (10개 이하)
        if (quantity > 0 && quantity <= 10) {
            badges.push({ text: "한정", type: "best" as const });
        }
        
        return badges;
    };

    // intensity 문자열을 숫자로 변환
    const getIntensityNumber = (intensity: string): number => {
        const intensityMap: Record<string, number> = {
            "Light": 3,
            "Medium": 6,
            "Strong": 9,
            "Very Strong": 11,
        };
        return intensityMap[intensity] || 6;
    };

    const badges = getBadges();
    const intensityNumber = getIntensityNumber(intensity);

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
                            <span className="text-[#37383c]/60 text-base">{intensityNumber}</span>
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
                    <AddToCart 
                        productId={id} 
                        title={name} 
                        stockQuantity={quantity} 
                        withPopup={true} 
                    />
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
