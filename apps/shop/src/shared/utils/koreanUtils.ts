/**
 * 한글 여부 확인 함수
 */
export function isKorean(str: string): boolean {
    if (!str || str.length === 0) return false;

    // 한글 유니코드 범위 체크 (0xAC00 ~ 0xD7A3)
    const lastChar = str.charCodeAt(str.length - 1);
    return lastChar >= 0xac00 && lastChar <= 0xd7a3;
}

/**
 * 한글 조사 '이/가' 판단 함수
 * - 한글 유니코드 구성: (초성 * 21 * 28) + (중성 * 28) + 종성 + 0xAC00
 * - 0xAC00: 유니코드 테이블에서 한글 글자가 시작하는 번호 ('가')
 * - 종성 인덱스가 0이면 받침 없음('가' 사용), 1~27이면 받침 있음('이' 사용)
 */
export function getKoreanSubjectParticle(str: string): string {
    if (!isKorean(str)) return "";

    const charCode = str.charCodeAt(str.length - 1);
    const hasFinalConsonant = (charCode - 0xac00) % 28 > 0;
    return hasFinalConsonant ? "이" : "가";
}

/**
 * 한글 조사 '을/를' 판단 함수
 */
export function getKoreanObjectParticle(str: string): string {
    if (!isKorean(str)) return "";

    const charCode = str.charCodeAt(str.length - 1);
    const hasFinalConsonant = (charCode - 0xac00) % 28 > 0;
    return hasFinalConsonant ? "을" : "를";
}
