import { fetchServer, fetchClient, type CustomError } from "@/src/shared/fetcher";
import { getMockOrderDetail } from "@/src/features/order/mocks/orderDetailMock";
import { getMockOrderHistory } from "@/src/features/order/mocks/orderHistoryMock";
import type { OrderDetailData } from "@/src/features/order/mocks/orderDetailMock";
import type { OrderHistoryItem } from "@/src/features/order/mocks/orderHistoryMock";

/**
 * 주문 상세 정보를 가져오는 API 함수
 */
export async function getOrderDetail(orderId: string): Promise<OrderDetailData> {
    // 1. 개발 환경에서는 목 데이터 사용
    if (process.env.NODE_ENV === "development") {
        return getMockOrderDetail(orderId);
    }

    // 2. 실제 API를 호출하는 경우
    try {
        const fetch = fetchServer();
        const response = await fetch<OrderDetailData>(`/api/orders/${orderId}`);
        if (response.data === null) {
            throw new Error("주문 상세 정보가 없습니다.");
        }
        return response.data;
    } catch (error: unknown) {
        console.error("주문 상세 정보 조회 실패:", error);
        throw error;
    }
}

/**
 * 주문 내역 목록을 가져오는 API 함수
 */
export async function getOrderHistory(): Promise<OrderHistoryItem[]> {
    // 1. 개발 환경에서는 목 데이터 사용
    if (process.env.NODE_ENV === "development") {
        return getMockOrderHistory();
    }

    // 2. 실제 API를 호출하는 경우
    try {
        const fetch = fetchServer();
        const response = await fetch<OrderHistoryItem[]>("/api/orders");
        if (response.data === null) {
            return [];
        }
        return response.data;
    } catch (error: unknown) {
        console.error("주문 내역 조회 실패:", error);
        throw error;
    }
}
