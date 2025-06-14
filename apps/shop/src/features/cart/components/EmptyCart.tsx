import Link from "next/link";

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">장바구니가 비어있습니다</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                아직 상품을 담지 않으셨네요.
                <br />
                원하는 상품을 장바구니에 담아보세요.
            </p>
            <Link
                href="/main"
                className="inline-flex items-center px-6 py-3 bg-[#257a57] text-white font-semibold rounded-lg hover:bg-[#1f6b4a] transition-colors"
            >
                쇼핑 계속하기
            </Link>
        </div>
    );
}
