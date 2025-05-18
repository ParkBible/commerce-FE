import { fetchData } from "@/src/shared/utils/api";
import { getMockProducts } from "@/src/features/main/mocks/productMock";
import type { ProductType } from "@/src/features/main/types/product";

/**
 * 제품 목록을 가져오는 서버 컴포넌트용 API 함수
 */
export async function getProducts(): Promise<ProductType[]> {
    return fetchData({
        endpoint: "/api/products", // 제품 목록 조회 API 주소
        defaultValue: [], // 실패 시 반환할 기본값
        mockDataFn: getMockProducts, // 개발기 환경에서 API 실패 시 호출할 목 데이터 생성 함수 (발표 끝나고 백엔드 서버가 폭파되면 이걸 대신 띄워야 함)
    });
}
