import OrderCheckList from "@/src/features/order/components/OrderCheckList";
import OrderCheckoutItem from "@/src/features/order/components/OrderCheckoutItem";
import SelectPaymentMethod from "@/src/features/order/components/SelectPaymentMethod";
import SelectShippingInfo from "@/src/features/order/components/SelectShippingInfo";

export default function OrderCheckout() {
    return (
        <div className="py-16 px-40">
            <h2 className="text-2xl font-bold mb-10">주문서</h2>
            <div className="grid grid-cols-2">
                <div>
                    <section className="mb-10">
                        <h4 className="text-lg font-bold mb-4">배송지선택</h4>
                        <SelectShippingInfo />
                    </section>

                    <section className="mb-10">
                        <h4 className="text-lg font-bold">주문 상품</h4>
                        <div className="p-4 rounded-2xl border border-gray-200">
                            <OrderCheckList
                                items={[
                                    {
                                        id: 1,
                                        name: "상품명",
                                        price: 10000,
                                        quantity: 1,
                                        image: "",
                                    },
                                    {
                                        id: 2,
                                        name: "상품명",
                                        price: 10000,
                                        quantity: 1,
                                        image: "",
                                    },
                                ]}
                            />
                        </div>
                    </section>
                    <section>
                        <h4 className="text-lg font-bold">결제 수단</h4>
                        <SelectPaymentMethod />
                    </section>
                </div>
                <div>
                    <section>
                        <h2>구매 금액</h2>
                    </section>
                </div>
            </div>
        </div>
    );
}
