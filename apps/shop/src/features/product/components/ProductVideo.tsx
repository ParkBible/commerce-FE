export function ProductVideo() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-[1120px] mx-auto">
                <div className="space-y-4 mb-8">
                    <h2 className="text-[28px] font-bold text-black">
                        라테 러버들의 필수템! 에어로치노
                    </h2>
                    <p className="text-base text-[#171719]">
                        한번의 터치로 완성되는 최상의 라테. 입문자도 쉽게 따라할
                        수 있는 모드별 대표 레시피를 확인하고
                        <br />
                        에어로치노로 홈 카페를 완전 정복해보세요.
                    </p>
                </div>

                <div className="relative w-full h-[460px] rounded-xl overflow-hidden">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6efa1b8d524b91891b772502f42519490e0b876"
                        alt="에어로치노 사용 영상 썸네일"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <button
                            type="button"
                            className="w-[120px] h-[120px] rounded-full border-2 border-white flex items-center justify-center"
                            aria-label="비디오 재생"
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="M15 10L30 20L15 30V10Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
