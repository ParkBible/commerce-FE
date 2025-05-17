interface PaymentItem {
    id: string;
    name: string;
    price: number;
}

interface PaymentInfoProps {
    items: PaymentItem[];
    discount: number;
    total: number;
}

export const PaymentInfo = ({ items, discount, total }: PaymentInfoProps) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">결제 정보</h2>
            <div className="flex flex-col gap-2">
                {items.map(item => (
                    <div key={item.id} className="flex justify-between">
                        <p className="text-[#2e2f33] opacity-90">{item.name}</p>
                        <p>₩ {item.price.toLocaleString("ko-KR")}</p>
                    </div>
                ))}
                <div className="flex justify-between">
                    <p>할인 금액</p>
                    <p className="text-[#257a57]">{`-${discount.toLocaleString("ko-KR")}원`}</p>
                </div>
            </div>
            <hr className="my-4 border-t border-gray-400 opacity-20" />
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Total</h3>
                <p className="text-xl font-bold">₩ {total.toLocaleString("ko-KR")}</p>
            </div>
        </div>
    );
};
