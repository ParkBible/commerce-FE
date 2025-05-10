export function ProductVideo() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4 mb-8">
                    <h2 className="text-[1.75rem] font-bold text-black">라테 러버들의 필수템! 에어로치노</h2>
                    <p className="text-base text-[#171719]">
                        한번의 터치로 완성되는 최상의 라테. 입문자도 쉽게 따라할 수 있는 모드별 대표 레시피를 확인하고
                        <br />
                        에어로치노로 홈 카페를 완전 정복해보세요.
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
