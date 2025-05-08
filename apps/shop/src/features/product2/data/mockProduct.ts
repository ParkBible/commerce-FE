import type { ProductType, ReviewType, RecommendedProductType } from "../types";

export const mockProduct: ProductType = {
    id: 1,
    title: "스페셜 리저브 하와이 코나",
    description:
        "이국적인 열대 과일향과 고소한 견과류향이 어우러진 싱글 오리진 커피",
    price: 35000,
    pricePerUnit: "1 슬리브 (10 캡슐) / 캡슐 1개당 가격 : ₩ 3,500",
    images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e6efa1b8d524b91891b772502f42519490e0b876",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
    ],
    tags: ["버츄오", "시즌 한정", "에스프레소"],
    badges: [
        {
            text: "더블 에스프레소",
            bgColor: "rgba(55, 56, 60, 0.16)",
        },
        {
            text: "신제품",
            bgColor: "#ffc000",
        },
        {
            text: "시즌 한정",
            bgColor: "#7030a0",
            textColor: "#ffffff",
        },
    ],
    coffeeSize: "80ml",
    aromaFeatures: ["과일향\n이그조틱", "견과류향\n트로피컬 ", "곡물향"],
    bodyLevel: 3,
    bitterLevel: 2,
    acidLevel: 2,
    roastLevel: 2,
    quantity: 10,
    limitDescription:
        "*스페셜 리저브 하와이 코나는 한정 수량 준비되어 버츄오/오리지널 각각 1계정 당 최대 6개 슬리브 구매 가능합니다.",
    additionalDescription: "*재활용 알류미늄 85% 포함된 캡슐 사용",
};

export const mockReviews: ReviewType[] = [
    {
        id: 1,
        userName: "커피러버",
        rating: 4,
        date: "2023-01-24",
        content:
            "향이 정말 좋고 산미가 적절해요. 아침에 마시기 좋은 커피입니다.",
    },
    {
        id: 2,
        userName: "카페인중독자",
        rating: 5,
        date: "2023-02-15",
        content:
            "시즌 한정이라 아쉽지만 매번 구매하는 제품입니다. 열대과일향이 특히 좋아요!",
    },
    {
        id: 3,
        userName: "홈카페장인",
        rating: 4,
        date: "2023-03-02",
        content:
            "하와이 코나는 처음 마셔봤는데 기대 이상이네요. 부드러운 맛이 일품입니다.",
        images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        ],
    },
    {
        id: 4,
        userName: "커피매니아",
        rating: 3,
        date: "2023-03-15",
        content:
            "품질은 좋지만 가격이 조금 비싼 편입니다. 특별한 날에 마시기 좋아요.",
    },
];

export const mockReviewStats = {
    totalRating: 4.8,
    ratingCounts: [100, 11, 3, 8, 1], // 5점, 4점, 3점, 2점, 1점 순서
};

export const mockRecommendedProducts: RecommendedProductType[] = [
    {
        id: 1,
        title: "에어로치노4",
        description:
            "최상의 밀크 레시피로 당신의 커피 경험을 업그레이드 해보세요",
        price: 149000,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        inStock: true,
    },
    {
        id: 2,
        title: "버츄오 머그 컵 세트 스몰",
        description: "넉넉한 용량의 버츄오 머그",
        price: 39000,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        inStock: true,
    },
    {
        id: 3,
        title: "바리스타 카푸치노 컵 세트, 미디엄",
        description: "당신의 커피 경험을 업그레이드 시켜줄 바리스타 컬렉션",
        price: 32000,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
        inStock: false,
    },
];
