import { useQuery } from "@tanstack/react-query";
import type { GetCartResponse } from "@/app/cart/page";
import { type CustomError, fetchClient } from "@/src/shared/fetcher";

async function fetchCart(userId: number): Promise<GetCartResponse> {
    const fetch = fetchClient();

    try {
        const res = await fetch<GetCartResponse>(`/cart?userId=${userId}`);

        if (!res.data) {
            throw new Error();
        }

        return res.data;
    } catch (e) {
        const err = e as CustomError;
        throw new Error(`${err.code} - ${err.message}`);
    }
}

export function useCart(userId: number) {
    return useQuery<GetCartResponse>({
        queryKey: ["cart", userId],
        queryFn: () => fetchCart(userId),
    });
}
