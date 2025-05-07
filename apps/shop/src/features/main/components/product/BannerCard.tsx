"use client";

import React from 'react';

interface BannerCardProps {
  image: string;
  title: string;
  description: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ image, title, description }) => {
  // 줄바꿈을 HTML <br> 태그로 변환 (New라는 텍스트 다음에 나오는 문장을 한칸 밑으로 내려야 해서)
  const titleWithLineBreaks = title.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));
  
  return (
    <article className="overflow-hidden grow shrink text-center text-white rounded-xl bg-neutral-300 min-w-60 w-[214px] h-[580px]">
      <div className="flex relative flex-col justify-between h-full">
        <img
          src={image}
          alt={title.replace(/\n/g, ' ')}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-auto p-6 bg-gradient-to-t from-black/70 to-transparent">
          <h2 className="text-2xl font-bold tracking-tight leading-9">
            {titleWithLineBreaks}
          </h2>
          <p className="mt-3 text-sm tracking-tight leading-snug">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}; 