import type { ProductType } from "@/src/features/product/types";
import ProductQuantity from "./ProductQuantity";
import AddToCart from "./AddToCart";

interface ProductInfoProps {
    product: ProductType;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const formatPrice = (price: number) => {
        return price.toLocaleString();
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-xl">
            {/* 뱃지 영역 */}
            <div className="flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                    <div
                        key={`${badge.text}-${index}`}
                        className="px-[0.625rem] py-[0.375rem] rounded-md text-xs"
                        style={{
                            backgroundColor: badge.bgColor,
                            color: badge.textColor || (badge.bgColor === "#ffc000" ? "#171719" : "#fff"),
                        }}
                    >
                        {badge.text}
                    </div>
                ))}
            </div>

            {/* 제품 제목 및 설명 */}
            <div className="space-y-2">
                <h1 className="text-[1.75rem] font-bold leading-9 tracking-[-0.035rem]">{product.title}</h1>
                <p className="text-base text-[#171719]">{product.description}</p>
            </div>

            {/* 가격 정보 */}
            <div className="space-y-2">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-[#257a57]">₩</span>
                    <span className="text-2xl font-bold text-[#257a57] ml-1">{formatPrice(product.price)}</span>
                </div>
                {product.pricePerUnit && <p className="text-sm text-[#37383c] opacity-60">{product.pricePerUnit}</p>}
            </div>

            {/* 수량 선택 */}
            <ProductQuantity />

            {/* 추가 설명 */}
            {(product.limitDescription || product.additionalDescription) && (
                <div className="text-xs text-[#37383c] opacity-60 space-y-1">
                    {product.limitDescription && <p>{product.limitDescription}</p>}
                    {product.additionalDescription && <p>{product.additionalDescription}</p>}
                </div>
            )}

            {/* 장바구니 버튼 */}
            <AddToCart title={product.title} inStock={product.inStock} />
        </div>
    );
}
