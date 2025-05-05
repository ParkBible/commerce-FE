"use client";

import React from 'react';
import { FilterBar } from './FilterBar';
import { ProductGrid } from './ProductGrid';

type Banner = {
  type: 'banner';
  image: string;
  title: string;
  description: string;
};

const Products: React.FC = () => {
  const products = [
    {
      type: 'banner' as const,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f5a8130fc9147e4fc6a3b266af030fa1bf690c9?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd',
      title: 'New\n시즌 한정 커피',
      description: '새롭게 출시된 버츄오 커피'
    },
    {
      badges: [
        { text: '더블 에스프레소', variant: 'default' as const },
        { text: '신제품', variant: 'yellow' as const },
        { text: '시즌 한정', variant: 'purple' as const }
      ],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd',
      features: [
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ec1fe57569b1f4a69a9d7b05a066a87d07c92fb?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd', value: '80ml' }
      ],
      name: '스페셜 리저브 하와이 코나',
      description: '이국적인 열대 과일향과 고소한 견과류 향이 어우러진 싱글 오리진 커피',
      price: 35000,
      unit: '10 캡슐'
    },
    {
      badges: [
        { text: '더블 에스프레소', variant: 'default' as const },
        { text: '신제품', variant: 'yellow' as const }
      ],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8bbce382ddc1ef5815fb52b37f81695001108d91?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd',
      features: [
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ec3b1979ebd42585e8a43f121a5a2792cd9dc58c?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd', value: '아이스 레시피' },
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/04dabf840c4cf0b87799c6e096929c365ec2909c?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd', value: '80ml' }
      ],
      name: '액티브',
      description: '아이스로 즐기기 좋은 비타민 B6 함유 커피',
      price: 11000,
      unit: '10 캡슐',
      outOfStock: true
    },
    {
      badges: [
        { text: '신제품', variant: 'yellow' as const }
      ],
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8bbce382ddc1ef5815fb52b37f81695001108d91?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd',
      features: [
        { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/04dabf840c4cf0b87799c6e096929c365ec2909c?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd', value: '40ml' },
        { strength: 8, value: '강도' }
      ],
      name: '일 카페',
      description: '강렬하고 풍부한 맛과 향의 이탈리아 에스프레소',
      price: 11000,
      unit: '10 캡슐'
    }
  ];

  return (
    <main className="flex flex-col items-start self-stretch px-40 py-16">
      <FilterBar />
      <section className="mt-10 w-full">
        <ProductGrid products={products} />
      </section>
    </main>
  );
};

export default Products; 