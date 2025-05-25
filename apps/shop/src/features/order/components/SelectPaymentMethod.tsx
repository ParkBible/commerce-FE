"use client";

import { useEffect, useState } from "react";

type SelectPaymentMethodProps = {};

export default function SelectPaymentMethod({}: SelectPaymentMethodProps) {
    const [paymentMethod, setPaymentMethod] = useState<string>("toss");

    const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(e.target.value);
    };

    // useEffect(() => {
    // onChange(paymentMethod);
    // }, [paymentMethod, onChange]);

    return (
        <div>
            <div className="flex items-center gap-2">
                <input type="radio" name="payment-method" id="toss" onChange={handlePaymentMethodChange} />
                <label htmlFor="toss">토스페이</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="radio" name="payment-method" id="credit-card" onChange={handlePaymentMethodChange} />
                <label htmlFor="credit-card">신용카드 결제</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="radio" name="payment-method" id="bank-transfer" onChange={handlePaymentMethodChange} />
                <label htmlFor="bank-transfer">계좌이체</label>
            </div>
        </div>
    );
}
