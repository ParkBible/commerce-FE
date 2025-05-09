interface CartToastProps {
    isVisible: boolean;
    message: string;
    onClose: () => void;
    onGoToCart: () => void;
}

export function CartToast({ isVisible, message, onClose, onGoToCart }: CartToastProps) {
    return (
        <div
            className={`fixed bottom-4 right-4 bg-[#257a57] text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <p className="font-semibold">{message}</p>
            <div className="flex gap-2 mt-2">
                <button type="button" className="text-sm underline" onClick={onClose}>
                    닫기
                </button>
                <button type="button" className="text-sm font-bold underline" onClick={onGoToCart}>
                    장바구니로 이동
                </button>
            </div>
        </div>
    );
}
