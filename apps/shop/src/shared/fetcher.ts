type ApiResponse<T> = {
    success: boolean;
    data: T | null;
    error: {
        code: string;
    } | null;
    message?: string;
};

export type CustomError = Error & {
    code?: string;
    details?: unknown;
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
        } catch (e) {
            throw new Error("JSON 파싱에 실패했습니다.", {
                cause: e,
            });
        }

        if (!res.ok || !json.success) {
            const baseError = new Error();
            const error: CustomError = Object.assign(baseError, {
                code: json.error?.code,
            });

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
