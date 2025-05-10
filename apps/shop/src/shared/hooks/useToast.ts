import { useState, useCallback, useRef } from "react";

/**
 * 토스트 메시지 표시를 위한 커스텀 훅
 *
 * @returns {Object} 토스트 상태와 관련 함수들을 포함하는 객체
 */
export function useToast() {
    // 토스트 상태 관리
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef<number | null>(null);

    /**
     * 토스트 메시지를 숨기는 함수
     */
    const hideToast = useCallback(() => {
        setIsVisible(false);
    }, []);

    /**
     * 토스트 메시지를 표시하는 함수
     *
     * @param {string} message - 표시할 메시지
     * @param {number} duration - 토스트가 표시되는 시간(밀리초), 기본값은 3000ms
     */
    const showToast = useCallback((message: string, duration = 3000) => {
        // 기존 타이머가 있다면 제거
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setMessage(message);
        setIsVisible(true);

        // 지정된 시간 후 토스트 숨기기
        if (duration > 0) {
            timeoutRef.current = window.setTimeout(() => {
                setIsVisible(false);
            }, duration);
        }
    }, []);

    /**
     * 장바구니 토스트 메시지를 표시하는 함수 (이전 버전 호환용)
     */
    const showAddToCartToast = useCallback(
        (productName: string, duration = 3000) => {
            const toastMessage = `${productName} 상품이 장바구니에 추가되었습니다.`;
            showToast(toastMessage, duration);
        },
        [showToast],
    );

    return {
        isVisible,
        message,
        showToast,
        showAddToCartToast, // 이전 버전 호환성을 위해 유지
        hideToast,
    };
}
