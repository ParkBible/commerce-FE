"use client";
import { StarRating } from "./StarRating";
import { QuantitySelector } from "./QuantitySelector";

// ProductInfo 컴포넌트
export const ProductInfo = () => {
  return (
    <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl text-black">"커피"</h2>
        <div className="flex gap-4 items-center mt-3.5 max-w-full w-[249px]">
          <div className="flex gap-2 items-start self-stretch my-auto">
            <StarRating rating={4.5} />
          </div>
          <div className="self-stretch my-auto text-base text-black">
            4.5/5
          </div>
        </div>
        <p className="gap-3 mt-3.5 text-3xl text-black">
          19800 원
        </p>
        <p className="mt-12 w-72 text-base leading-6 text-black max-md:mt-10">
          이 캡슐을 마시면 불로장생합니다.<br />
          이 캡슐을 마시면 불로장생합니다.<br />
          이 캡슐을 마시면 불로장생합니다.
        </p>
        <hr className="shrink-0 self-stretch mt-48 h-px border border-solid border-black border-opacity-10 max-md:mt-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-7 self-stretch mt-6 w-full text-base font-medium max-md:max-w-full">
          <QuantitySelector />
          <button className="overflow-hidden flex-auto gap-3 self-stretch px-14 py-4 text-white bg-black min-h-[52px] rounded-[62px] max-md:px-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}; 