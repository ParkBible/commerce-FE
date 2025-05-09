import { useState, useCallback, useRef } from "react";
import { getCartToastMessage } from "../utils/koreanUtils";

/**
 * 장바구니 토스트 메시지 표시를 위한 커스텀 훅
 *
 * @returns {Object} 장바구니 토스트 상태와 관련 함수들을 포함하는 객체
 */
export function useCartToast() {
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
     * 장바구니에 상품 추가 시 토스트 메시지를 표시하는 함수
     *
     * @param {string} productName - 장바구니에 추가된 상품명
     * @param {number} duration - 토스트가 표시되는 시간(밀리초), 기본값은 3000ms
     */
    // 한글 조사를 고려한 메시지 생성
    const showAddToCartToast = useCallback((productName: string, duration = 3000) => {
        // 기존 타이머가 있다면 제거
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        const toastMessage = getCartToastMessage(productName);
        setMessage(toastMessage);
        setIsVisible(true);

        // 지정된 시간 후 토스트 숨기기
        if (duration > 0) {
            timeoutRef.current = window.setTimeout(() => {
                setIsVisible(false);
            }, duration);
        }
    }, []);

    return {
        isVisible,
        message,
        showAddToCartToast,
        hideToast,
    };
}
