import { Button } from "@/src/shared/components/shared/button";

export default function PaymentSummary() {
    return (
        <div>
            <h4 className="text-lg font-bold mb-10">구매 금액</h4>

            <h5>프로모션 코드(할인 코드) 사용하기</h5>
            <div className="flexl gap-2">
                <input className="flex-1" />
                <Button variant="outline">확인</Button>
            </div>
        </div>
    );
}
