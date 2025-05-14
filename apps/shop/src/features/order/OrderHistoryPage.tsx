import type { ReactNode } from "react";
import { OrderHistoryList } from "./OrderHistoryList";

export const OrderHistoryPage = (): ReactNode => {
    // 더미 데이터 (실제로는 API에서 가져올 데이터)
    const orders = [
        {
            id: "1",
            status: "준비중" as const,
            productName: "스페셜 리저브 하와이 코나 외 3건",
            price: 35000,
            imageSrc: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069",
        },
        {
            id: "2",
            status: "배송중" as const,
            productName: "스페셜 리저브 하와이 코나 외 3건",
            price: 35000,
            imageSrc: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070",
        },
        {
            id: "3",
            status: "배송완료" as const,
            statusDate: "5/11 도착",
            productName: "스페셜 리저브 하와이 코나 외 3건",
            price: 35000,
            imageSrc: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1887",
        },
        {
            id: "4",
            status: "반품완료" as const,
            statusDate: "5/11 취소",
            productName: "스페셜 리저브 하와이 코나 외 3건",
            price: 35000,
            imageSrc: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1887",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center gap-2 mb-6">
                <button type="button" className="p-1">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold">주문내역</h1>
            </div>

            <div className="mb-6">
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="구매한 상품명을 입력하세요."
                        className="w-full h-12 pl-12 pr-4 bg-gray-100 rounded-xl text-sm outline-none"
                    />
                </div>

                <div>
                    <button type="button" className="h-10 px-4 border border-gray-300/30 rounded text-base flex items-center gap-2">
                        필터
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M3 7H21M6 12H18M10 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <OrderHistoryList orders={orders} />
        </div>
    );
};
