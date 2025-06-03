import { searchProducts } from "@/src/features/search/api/searchProductApi";
import SearchPage from "@/src/features/search/components/SearchPage";

interface SearchPageProps {
    searchParams: {
        q?: string;
        page?: string;
    };
}

export default async function Search({ searchParams }: SearchPageProps) {
    const searchTerm = searchParams.q || "버츄오";
    const page = Number.parseInt(searchParams.page || "0");

    // 서버에서 데이터 fetch
    const searchResult = await searchProducts(searchTerm, page, 10);

    return (
        <SearchPage
            initialProducts={searchResult.content || []}
            initialTotalElements={searchResult.totalElements || 0}
            initialSearchTerm={searchTerm}
        />
    );
}
