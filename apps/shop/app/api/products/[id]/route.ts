import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { MOCK_PRODUCTS } from "../mock/products";

interface ProductResponse {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    detailImage: string;
    intensity: {
        id: number;
        label: string;
    };
    cupSize: {
        id: number;
        label: string;
    };
    status: {
        code: string;
        label: string;
    };
    isSoldOut: boolean;
    createdAt: string;
    updatedAt: string;
}

// Intensity 매핑 (기존 INTENSITY_MAP 역방향)
const INTENSITY_LABELS: Record<string, { id: number; label: string }> = {
    Light: { id: 1, label: "연함" },
    Medium: { id: 2, label: "중간" },
    Strong: { id: 3, label: "진함" },
};

// Cup Size 매핑 (기존 CUP_SIZE_MAP 역방향)
const CUP_SIZE_LABELS: Record<string, { id: number; label: string }> = {
    Small: { id: 5, label: "SHORT" },
    Medium: { id: 7, label: "GRANDE" },
    Large: { id: 8, label: "VENTI" },
};

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params;
        const productId = Number.parseInt(resolvedParams.id);

        // Mock 데이터에서 상품 찾기
        const mockProduct = MOCK_PRODUCTS.find(p => p.id === productId);

        if (!mockProduct) {
            return NextResponse.json(
                {
                    data: null,
                    error: {
                        code: "PRODUCT_NOT_FOUND",
                        message: "상품을 찾을 수 없습니다.",
                    },
                },
                { status: 404 },
            );
        }

        // Swagger 스펙에 맞게 데이터 변환
        const productResponse: ProductResponse = {
            id: mockProduct.id,
            name: mockProduct.name,
            price: mockProduct.price,
            quantity: mockProduct.quantity,
            thumbnail: mockProduct.thumbnail,
            detailImage: mockProduct.detailImage,
            intensity: INTENSITY_LABELS[mockProduct.intensity] || { id: 2, label: "중간" },
            cupSize: CUP_SIZE_LABELS[mockProduct.cupSize] || { id: 7, label: "GRANDE" },
            status: {
                code: mockProduct.isSoldOut ? "STOPPED" : "ON_SALE",
                label: mockProduct.isSoldOut ? "판매중단" : "판매중",
            },
            isSoldOut: mockProduct.isSoldOut,
            createdAt: new Date("2024-01-01").toISOString(),
            updatedAt: new Date().toISOString(),
        };

        return NextResponse.json({
            data: productResponse,
            error: null,
        });
    } catch (error) {
        console.error("Product API Error:", error);
        return NextResponse.json(
            {
                data: null,
                error: {
                    code: "INTERNAL_ERROR",
                    message: "서버 오류가 발생했습니다.",
                },
            },
            { status: 500 },
        );
    }
}
