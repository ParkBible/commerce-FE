"use client";

import CartProduct from "@/src/features/cart/components/CartProduct";
import CartSectionLayout from "@/src/features/cart/components/CartSectionLayout";
import Summary from "@/src/features/cart/components/Summary";
import ErrorComponent from "@/src/shared/components/shared/ErrorComponent";
import { useCart } from "@/src/features/cart/hooks/useCart";
import Loading from "@/src/shared/components/shared/Loading";

export interface CartItem {
    cartItemId: number;
    productId: number;
    name: string;
    price: number;
    quantity: number;
    stockQuantity: number;
    thumbnail: string;
    isAvailable: boolean;
}

export interface GetCartResponse {
    items: CartItem[];
    totalPrice: number;
    deliveryPrice: number;
}

function CartPageClient() {
    const userId = 1;
    const { data, isLoading, isError, error } = useCart(userId);

    const items = data?.items ?? [];

    return (
        <>
            <CartSectionLayout>
                {isLoading ? (
                    <Loading />
                ) : isError ? (
                    <ErrorComponent code={"500"} message={error?.message || "장바구니 불러오기 실패"} />
                ) : (
                    <CartProduct cartItems={items} />
                )}
            </CartSectionLayout>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-3 bg-[#70737c]/[0.08]" />
            <CartSectionLayout>
                <Summary cartItems={items} shippingFee={0} />
            </CartSectionLayout>
        </>
    );
}

export default function Page() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-start items-start max-w-screen-xl mx-auto px-8 lg:px-14 my-8">
                <h1 className="text-xl font-bold text-left">장바구니</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-2 lg:px-8">
                <CartPageClient />
            </div>
        </>
    );
}
