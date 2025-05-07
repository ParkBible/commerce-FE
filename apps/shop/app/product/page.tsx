export default async function ProductPage({
    searchParams,
}: { searchParams: Promise<{ query: string }> }) {
    const { query } = await searchParams;

    // TODO : 검색 결과 표시
    return <div>{query}</div>;
}
