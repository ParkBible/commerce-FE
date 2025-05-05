"use client";

import * as React from "react";

function HeroBanner() {
  return (
    <section className="flex relative flex-col justify-center items-center px-20 py-20 w-full min-h-[270px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6efa1b8d524b91891b772502f42519490e0b876?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-[1120px] min-w-80 max-md:max-w-full">
        <h1 className="w-full text-6xl font-bold tracking-tight leading-tight max-md:max-w-full max-md:text-4xl">
          801 버츄오 커피
        </h1>
        <p className="mt-6 text-lg font-semibold leading-none max-md:max-w-full">
          혁신적인 바코드 브루잉으로 열리는 차원이 다른 커피
        </p>
      </div>
    </section>
  );
}

export default HeroBanner; 