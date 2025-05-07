import { useState } from "react";

// QuantitySelector 컴포넌트
export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="flex items-center border border-gray-200 rounded-lg w-[120px]">
      <button 
        onClick={decrement}
        className="px-3 py-2 text-gray-500 hover:text-gray-700"
      >
        -
      </button>
      <span className="flex-1 text-center">{quantity}</span>
      <button 
        onClick={increment}
        className="px-3 py-2 text-gray-500 hover:text-gray-700"
      >
        +
      </button>
    </div>
  );
}; 