import React from "react";
import ProductItem from "@/src/features/search/components/ProductItem";

interface Badge {
    text: string;
    type: "category" | "new" | "best" | "decaf";
}

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    capsuleCount: number;
    intensity: number;
    cupSize: string;
    imageUrl: string;
    badges: Badge[];
    inStock: boolean;
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
                {products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
