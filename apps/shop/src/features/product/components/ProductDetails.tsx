"use client";
import * as React from "react";

interface ProductDetailsProps {
  imageUrl: string;
  imageAlt: string;
  backgroundColor?: string;
  title: string;
  description: string;
  notice?: string;
}

export const ProductDetails = ({
  imageUrl,
  imageAlt,
  backgroundColor = "#e5d9c1",
  title,
  description,
  notice
}: ProductDetailsProps) => {
  // title, description, notice에 줄바꿈 처리
  const titleLines = title.split('\n');
  const descriptionLines = description.split('\n');
  const noticeLines = notice?.split('\n') || [];

  return (
    <div className="flex flex-col w-full py-10">
      {/* 제품 상세 이미지 섹션 */}
      <div className="flex flex-col lg:flex-row w-full shadow-lg overflow-hidden">
        {/* 왼쪽 이미지 */}
        <div className="flex-1 rounded-tl-2xl rounded-bl-2xl overflow-hidden bg-white">
          <div className="w-full h-full flex items-center justify-center" style={{ minHeight: "500px" }}>
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* 오른쪽 제품 설명 */}
        <div 
          className="flex-shrink-0 lg:w-[435px] rounded-tr-2xl rounded-br-2xl flex items-center justify-center" 
          style={{ backgroundColor }}
        >
          <div className="flex flex-col items-center justify-center py-16 px-6 max-w-[370px] mx-auto">
            <h2 className="text-[#373439] text-3xl font-medium text-center mb-20">
              {titleLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            
            <p className="text-[#9b9b9f] text-lg text-center mb-20">
              {descriptionLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < descriptionLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            
            {noticeLines.length > 0 && (
              <p className="text-[#74767c] text-xs leading-5 text-center">
                {noticeLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < noticeLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 