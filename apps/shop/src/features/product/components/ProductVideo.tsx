export function ProductVideo() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4 mb-8">
                    <h2 className="text-[1.75rem] font-bold text-black">커피 애호가들의 꿈, 스페셜 리저브 하와이 코나</h2>
                    <p className="text-base text-[#171719]">
                        이국적인 열대 과일향과 고소한 견과류향이 완벽하게 어우러진 프리미엄 싱글 오리진 커피.
                        <br />
                        하와이 화산 비옥한 토양에서 자란 최상급 코나 커피로 특별한 홈 카페 경험을 선사합니다.
                    </p>
                </div>

                <div className="relative w-full h-[28rem] rounded-xl overflow-hidden">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6efa1b8d524b91891b772502f42519490e0b876"
                        alt="에어로치노 이미지"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
