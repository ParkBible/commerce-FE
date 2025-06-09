"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface ReviewSortSelectProps {
    totalCount?: number;
}

export default function ReviewSortSelect({ totalCount }: ReviewSortSelectProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sort") || "";

    const handleSortChange = (sortValue: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (sortValue) {
            newSearchParams.set("sort", sortValue);
        } else {
            newSearchParams.delete("sort");
        }
        router.push(`?${newSearchParams.toString()}`);
    };

    return (
        <div className="flex items-center justify-between mb-6">
            {totalCount !== undefined && <span className="text-sm text-gray-600">총 {totalCount}개의 리뷰</span>}
            <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600">정렬:</span>
                <select
                    value={currentSort}
                    onChange={e => handleSortChange(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="">최신순</option>
                    <option value="-rating">별점 높은순</option>
                    <option value="rating">별점 낮은순</option>
                </select>
            </div>
        </div>
    );
}
