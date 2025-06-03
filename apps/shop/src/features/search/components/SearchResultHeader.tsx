interface SearchResultHeaderProps {
    resultCount: number;
    searchTerm: string;
}

export default function SearchResultHeader({ resultCount, searchTerm }: SearchResultHeaderProps) {
    return (
        <div className="flex flex-col items-center mb-16">
            <p className="text-[#37383c]/60 text-base mb-1">{resultCount}개의 검색 결과</p>
            <h2 className="text-2xl font-bold">{searchTerm}</h2>
        </div>
    );
}
