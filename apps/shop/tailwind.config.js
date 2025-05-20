/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', 'var(--font-geist-sans)', 'sans-serif'],
      },
      fontSize: {
        // 폰트 스타일
        'h1': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        'h5': ['16px', { lineHeight: '1.4', fontWeight: '700' }],
        'h6': ['14px', { lineHeight: '1.4', fontWeight: '700' }],
        
        // 버튼 폰트 스타일
        'btn-large': ['16px', { lineHeight: '1.5', fontWeight: '700' }], // 예시 값, Figma 값으로 수정 필요
        'btn-small': ['14px', { lineHeight: '1.5', fontWeight: '700' }], // 예시 값, Figma 값으로 수정 필요
        'btn-small-r': ['14px', { lineHeight: '1.5', fontWeight: '400' }], // small_r은 Regular 웨이트로 추정
      },
    },
  },
  plugins: [],
}
