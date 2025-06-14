import type { ReviewData } from "@/features/review/types/type";

export const mockReviewData: ReviewData = {
    content: [
        {
            reviewId: 1,
            rating: 5,
            content: "정말 맛있어요! 향이 좋고 산미가 적당해서 매일 마시고 있습니다. 포장도 깔끔하고 배송도 빨라서 만족스러워요.",
            createdAt: "2024-12-15T10:30:00",
            adminReply: {
                content: "좋은 리뷰 감사합니다! 앞으로도 좋은 제품으로 보답하겠습니다.",
                createdAt: "2024-12-15T14:20:00",
            },
            productId: 101,
            productName: "에티오피아 예가체프 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user123",
                nickname: "커피러버",
            },
        },
        {
            reviewId: 2,
            rating: 4,
            content: "맛은 좋은데 가격이 조금 비싼 것 같아요. 그래도 품질은 확실히 좋습니다.",
            createdAt: "2024-12-14T16:45:00",
            adminReply: null,
            productId: 102,
            productName: "콜롬비아 수프리모 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user456",
                nickname: "원두매니아",
            },
        },
        {
            reviewId: 3,
            rating: 3,
            content: "보통이에요. 특별히 좋지도 나쁘지도 않습니다. 평범한 맛이라고 생각해요.",
            createdAt: "2024-12-13T09:20:00",
            adminReply: {
                content: "소중한 의견 감사합니다. 더 나은 제품으로 개선하도록 노력하겠습니다.",
                createdAt: "2024-12-13T18:00:00",
            },
            productId: 103,
            productName: "브라질 산토스 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user789",
                nickname: "일반고객",
            },
        },
        {
            reviewId: 4,
            rating: 5,
            content: "완벽합니다! 로스팅 정도도 딱 좋고 원두의 신선함이 느껴져요. 재주문 확정!",
            createdAt: "2024-12-12T14:15:00",
            adminReply: null,
            productId: 104,
            productName: "과테말라 안티구아 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user101",
                nickname: "바리스타김",
            },
        },
        {
            reviewId: 5,
            rating: 2,
            content: "원두가 너무 어둡게 로스팅되어서 쓴맛이 강해요. 개인 취향일 수도 있지만 저에게는 맞지 않네요.",
            createdAt: "2024-12-11T11:30:00",
            adminReply: {
                content: "죄송합니다. 로스팅 정도에 대한 피드백 감사합니다. 다양한 로스팅 옵션을 제공하도록 검토하겠습니다.",
                createdAt: "2024-12-11T16:45:00",
            },
            productId: 105,
            productName: "자메이카 블루마운틴 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user202",
                nickname: "커피초보",
            },
        },
        {
            reviewId: 6,
            rating: 4,
            content: "향은 정말 좋아요. 다만 원두 크기가 일정하지 않아서 추출할 때 조금 불편했습니다.",
            createdAt: "2024-12-10T13:25:00",
            adminReply: null,
            productId: 106,
            productName: "케냐 AA 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user303",
                nickname: "정밀추출러",
            },
        },
        {
            reviewId: 7,
            rating: 5,
            content: "최고의 원두입니다! 플레이버 노트 그대로 베리류의 산미와 꽃향기가 정말 좋아요.",
            createdAt: "2024-12-09T15:40:00",
            adminReply: {
                content: "정확한 플레이버 노트 평가 감사합니다! 계속 좋은 원두 선별에 힘쓰겠습니다.",
                createdAt: "2024-12-09T19:30:00",
            },
            productId: 107,
            productName: "에티오피아 시다마 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user404",
                nickname: "플레이버헌터",
            },
        },
        {
            reviewId: 8,
            rating: 3,
            content: "배송은 빨랐는데 포장이 조금 아쉬워요. 원두는 괜찮습니다.",
            createdAt: "2024-12-08T08:50:00",
            adminReply: null,
            productId: 108,
            productName: "하와이 코나 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user505",
                nickname: "포장꼼꼼이",
            },
        },
        {
            reviewId: 9,
            rating: 4,
            content: "친구 추천으로 샀는데 정말 괜찮네요. 특히 에스프레소로 내렸을 때 크레마가 풍부해요.",
            createdAt: "2024-12-07T12:10:00",
            adminReply: {
                content: "친구분의 추천과 좋은 리뷰 감사합니다! 에스프레소 추출에 적합한 원두라서 기쁩니다.",
                createdAt: "2024-12-07T17:20:00",
            },
            productId: 109,
            productName: "이탈리안 에스프레소 블렌드",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user606",
                nickname: "에스프레소사랑",
            },
        },
        {
            reviewId: 10,
            rating: 1,
            content: "원두가 너무 오래된 것 같아요. 향도 거의 없고 맛도 밋밋해요. 실망했습니다.",
            createdAt: "2024-12-06T17:30:00",
            adminReply: {
                content: "죄송합니다. 즉시 품질 관리 점검을 실시하고, 새로운 제품으로 교환해드리겠습니다. 고객센터로 연락 부탁드립니다.",
                createdAt: "2024-12-06T20:00:00",
            },
            productId: 110,
            productName: "베트남 로부스타 원두",
            productThumbnail: "/images/coffee.jpg",
            user: {
                userId: "user707",
                nickname: "품질중시",
            },
        },
    ],
    page: 0,
    size: 10,
    totalPages: 5,
    totalElements: 50,
};

export function getMockReviews(): ReviewData {
    return mockReviewData;
}
