"use client";

import type { ReactNode } from "react";
import { OrderHistoryList } from "./OrderHistoryList";
import { getOrderHistory } from "@/src/features/order/api/orderApi";
import { useEffect, useState } from "react";
import type { OrderHistoryItem } from "@/src/features/order/mocks/orderHistoryMock";

export const OrderHistoryPage = (): ReactNode => {
    const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrderHistory();
                setOrders(data);
            } catch (error) {
                console.error("주문 내역을 불러오는데 실패했습니다:", error);
            } finally {
                setIsLoading(false);
            }
        };

        void fetchOrders();
    }, []);

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

            {isLoading ? <div className="text-center py-8">주문 내역을 불러오는 중...</div> : <OrderHistoryList orders={orders} />}
        </div>
    );
};
