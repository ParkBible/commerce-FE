import { fetchServer, fetchClient, type CustomError } from "@/src/shared/fetcher";
import { getMockOrderDetail } from "@/src/features/order/mocks/orderDetailMock";
import { getMockOrderHistory } from "@/src/features/order/mocks/orderHistoryMock";
import type { OrderDetailData } from "@/src/features/order/mocks/orderDetailMock";
import type { OrderHistoryItem } from "@/src/features/order/mocks/orderHistoryMock";

/**
 * 주문 상세 정보를 가져오는 API 함수
 * 서버, 클라이언트 컴포넌트 모두에서 사용 가능
 */
export async function getOrderDetail(orderId: string): Promise<OrderDetailData> {
    // 개발 환경에서는 목 데이터 사용
    if (process.env.NODE_ENV === "development") {
        await new Promise(resolve => setTimeout(resolve, 300)); // 실제 API 호출 시뮬레이션을 위한 인위적 지연
        return getMockOrderDetail(orderId);
    }

    // 서버 컴포넌트에서 호출 시 사용할 함수
    const fetch = fetchServer();

    try {
        const response = await fetch<OrderDetailData>(`/api/orders/${orderId}`);
        return response.data as OrderDetailData;
    } catch (error) {
        const err = error as CustomError;
        console.error(`주문 상세 정보 조회 실패: ${err.code} - ${err.message}`);
        throw error;
    }
}

/**
 * 주문 내역 목록을 가져오는 API 함수
 * 서버, 클라이언트 컴포넌트 모두에서 사용 가능
 */
export async function getOrderHistory(): Promise<OrderHistoryItem[]> {
    // 개발 환경에서는 목 데이터 사용
    if (process.env.NODE_ENV === "development") {
        // 실제 API 호출 시뮬레이션을 위한 인위적 지연
        await new Promise(resolve => setTimeout(resolve, 300));
        return getMockOrderHistory();
    }

    // 서버 컴포넌트에서 호출 시 사용할 함수
    const fetch = fetchServer();

    try {
        const response = await fetch<OrderHistoryItem[]>("/api/orders");
        return response.data as OrderHistoryItem[];
    } catch (error) {
        const err = error as CustomError;
        console.error(`주문 내역 조회 실패: ${err.code} - ${err.message}`);
        throw error;
    }
}

/**
 * 클라이언트 컴포넌트에서 주문 내역 목록을 가져오는 함수
 */
export async function getOrderHistoryClient(): Promise<OrderHistoryItem[]> {
    // 개발 환경에서는 목 데이터 사용
    if (process.env.NODE_ENV === "development") {
        await new Promise(resolve => setTimeout(resolve, 300));
        return getMockOrderHistory();
    }

    // 클라이언트 컴포넌트에서 호출 시 사용할 함수
    const fetch = fetchClient();

    try {
        const response = await fetch<OrderHistoryItem[]>("/api/orders");
        return response.data as OrderHistoryItem[];
    } catch (error) {
        const err = error as CustomError;
        console.error(`주문 내역 조회 실패: ${err.code} - ${err.message}`);
        throw error;
    }
}
