interface PaymentMethodSelectorProps {
    paymentMethods: PaymentMethod[];
}

export default function SelectPaymentMethod({ paymentMethods }: PaymentMethodSelectorProps) {
    return (
        <div>
            <h2>결제 수단</h2>
            <div></div>
        </div>
    );
}
