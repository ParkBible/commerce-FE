interface SearchResultHeaderProps {
    resultCount: number;
    searchTerm: string;
}

export default function SearchResultHeader({ resultCount, searchTerm }: SearchResultHeaderProps) {
    return (
        <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-bold">{searchTerm}</h2>
        </div>
    );
}
