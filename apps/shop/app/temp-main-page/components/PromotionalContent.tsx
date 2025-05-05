"use client";
import * as React from "react";

export default function CoffeeLetter() {
  return (
    <article className="flex items-center gap-10 self-stretch px-40 py-10">
      <section className="overflow-hidden grow shrink self-stretch my-auto leading-snug text-black whitespace-nowrap rounded-xl min-w-60 w-[559px] max-md:max-w-full">
        <div className="flex relative flex-col items-start px-14 py-24 w-full min-h-[371px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39753b2bf47d65b84b124b51611257249f06b6fb?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
            alt="Background pattern"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex overflow-hidden relative gap-6 items-center p-4 bg-white rounded">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebd7bc5ad020284f520fbe10b3c02ad5224ecb81?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                alt="Coffee product"
                className="object-contain shrink-0 self-stretch my-auto rounded-sm aspect-square w-[60px]"
              />
              <div className="self-stretch my-auto w-[68px]">
                <p className="text-sm tracking-tight">에티오피아</p>
                <p className="text-base font-bold tracking-tight">1,000</p>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3389f8171eec06884ac09c240888fc650ef88dc?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
              alt="Arrow icon"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7390e55305441f67617e97da935194d032e660d?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
            alt="Decorative element 1"
            className="object-contain mt-1.5 ml-24 w-6 aspect-square max-md:ml-2.5"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7390e55305441f67617e97da935194d032e660d?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
            alt="Decorative element 2"
            className="object-contain self-center mt-5 ml-12 w-6 aspect-square"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center self-stretch my-auto min-w-60">
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-semibold tracking-tight leading-snug text-neutral-700">
            4월 커피레터
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight leading-9 text-black">
            잠시 걸음을 멈추고
            <br />
            여유를 찾아 떠나 보시는 건 어떨까요?
          </h3>
        </div>
        <button className="gap-2.5 self-stretch mt-6 text-base font-semibold tracking-tight text-black whitespace-nowrap border-b-2 border-solid border-b-[color:var(--Normal-Strong,#000)] min-h-12 w-[55px]">
          보러가기
        </button>
      </section>
    </article>
  );
}