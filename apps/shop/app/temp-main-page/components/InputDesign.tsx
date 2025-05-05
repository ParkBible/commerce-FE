"use client";
import * as React from "react";

function PCHeaderTop() {
  return (
    <header className="flex flex-wrap gap-8 items-center px-40 py-4 w-full bg-white border-b border-solid border-b-[color:var(--Line-Sub2,rgba(112,115,124,0.08))] max-md:px-5 max-md:max-w-full">
      <div className="self-stretch my-auto text-2xl font-bold tracking-tight leading-snug text-center text-black w-[135px]">
        <h1 className="self-stretch text-black">801 COFFEE</h1>
      </div>

      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch p-4 my-auto text-sm tracking-tight leading-snug rounded-xl basis-0 bg-neutral-100 min-h-14 min-w-60 text-neutral-700 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb040e39632d075dcdf31086c7ed0bea3c66aeb6?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
          alt="Search"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <input
          type="text"
          placeholder="'인기 캡슐' 을 검색해 보세요."
          className="flex-1 bg-transparent border-none outline-none opacity-50 placeholder-neutral-700"
        />
      </div>

      <nav className="flex gap-6 justify-center items-center self-stretch my-auto">
        <button className="focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d83c3984fea3767c661c7b9a7ae20f706764920a?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
            alt="Navigation Icon 1"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
        </button>
        <button className="focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb40dd9fddf419c3fe59ba9750479588879625e9?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
            alt="Navigation Icon 2"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
        </button>
      </nav>
    </header>
  );
}

export default PCHeaderTop;
