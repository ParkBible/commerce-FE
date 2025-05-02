import ky from "ky";

export type CustomError = Error & {
    code?: string;
    details?: unknown;
};

export const api = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    throwHttpErrors: false,
});

export async function fetcher<T>(request: Promise<Response>): Promise<T> {
    const res = await request;
    const json = await res.json();

    if (!res.ok || !json.success) {
        const baseError = new Error(json.error?.message || "알 수 없는 오류");

        const error: CustomError = Object.assign(baseError, {
            code: json.error?.code,
            details: json.error?.details,
        });

        throw error;
    }

    return json.data as T;
}
