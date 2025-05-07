"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

// 최초 렌더링 이후 partial rendering를 위해서 CSR로 구현
export default function SearchProduct() {
    const router = useRouter();

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const searchQuery = formData.get("searchQuery");

            if (!searchQuery) return;

            router.push(`/product?query=${searchQuery}`);
        },
        [router],
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch p-4 my-auto text-sm tracking-tight leading-snug rounded-xl basis-0 bg-neutral-100 min-h-14 min-w-60 text-neutral-700 max-md:max-w-full"
        >
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb040e39632d075dcdf31086c7ed0bea3c66aeb6"
                alt="Search"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <input
                type="text"
                placeholder="'인기 캡슐' 을 검색해 보세요."
                className="flex-1 bg-transparent border-none outline-none opacity-50 placeholder-neutral-700 w-full"
                name="searchQuery"
            />
        </form>
    );
}
