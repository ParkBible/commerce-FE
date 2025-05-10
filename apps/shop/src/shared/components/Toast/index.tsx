"use client";

import { useState, useCallback, useRef } from "react";

export function Toast() {
    // 토스트 상태 관리
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef<number | null>(null);

    // 토스트 숨기기
    const hideToast = useCallback(() => {
        setIsVisible(false);
    }, []);

    // 토스트 메시지 생성
    const getToastMessage = useCallback((itemName: string): string => {
        return `${itemName} 상품이 장바구니에 추가되었습니다.`;
    }, []);

    // 토스트 표시 함수
    const toast = useCallback(
        ({ title, duration = 3000 }: { title: string; duration?: number }) => {
            // 기존 타이머가 있다면 제거
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            const toastMessage = getToastMessage(title);
            setMessage(toastMessage);
            setIsVisible(true);

            // 지정된 시간 후 토스트 숨기기
            if (duration > 0) {
                timeoutRef.current = window.setTimeout(() => {
                    setIsVisible(false);
                }, duration);
            }
        },
        [getToastMessage],
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
            </div>
        ),
    };
}
