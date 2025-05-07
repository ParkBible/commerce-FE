"use client";
import { StarRating } from "./StarRating";
import { QuantitySelector } from "./QuantitySelector";

// ProductInfo 컴포넌트
export const ProductInfo = () => {
  return (
    <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:max-w-full">
        <h2 className="text-2xl font-bold text-black">"커피"</h2>
        <div className="flex gap-4 items-center mt-3 w-[249px]">
          <div className="flex gap-2 items-start">
            <StarRating rating={4.5} />
          </div>
        </div>
        <div className="flex gap-1 mt-3 text-2xl font-bold text-green-700">
          <span>₩</span>
          <span>19,800</span>
        </div>
        <p className="mt-8 text-sm leading-6 text-neutral-900">
          이 캡슐을 마시면 불로장생합니다.<br />
          이 캡슐을 마시면 불로장생합니다.<br />
          이 캡슐을 마시면 불로장생합니다.
        </p>
        <hr className="mt-8 w-full h-px border border-solid border-black border-opacity-10" />
        <div className="flex gap-4 mt-6 w-full text-sm font-medium">
          <QuantitySelector />
          <button className="px-4 py-3 text-white bg-green-700 hover:bg-green-800 transition-colors rounded-lg w-full max-w-[250px]">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}; 