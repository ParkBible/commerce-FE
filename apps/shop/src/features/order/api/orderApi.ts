import type { OrderDetailData } from "@/src/features/order/mocks/orderDetailMock";
import { getMockOrderDetail } from "@/src/features/order/mocks/orderDetailMock";

/**
 * 주문 상세 정보를 가져오는 API 함수
 * 현재는 목 데이터를 반환하지만, 실제 API 연동 시 수정 예정
 */
export async function getOrderDetail(orderId: string): Promise<OrderDetailData> {
    // 개발 환경이나 목 데이터 사용 설정 시 목 데이터 반환
    if (process.env.NODE_ENV === "development") {
        await new Promise(resolve => setTimeout(resolve, 300)); // 실제 API 호출 시뮬레이션을 위한 인위적 지연
        return getMockOrderDetail(orderId);
    }

    // 실제 API 호출 (프로덕션 환경)
    try {
        const response = await fetch(`/api/orders/${orderId}`);

        if (!response.ok) {
            throw new Error(`주문 정보를 가져오는데 실패했습니다: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("주문 상세 정보 조회 실패:", error);
        throw error;
    }
}
