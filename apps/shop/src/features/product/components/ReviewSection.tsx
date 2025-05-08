import { ReviewCard } from "./ReviewCard";

// ReviewSection 컴포넌트
export const ReviewSection = () => {
    return (
        <section className="mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
                <div className="flex gap-1 my-auto">
                    <h2 className="text-2xl font-bold text-black">모든 리뷰</h2>
                    <span className="my-auto text-base leading-none text-black">
                        (451)
                    </span>
                </div>
                <div className="flex gap-2.5 items-center">
                    <button
                        type="button"
                        className="flex overflow-hidden justify-center items-center px-3 h-12 bg-zinc-100 min-h-12 rounded-[62px] w-12"
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab462c8b4146379e69dbbe7df32c0acfb2b5c5b"
                            className="object-contain w-6 aspect-square"
                            alt="필터"
                        />
                    </button>
                    <button
                        type="button"
                        className="flex overflow-hidden gap-5 justify-between items-center px-5 h-12 text-base font-medium text-black whitespace-nowrap bg-zinc-100 min-h-12 rounded-[62px] w-[120px]"
                    >
                        <span className="my-auto">최신순</span>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39bf37b5776bcb17763e8a8f1fb61bd1cae26c59"
                            className="object-contain w-4 aspect-square"
                            alt="정렬"
                        />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6 max-md:grid-cols-1">
                <ReviewCard
                    author="김커피"
                    rating={4.5}
                    content="와 대박! 이 원두 향 미쳤닼ㅋㅋㅋ 4만원치곤 가성비 찐 ㄱㅊ 👍 진짜 아침마다 얘로만 마심. 산미 싫어하는 사람들은 걍 패스하셈"
                    date="2023년 8월 14일"
                />
                <ReviewCard
                    author="맛없으면환불"
                    rating={2}
                    content="ㅋㅋㅋ 이게 뭔 맛임? 신맛만 드릅게 강함ㅜㅜ 배송은 빠른데 원두가 너무 실망... 돈 버렸다는 생각밖에 안 듦. 다신 안 살 듯"
                    date="2023년 8월 15일"
                />
                <ReviewCard
                    author="카페인중독자"
                    rating={3.5}
                    content="그냥 무난무난~ 딱히 특별하지는 않음 근데 가격대비는 괜찮은듯? 아 참고로 핸드드립으로 내려 마셔야 맛있음! 머신으로 하면 맛 버려요 진짜루"
                    date="2023년 8월 16일"
                />
                <ReviewCard
                    author="퇴근후한잔"
                    rating={1}
                    content="완전 노답ㅡㅡ 이거 뭐임? 쓰레기? 쓴맛만 가득하고 향도 별로... 비싼돈 주고 사면 진짜 후회함ㅠㅠ 애들 다 낚였네 ㅇㅈ? 그냥 스벅이나 가자"
                    date="2023년 8월 17일"
                />
                <ReviewCard
                    author="원두덕"
                    rating={4}
                    content="이 브라질 원두 찐임!!! 고소한 맛 쩔고 에스프레소로 내리면 크레마도 겁나 좋음👍 근데 가끔 원두 상태가 일정하지 않은 듯? 그것만 빼면 ㄹㅇ 추천!"
                    date="2023년 8월 18일"
                />
                <ReviewCard
                    author="아무거나다마심"
                    rating={4.5}
                    content="와 겁나 맛있어서 놀람ㄷㄷ 처음엔 비싸서 망설였는데 완전 득템! 향도 개쩌는데 특히 넘 달지 않아서 좋음. 재구매할지 고심중"
                    date="2023년 8월 19일"
                />
            </div>

            <div className="flex justify-end mt-3.5">
                <button
                    type="button"
                    className="overflow-hidden gap-3 px-11 py-0 text-base font-medium text-black border border-solid border-black border-opacity-10 h-12 min-h-12 rounded-[62px] w-[230px] max-md:px-5"
                >
                    더보기
                </button>
            </div>
        </section>
    );
};
