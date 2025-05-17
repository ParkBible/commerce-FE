import { getOrderHistory } from "@/src/features/order/api/orderApi";
import { OrderHistoryPage } from "@/src/features/order/OrderHistoryPage";

export default async function OrderPage() {
    // 서버 컴포넌트에서 데이터를 미리 가져옴
    const orders = await getOrderHistory();

    // 가져온 데이터를 클라이언트 컴포넌트에 전달
    return <OrderHistoryPage initialOrders={orders} />;
}
