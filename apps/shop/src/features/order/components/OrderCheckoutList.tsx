import { cva } from "class-variance-authority";
import OrderCheckoutItem from "./OrderCheckoutItem";

interface OrderCheckListProps {
    items: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}

const itemContainer = cva("border-b border-gray-200", {
    variants: {
        isLast: {
            true: "border-b-0",
        },
    },
});
export default function OrderCheckoutList({ items }: OrderCheckListProps) {
    return (
        <div>
            {items.map((item, index) => (
                <div key={item.id} className={itemContainer({ isLast: index === items.length - 1 })}>
                    <OrderCheckoutItem key={item.name} {...item} />
                </div>
            ))}
        </div>
    );
}
