import ky, { type Options } from "ky";

type ApiResponse<T> = {
    data: T | null;
    error: CustomError | null;
};

export type CustomError = Error & {
    code: string;
    message: string;
};

export const api = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    throwHttpErrors: false,
});

export async function fetcher<T>(path: string, options?: Options): Promise<T> {
    const res = await api(path, {
        ...options,
        method: options?.method ?? "GET",
    });

    let json: ApiResponse<T>;

    try {
        json = await res.json();
    } catch {
        throw new Error("JSON 파싱에 실패했습니다.");
    }

    if (!res.ok || json.error) {
        const baseError = new Error();
        const error: CustomError = Object.assign(baseError, {
            code: json?.error?.code || "UNKNOWN_ERROR",
            message: json?.error?.message || "API 요청에 실패했습니다.",
        });

        throw error;
    }

    return json.data as T;
}
