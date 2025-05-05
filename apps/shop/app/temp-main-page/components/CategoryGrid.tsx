"use client";
import * as React from 'react';
import { CategoryItem } from './CategoryItem';

const categories = [
  {
    title: '버츄오 캡슐 커피',
    description: '다양한 크기와 풍부한 맛으로 즐기는 프리미엄 커피',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd'
  },
  {
    title: '오리지널 캡슐 커피',
    description: '진하고 깊은 에스프레소 풍미를 담은 정통 캡슐',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd'
  },
  {
    title: '머신',
    description: '혁신적인 디자인과 최신 기술이 적용된 801 커피 머신',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd'
  },
  {
    title: '액세서리',
    description: '커피 경험을 완성하는 다양한 고품질 액세서리',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd'
  },
];

export default function CategoryGrid() {
  return (
    <section className="flex flex-col items-start gap-8 self-stretch px-40 py-16">
      <h2 className="text-3xl font-bold">카테고리</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </section>
  );
} 