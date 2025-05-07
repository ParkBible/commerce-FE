"use client";

import React from 'react';
import { Badge } from './Badge';
import { ProductFeature } from './ProductFeature';
import { AddToCartButton } from './AddToCartButton';

interface ProductBadge {
  text: string;
  variant: 'default' | 'yellow' | 'purple' | 'red' | 'green';
}

interface ProductFeatureType {
  icon?: string;
  value: string;
  label?: string;
  strength?: number;
}

export interface ProductCardProps {
  badges: ProductBadge[];
  image: string;
  features: ProductFeatureType[];
  name: string;
  description: string;
  price: number;
  unit: string;
  outOfStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  badges,
  image,
  features,
  name,
  description,
  price,
  unit,
  outOfStock = false
}) => {
  return (
    <article className="flex flex-col grow shrink justify-between px-4 py-5 bg-white rounded-xl border border-solid border-[color:var(--Line-Sub2,rgba(112,115,124,0.08))] h-[580px] min-w-[200px] w-[214px] overflow-hidden">
      <div className="flex flex-col flex-1 w-full">
        <div className="w-full">
          <div className="flex flex-wrap gap-1 items-start w-full text-xs tracking-tight leading-snug text-center mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.text}
              </Badge>
            ))}
          </div>

          <div className="px-1.5 mt-4 w-full h-[180px] flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="object-contain max-h-full max-w-full"
            />
          </div>

          <div className="flex gap-4 justify-center items-center mt-4 w-full text-center text-neutral-700 h-[40px]">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid bg-zinc-500 bg-opacity-20 border-zinc-500 border-opacity-20" />
                )}
                <ProductFeature {...feature} />
              </React.Fragment>
            ))}
          </div>

          <div className="mt-12 w-full">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-base font-bold tracking-tight leading-snug text-black h-[24px] overflow-hidden">
                {name}
              </h3>
              <p className="mt-2 text-sm tracking-tight leading-5 text-neutral-900 h-[40px] overflow-hidden">
                {description}
              </p>
            </div>
            <div className="flex flex-col mt-4 w-full leading-snug">
              <div className="flex gap-1 justify-center items-start w-full text-2xl font-bold tracking-tight text-green-700 whitespace-nowrap">
                <span>₩</span>
                <span>{price.toLocaleString()}</span>
              </div>
              <p className="self-center text-sm tracking-tight text-neutral-700">
                {unit}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 pb-8">
          <AddToCartButton disabled={outOfStock} />
        </div>
      </div>
    </article>
  );
}; 