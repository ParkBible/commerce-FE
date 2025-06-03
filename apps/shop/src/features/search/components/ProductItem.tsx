import Image from "next/image";
import { CupSizeCircleIcon } from "@/src/shared/components/shared/Icon";
import AddToCart from "@/src/features/product/components/AddToCart";
import type { Product, Badge } from "@/src/features/search/types";

interface ProductItemProps extends Product {}

export default function ProductItem({ title, description, price, capsuleCount, intensity, cupSize, imageUrl, badges, inStock }: ProductItemProps) {
    const getBadgeStyle = (type: Badge["type"]) => {
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
    };

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
                    <Image src={imageUrl} alt={title} fill className="object-cover" />
                </div>
                <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#f7f7f8] flex items-center justify-center mb-1">
                            <span className="text-[#37383c]/60 text-base">{intensity}</span>
                        </div>
                        <span className="text-[#37383c]/60 text-xs">강도</span>
                    </div>
                    <div className="h-5 w-px bg-[#70737c]/16" />
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#f7f7f8] flex items-center justify-center mb-1">
                            <CupSizeCircleIcon size="md" />
                        </div>
                        <span className="text-[#37383c]/60 text-xs">{cupSize}</span>
                    </div>
                </div>
                <h4 className="text-base font-bold text-center mb-1">{title}</h4>
                <p className="text-sm text-center text-[#171719] mb-6">{description}</p>
                <div className="text-center mb-1">
                    <span className="text-[#257a57] font-bold text-2xl">₩ {price.toLocaleString()}</span>
                </div>
                <p className="text-center text-[#37383c]/60 text-sm mb-4">{capsuleCount} 캡슐</p>
                <AddToCart title={title} inStock={inStock} withPopup={true} />
            </div>
        </div>
    );
}
