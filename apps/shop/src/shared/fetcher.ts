type ApiResponse<T> = {
    data: T | null;
    error: CustomError | null;
};

export type CustomError = Error & {
    code: string;
    message: string;
};

const createFetcher = (url: string, getHeaders?: () => HeadersInit) => {
    return async function fetcher<T>(
        path: string,
        options: RequestInit = {},
    ): Promise<ApiResponse<T>> {
        const headers = getHeaders?.() ?? {};
        const res = await fetch(`${url}${path}`, {
            ...options,
            headers: {
                ...headers,
                "Content-Type": "application/json",
            },
        });

        let json: ApiResponse<T>;

        try {
            json = await res.json();
        } catch {
            throw new Error("JSON 파싱에 실패했습니다.");
        }

        if (!res.ok || json.error) {
            const error = new Error(
                json.error?.message || "API 요청에 실패했습니다.",
            ) as CustomError;
            error.code = json.error?.code || "UNKNOWN_ERROR";

            throw error;
        }

        return json;
    };
};

export const fetchClient = () => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL이 설정되지 않았습니다.");
    }

    return createFetcher(process.env.NEXT_PUBLIC_API_URL);
};

export const fetchServer = () => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL이 설정되지 않았습니다.");
    }

    return createFetcher(process.env.NEXT_PUBLIC_API_URL);
};
