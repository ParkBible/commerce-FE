import { Button } from "@/src/shared/components/shared/button";

interface SummaryProps {
    subtotalPrice: number;
    shippingFee: number;
    totalPrice: number;
}

export default function Summary({
    subtotalPrice,
    shippingFee,
    totalPrice,
}: SummaryProps) {
    return (
        <div className="p-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold">주문 요약</h2>
            <div className="flex justify-between items-center mt-4">
                <p>총 상품 금액</p>
                <p>{subtotalPrice}원</p>
            </div>
            <div className="flex justify-between items-center mt-2">
                <p>배송비</p>
                <p>{shippingFee}원</p>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex justify-between items-center mt-2 font-bold">
                <p>최종 결제 금액</p>
                <p>{totalPrice}원</p>
            </div>
            <Button className="mt-4 w-full">결제하기</Button>
        </div>
    );
}
