import { formatNumber } from "@/src/shared/utils/formatUtils";
import Image from "next/image";

interface OrderItemProps {
    title: string;
    price: number;
    quantity: number;
    image: string;
}
export const OrderItem = ({ title, price, quantity, image }: OrderItemProps) => {
    const totalPrice = formatNumber(price * quantity);
    return (
        <div className="flex flex-col justify-center">
            <div className="flex">
                <Image src={image} alt={title} width={64} height={64} />
                <div>
                    <p className="font-bold mb-2">{title}</p>
                    <p className="flex items-center">
                        <b>₩ {totalPrice}</b>
                        <span className="text-xs ml-1">
                            ({quantity}x₩{price})
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
