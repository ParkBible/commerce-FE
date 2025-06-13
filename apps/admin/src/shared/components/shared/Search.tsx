import type React from "react";

type SearchProps = {
    placeholder: string;
    children?: React.ReactNode;
    setSearchQuery?: (query: string) => void;
};

export default function Search({ placeholder, children, setSearchQuery }: SearchProps) {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && setSearchQuery) {
            event.preventDefault();
            setSearchQuery(event.currentTarget.value);
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-wrap gap-4">
                {/* 검색 */}
                <div className="flex-1 min-w-[240px]">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onKeyDown={handleKeyDown}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <title>검색</title>
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* 필터 */}
                {children}
            </div>
        </div>
    );
}
