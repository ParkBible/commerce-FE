"use client";
import * as React from "react";

function Tags() {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <nav
        className="flex flex-wrap gap-8 justify-center items-center py-4 mx-auto max-w-[1240px] text-xl font-bold tracking-tight leading-snug text-center whitespace-nowrap text-neutral-700"
        aria-label="Content categories"
      >
        <ul className="flex flex-wrap gap-8 justify-center items-center list-none p-0 m-0">
          <li className="self-stretch my-auto">
            <button
              className="text-xl font-bold tracking-tight leading-snug text-black"
              aria-current="true"
            >
              버츄오
            </button>
          </li>
          <li className="self-stretch my-auto">
            <button
              className="text-xl font-bold tracking-tight leading-snug text-neutral-700"
              aria-current="false"
            >
              오리지널
            </button>
          </li>
          <li className="self-stretch my-auto">
            <button
              className="text-xl font-bold tracking-tight leading-snug text-neutral-700"
              aria-current="false"
            >
              커피레시피
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Tags; 