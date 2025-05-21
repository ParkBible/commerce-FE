import { formatNumber } from "@/src/shared/utils/formatUtils";
import Image from "next/image";

interface OrderCheckoutItemProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export default function OrderCheckoutItem({ name, price, quantity, image }: OrderCheckoutItemProps) {
    return (
        <div className="flex items-center gap-4 py-4 px-8">
            <div>
                <Image src={image} alt={name} width={64} height={64} />
            </div>
            <div>
                <p className="font-bold mb-2">{name}</p>
                <p className="text-[#257A57]">
                    <span className="font-bold">₩ {formatNumber(price * quantity)} </span>
                    <span className="text-xs">
                        ({quantity}x₩{formatNumber(price)})
                    </span>
                </p>
            </div>
        </div>
    );
}
