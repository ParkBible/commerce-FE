"use client";

import { QuantitySelector } from "./QuantitySelector";
import { StarRating } from "./StarRating";

// 상품 정보 인터페이스 정의
interface ProductInfoProps {
    name: string;
    rating: number;
    price: number;
    description: string[];
}

// ProductInfo 컴포넌트
export const ProductInfo = ({
    name,
    rating,
    price,
    description,
}: ProductInfoProps) => {
    // 가격 포맷팅 (1,000 단위 콤마)
    const formattedPrice = price.toLocaleString("ko-KR");

    return (
        <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:max-w-full">
                <h2 className="text-2xl font-bold text-black">{name}</h2>
                <div className="flex gap-4 items-center mt-3 w-[249px]">
                    <div className="flex gap-2 items-start">
                        <StarRating rating={rating} />
                    </div>
                </div>
                <div className="flex gap-1 mt-3 text-2xl font-bold text-green-700">
                    <span>₩</span>
                    <span>{formattedPrice}</span>
                </div>
                <p className="mt-8 text-sm leading-6 text-neutral-900">
                    {description.map((line, index) => (
                        <span key={`line-${index}-${line.substring(0, 10)}`}>
                            {line}
                            {index < description.length - 1 && <br />}
                        </span>
                    ))}
                </p>
                <hr className="mt-8 w-full h-px border border-solid border-black border-opacity-10" />
                <div className="flex gap-4 mt-6 w-full text-sm font-medium">
                    <QuantitySelector />
                    <button
                        type="button"
                        className="px-4 py-3 text-white bg-green-700 hover:bg-green-800 transition-colors rounded-lg w-full max-w-[250px]"
                    >
                        장바구니 담기
                    </button>
                </div>
            </div>
        </div>
    );
};
