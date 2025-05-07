import ky from "ky";

export type CustomError = Error & {
    code: string;
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
        const baseError = new Error();
        const error: CustomError = Object.assign(baseError, {
            code: json.error?.code,
        });

        throw error;
    }

    return json.data as T;
}
