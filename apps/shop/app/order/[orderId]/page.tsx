import Image from "next/image";

export default async function OrderDetailPage({ params }: { params: { orderId: string } }) {
    const orderStatus = "배송 완료";
    const resolvedParams = await params;

    return (
        <div className="w-full min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16">
                {/* 주문 상세 헤더 */}
                <div className="flex items-center gap-2 mb-10">
                    <button type="button" className="focus:outline-none" aria-label="뒤로 가기">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>뒤로 가기 화살표</title>
                            <path d="M20 24L12 16L20 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-bold">주문 상세</h1>
                </div>

                {/* 주문 정보 */}
                <div className="mb-10">
                    <p className="text-[#2e2f33] opacity-90 text-base">25.05.11</p>
                    <h2 className="text-xl font-bold my-2">주문 번호 {resolvedParams.orderId}</h2>
                    <p className="text-base font-bold text-[#257a57]">{orderStatus}</p>
                </div>

                {/* 배송지 정보 */}
                <div className="mb-10">
                    {/* <h2 className="text-xl font-bold mb-4">배송지</h2> */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">배송지</h3>
                        <div className="text-sm">
                            <div className="flex items-center gap-1">
                                <span>김팔공</span>
                                <span className="border-l border-gray-400 opacity-20 h-2 mx-1" />
                                <span>강원도 춘천시 영서로 105</span>
                            </div>
                            <p className="mt-1">010-1234-5678</p>
                            <p className="mt-1 text-[#2e2f33] opacity-90">지옥문 앞에 놔주세요</p>
                        </div>
                    </div>
                </div>

                {/* 주문 상품 */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold mb-4">주문 상품</h2>
                    <div className="border border-gray-300 border-opacity-20 rounded-xl p-4">
                        {/* 상품 1 */}
                        <div className="py-6 border-b border-gray-300 border-opacity-20">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 relative rounded overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069"
                                        alt="스페셜 리저브 하와이 코나"
                                        fill
                                        priority
                                        sizes="5rem"
                                        style={{ objectFit: "cover" }}
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold mb-2">스페셜 리저브 하와이 코나</h3>
                                    <div className="flex items-center">
                                        <span className="text-[#257a57] font-bold">₩</span>
                                        <span className="text-[#257a57] font-bold ml-1">35,000</span>
                                        <span className="text-[#257a57] ml-2 text-xs">(10 x ₩3,500)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 상품 2 */}
                        <div className="py-6 border-b border-gray-300 border-opacity-20">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 relative rounded overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070"
                                        alt="액티브"
                                        fill
                                        sizes="5rem"
                                        style={{ objectFit: "cover" }}
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold mb-2">액티브</h3>
                                    <div className="flex items-center">
                                        <span className="text-[#257a57] font-bold">₩</span>
                                        <span className="text-[#257a57] font-bold ml-1">11,000</span>
                                        <span className="text-[#257a57] ml-2 text-xs">(10x₩11,000)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 상품 3 */}
                        <div className="py-6">
                            <div className="flex gap-4">
                                <div className="w-20 h-20 relative rounded overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1887"
                                        alt="스위트 바닐라향* 디카페니토"
                                        fill
                                        sizes="5rem"
                                        style={{ objectFit: "cover" }}
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold mb-2">스위트 바닐라향* 디카페니토</h3>
                                    <div className="flex items-center">
                                        <span className="text-[#257a57] font-bold">₩</span>
                                        <span className="text-[#257a57] font-bold ml-1">11,500</span>
                                        <span className="text-[#257a57] ml-2 text-xs">(10x₩11,500)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 버튼 영역 */}
                    <div className="flex gap-4 mt-6">
                        <button type="button" className="flex-1 py-3 border border-black rounded-lg font-semibold">
                            배송 조회
                        </button>
                        <button type="button" className="flex-1 py-3 bg-[#257a57] text-white rounded-lg font-semibold">
                            리뷰 작성
                        </button>
                    </div>
                </div>

                {/* 결제 정보 */}
                <div>
                    <h2 className="text-xl font-bold mb-4">결제 정보</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="text-[#2e2f33] opacity-90">스페셜 리저브 하와이 코나(x10)</p>
                            <p>₩ 35,000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#2e2f33] opacity-90">액티브(x10)</p>
                            <p>₩ 11,000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#2e2f33] opacity-90">스위트 바닐라향* 디카페니토(x10)</p>
                            <p>₩ 11,500</p>
                        </div>
                        <div className="flex justify-between">
                            <p>할인 금액</p>
                            <p className="text-[#257a57]">-0원</p>
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-400 opacity-20" />
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">Total</h3>
                        <p className="text-xl font-bold">₩ 57,500</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
