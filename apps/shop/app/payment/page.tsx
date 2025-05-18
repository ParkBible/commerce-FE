import PaymentForm from "@/src/features/payment/components/PaymentForm";
import ShippingInfoForm from "@/src/features/order/components/ShippingInfoForm";
import OrderList from "@/src/features/order/components/OrderList";
import { OrderItemList } from "@/src/features/payment/components/OrderItemList";
import { PurchaseSummary } from "@/src/features/payment/components/PurchaseSummary";

export default function Page() {
    return (
        <div>
            <h1>주문서</h1>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <ShippingInfoForm />
                    {/* <OrderList orders={[]} /> */}
                    <OrderItemList
                        orderItems={[
                            {
                                title: "주문 상품 1",
                                price: 10000,
                                quantity: 1,
                                image: "",
                            },
                            {
                                title: "주문 상품 2",
                                price: 20000,
                                quantity: 2,
                                image: "",
                            },
                        ]}
                    />
                    <PurchaseSummary />
                    {/* <SelectPaymentMethod /> */}
                </div>
                <div>
                    <PaymentForm />
                </div>
            </div>
        </div>
    );
}
