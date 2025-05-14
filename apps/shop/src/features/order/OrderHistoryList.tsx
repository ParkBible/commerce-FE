import { Button } from "@/src/shared/components/shared/button";
import Image from "next/image";
import type { ReactNode } from "react";

interface OrderItem {
    id: string;
    status: "준비중" | "배송중" | "배송완료" | "반품완료";
    statusDate?: string;
    productName: string;
    price: number;
    imageSrc: string;
}

interface OrderHistoryListProps {
    orders: OrderItem[];
}

export const OrderHistoryList = ({ orders }: OrderHistoryListProps): ReactNode => {
    return (
        <div className="flex flex-col w-full gap-4">
            {orders.map(order => (
                <div key={order.id} className="w-full p-6 border border-gray-300/30 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-base">{order.status}</span>
                            {order.statusDate && <span className="text-emerald-700 text-sm">{order.statusDate}</span>}
                        </div>
                        <button type="button" className="p-1.5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden relative">
                            <Image src={order.imageSrc} alt={`${order.productName} 이미지`} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-bold text-sm">{order.productName}</h3>
                            <div className="text-emerald-700 font-bold text-sm">₩ {order.price.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {order.status === "준비중" && (
                            <>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    주문 취소
                                </Button>
                                <Button className="flex-1 h-10 text-sm font-semibold">배송 조회</Button>
                            </>
                        )}

                        {order.status === "배송중" && (
                            <>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    반품 신청
                                </Button>
                                <Button className="flex-1 h-10 text-sm font-semibold">배송 조회</Button>
                            </>
                        )}

                        {order.status === "배송완료" && (
                            <>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    반품 신청
                                </Button>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    배송 조회
                                </Button>
                            </>
                        )}

                        {order.status === "반품완료" && (
                            <>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    반품 정보
                                </Button>
                                <Button variant="outline" className="flex-1 h-10 text-sm font-semibold">
                                    장바구니 담기
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            ))}

            <Button variant="outline" className="w-48 h-12 mx-auto flex items-center justify-center gap-1 text-sm font-semibold">
                더보기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
        </div>
    );
};
