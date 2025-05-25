import { OrderItem } from "./OrderItem";

interface OrderItemListProps {
    orderItems: {
        title: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}
export const OrderItemList = ({ orderItems }: OrderItemListProps) => {
    return (
        <div>
            <h2>주문 상품</h2>
            <div className="px-4 border border-gray-200 rounded-2xl">
                {orderItems.map(orderItem => (
                    <div className="p-4" key={orderItem.title}>
                        <OrderItem {...orderItem} />
                    </div>
                ))}
            </div>
        </div>
    );
};
