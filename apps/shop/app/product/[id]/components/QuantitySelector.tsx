"use client";
import { useState } from "react";

// QuantitySelector 컴포넌트
export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="flex overflow-hidden gap-10 justify-between items-center px-5 py-3.5 text-black whitespace-nowrap bg-zinc-100 min-h-[52px] rounded-[62px]">
      <button onClick={decrement}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e8bbe3a4ae569926335bac1992ed85aa3eba42?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Decrease quantity"
        />
      </button>
      <span className="self-stretch my-auto">{quantity}</span>
      <button onClick={increment}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/402d7bbc33b2251467686672f2fc464f17608f16?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Increase quantity"
        />
      </button>
    </div>
  );
}; 