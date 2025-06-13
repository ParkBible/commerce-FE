// 공통 ReviewType을 shared/entities에서 가져옴
export type { ReviewType } from "@/src/shared/entities/review/types";

// 백엔드 Swagger 스펙에 맞는 ProductType
export interface ProductType {
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

export interface ProductDetails {
    detailText: string;
}

export interface RecommendedProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    stockQuantity: number;
}

export interface ProductCategoryType {
    id: number;
    label: string;
}
