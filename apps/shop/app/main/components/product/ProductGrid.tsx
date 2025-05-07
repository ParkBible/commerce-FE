"use client";

import React from 'react';
import { BannerCard } from './BannerCard';
import { ProductCard, ProductCardProps } from './ProductCard';

type BannerItem = {
  type: 'banner';
  image: string;
  title: string;
  description: string;
};

type ProductItem = ProductCardProps;
type ProductGridItem = BannerItem | ProductItem;

interface ProductGridProps {
  products: ProductGridItem[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
      {products.map((product, index) => {
        if ('type' in product && product.type === 'banner') {
          return (
            <BannerCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          );
        }
        return <ProductCard key={index} {...(product as ProductItem)} />;
      })}
    </div>
  );
}; 