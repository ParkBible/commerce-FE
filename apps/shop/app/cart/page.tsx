import CartPageLayout from "@/src/features/cart/components/CartPageLayout";
import Item from "@/src/features/cart/components/Item";
import Summary from "@/src/features/cart/components/Summary";

export default function Page() {
    const cartItems = [
        {
            id: 1,
            title: "예시 상품",
            price: 10000,
            quantity: 1,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        },
        {
            id: 2,
            title: "예시 상품 2",
            price: 20000,
            quantity: 2,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        },
    ];
    return (
        <CartPageLayout>
            {cartItems.map(item => (
                <Item
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                />
            ))}
            <Summary subtotalPrice={0} shippingFee={0} totalPrice={0} />
        </CartPageLayout>
    );
}
