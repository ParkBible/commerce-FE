"use client";
import * as React from "react";

export const ProductDetails = () => {
  return (
    <div className="flex flex-col w-full py-10">
      {/* 제품 상세 이미지 섹션 */}
      <div className="flex flex-col lg:flex-row w-full shadow-lg overflow-hidden">
        {/* 왼쪽 이미지 */}
        <div className="flex-1 rounded-tl-2xl rounded-bl-2xl overflow-hidden bg-white">
          <div className="w-full h-full flex items-center justify-center" style={{ minHeight: "500px" }}>
            <img 
              src="/images/coffee.jpg"
              alt="스페셜 리저브 하와이안 코나 상세 이미지"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* 오른쪽 제품 설명 */}
        <div className="flex-shrink-0 lg:w-[435px] bg-[#e5d9c1] rounded-tr-2xl rounded-br-2xl flex items-center justify-center">
          <div className="flex flex-col items-center justify-center py-16 px-6 max-w-[370px] mx-auto">
            <h2 className="text-[#373439] text-3xl font-medium text-center mb-20">
              스페셜 리처브<br />하와이안 코나
            </h2>
            
            <p className="text-[#9b9b9f] text-lg text-center mb-20">
              이국적인 열대 과일향과 고소한 견과류향이 어우러진 싱글 오리진 커피
            </p>
            
            <p className="text-[#74767c] text-xs leading-5 text-center">
              * 스페셜 리저브 하와이 코나는 한정 수량 준비되어<br />
              버츄오/오리지널 각각 1 계정 당 최대 6개 슬리브 구매<br />
              가능합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 