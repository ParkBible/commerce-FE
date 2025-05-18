import { Button } from "@/src/shared/components/shared/button";

export const PurchaseSummary = () => {
    return (
        <div className="py-14 px-16 border border-gray-200 rounded-2xl">
            <h2>구매 금액</h2>
            <h3>프로모션 코드(할인코드) 사용하기</h3>
            <div className="flex">
                <input
                    type="text"
                    className="flex-1 border border-gray-200 rounded-md px-4 py-3.5 outline-none"
                    placeholder="프로모션 코드에 대해서 입력해주세요."
                />
                <Button variant="outline" className="h-full">
                    확인
                </Button>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>스페셜 리저브 하와이 코나</p>
                    <p>₩ 100,000</p>
                </div>
                <div className="flex justify-between">
                    <p>스페셜 리저브 하와이 코나</p>
                    <p>₩ 100,000</p>
                </div>
                <div className="flex justify-between">
                    <p>스페셜 리저브 하와이 코나</p>
                    <p>₩ 100,000</p>
                </div>
                <div className="flex justify-between">
                    <p>할인 금액</p>
                    <p>₩ 10,000</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p>Total</p>
                <p>₩ 100,000</p>
            </div>
            <Button size="full">결제하기</Button>
        </div>
    );
};
