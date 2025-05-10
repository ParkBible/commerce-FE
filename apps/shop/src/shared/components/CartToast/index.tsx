"use client";

import { useState, useCallback, useRef } from "react";
import { isKorean, getKoreanSubjectParticle } from "../../utils/koreanUtils";

type CartToastProps = {
    onGoToCart?: () => void;
};

export function CartToast({ onGoToCart }: CartToastProps) {
    // 토스트 상태 관리
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef<number | null>(null);

    // 토스트 숨기기
    const hideToast = useCallback(() => {
        setIsVisible(false);
    }, []);

    // 장바구니 토스트 메시지 생성
    const getCartToastMessage = useCallback((productName: string): string => {
        if (isKorean(productName)) {
            return `${productName}${getKoreanSubjectParticle(productName)} 장바구니에 추가되었습니다.`;
        }
        return `${productName} 상품이 장바구니에 추가되었습니다.`;
    }, []);

    // 토스트 표시 함수
    const toast = useCallback(
        ({ title, action, duration = 3000 }: { title: string; action: string; duration?: number }) => {
            // 기존 타이머가 있다면 제거
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            let toastMessage = "";

            // 액션에 따른 메시지 생성
            if (action === "add-to-cart") {
                toastMessage = getCartToastMessage(title);
            } else {
                toastMessage = title;
            }

            setMessage(toastMessage);
            setIsVisible(true);

            // 지정된 시간 후 토스트 숨기기
            if (duration > 0) {
                timeoutRef.current = window.setTimeout(() => {
                    setIsVisible(false);
                }, duration);
            }
        },
        [getCartToastMessage],
    );

    return {
        toast,
        ToastUI: (
            <div
                className={`fixed bottom-4 right-4 bg-[#257a57] text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <p className="font-semibold">{message}</p>
                <div className="flex gap-2 mt-2">
                    <button type="button" className="text-sm underline" onClick={hideToast}>
                        닫기
                    </button>
                    {onGoToCart && (
                        <button type="button" className="text-sm font-bold underline" onClick={onGoToCart}>
                            장바구니로 이동
                        </button>
                    )}
                </div>
            </div>
        ),
    };
}

// 이전 버전 호환성을 위한 export
export { CartToast as Toast };
