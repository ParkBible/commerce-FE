import * as React from "react";
import type { RecommendedProductType } from "../types";

interface RecommendedProductsProps {
    products: RecommendedProductType[];
}

export function RecommendedProducts({ products }: RecommendedProductsProps) {
    return (
        <section className="py-16 bg-[#f7f7f8]">
            <div className="max-w-[1120px] mx-auto">
                <h2 className="text-2xl font-bold mb-8">추천 제품</h2>

                <div className="grid grid-cols-3 gap-8">
                    {products.map(product => (
                        <div
                            key={`recommended-${product.id}`}
                            className="bg-white rounded-xl overflow-hidden"
                        >
                            <div className="p-4">
                                <div className="h-[200px] mb-6 flex justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full object-contain"
                                    />
                                </div>

                                <div className="space-y-2 text-center mb-6">
                                    <h3 className="text-xl font-bold">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-[#171719]">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex justify-center mb-6">
                                    <div className="text-[#257a57] font-bold text-2xl">
                                        ₩ {product.price.toLocaleString()}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={`w-full py-4 rounded-lg font-semibold ${
                                        product.inStock
                                            ? "bg-[#257a57] text-white"
                                            : "bg-[#f4f4f5] text-[#37383c] opacity-30"
                                    }`}
                                    disabled={!product.inStock}
                                >
                                    {product.inStock
                                        ? "장바구니 담기"
                                        : "일시품절"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
