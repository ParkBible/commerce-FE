"use client";
import * as React from 'react';

interface CategoryItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CategoryItem({ title, description, imageUrl }: CategoryItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article
      className="relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm opacity-0 transform translate-y-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : ''
        }`}>
          {description}
        </p>
      </div>
    </article>
  );
} 