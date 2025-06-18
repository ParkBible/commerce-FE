import ProductItem from "@/src/features/search/components/ProductItem";
import type { Product } from "@/src/features/search/types";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
