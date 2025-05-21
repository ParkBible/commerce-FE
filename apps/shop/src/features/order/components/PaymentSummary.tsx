import { Button } from "@/src/shared/components/shared/button";

export default function PaymentSummary() {
    return (
        <div>
            <h4 className="text-lg font-bold mb-10">구매 금액</h4>

            <h5>프로모션 코드(할인 코드) 사용하기</h5>
            <div className="flex gap-2 mb-10">
                <input className="flex-1 border rounded-md px-4 outline-none" />
                <Button variant="outline">확인</Button>
            </div>
            <div>
                <ul>
                    <li className="flex justify-between mb-2 ">
                        <span>스페셜 리저브 하와이 코나(x10)</span>
                        <span>₩ 35,000</span>
                    </li>
                </ul>
            </div>
            <div className="h-[1px] bg-gray-200 my-4" />
            <div className="flex justify-between text-lg font-bold mb-10">
                <span>Total</span>
                <span>₩ 35,000</span>
            </div>
            <Button className="w-full">결제하기</Button>
        </div>
    );
}
