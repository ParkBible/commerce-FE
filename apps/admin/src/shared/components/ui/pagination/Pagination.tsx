import { useMemo } from "react";

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}

const MAX_VISIBLE_PAGES = 5; // 최대 표시할 페이지 번호 개수
const ITEMS_PER_PAGE = 10; // 페이지당 아이템 수

export function Pagination({ currentPage, totalItems, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

    // 표시할 페이지 번호들을 계산
    const visiblePages = useMemo(() => {
        const pages: number[] = [];

        if (totalPages <= MAX_VISIBLE_PAGES) {
            // 전체 페이지가 maxVisiblePages보다 적으면 모든 페이지 표시
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // 현재 페이지를 중심으로 페이지 번호 계산
            const halfVisible = Math.floor(MAX_VISIBLE_PAGES / 2);
            let start = Math.max(1, currentPage - halfVisible);
            let end = Math.min(totalPages, currentPage + halfVisible);

            // 시작이나 끝에 붙어있을 때 조정
            if (end - start + 1 < MAX_VISIBLE_PAGES) {
                if (start === 1) {
                    end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);
                } else {
                    start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
                }
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }

        return pages;
    }, [currentPage, totalPages]);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    // 총 아이템이 0이면 페이지네이션을 표시하지 않음
    if (totalItems === 0) {
        return null;
    }

    return (
        <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
                {totalItems}개 항목 중 {startItem}-{endItem} 표시
            </div>
            <nav className="flex space-x-1">
                {/* 처음 페이지 */}
                <Button onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
                    ≪
                </Button>

                {/* 이전 페이지 */}
                <Button onClick={handlePrevious} disabled={currentPage === 1}>
                    &lt;
                </Button>

                {/* 페이지 번호들 */}
                {visiblePages.map(page => (
                    <Button key={page} onClick={() => handlePageClick(page)} disabled={page === currentPage}>
                        {page}
                    </Button>
                ))}

                {/* 다음 페이지 */}
                <Button onClick={handleNext} disabled={currentPage === totalPages}>
                    &gt;
                </Button>

                {/* 마지막 페이지 */}
                <Button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}>
                    ≫
                </Button>
            </nav>
        </div>
    );
}

const Button = ({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={` flex justify-center w-8 px-3 py-1 text-sm rounded-md border border-gray-300 ${
            disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
    >
        {children}
    </button>
);
