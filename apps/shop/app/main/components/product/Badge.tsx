"use client";

import React from 'react';

interface BadgeProps {
  variant: 'default' | 'yellow' | 'purple' | 'red' | 'green';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const baseClasses = "inline-block px-1.5 py-1 text-[10px] tracking-tight leading-none text-center rounded-md whitespace-nowrap";

  const variantClasses = {
    default: "bg-neutral-700 bg-opacity-20 text-neutral-900",
    yellow: "bg-yellow-400 text-neutral-900",
    purple: "bg-purple-800 text-white",
    red: "bg-red-800 text-white",
    green: "bg-green-700 text-white"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} mr-1 mb-1`}>
      {children}
    </span>
  );
}; 