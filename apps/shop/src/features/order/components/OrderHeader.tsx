import type { ReactNode } from "react";

interface OrderHeaderProps {
    title: string;
}

export const OrderHeader = ({ title }: OrderHeaderProps): ReactNode => {
    return (
        <div className="flex items-center gap-2 mb-10">
            <button type="button" className="focus:outline-none" aria-label="뒤로 가기">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>뒤로 가기 화살표</title>
                    <path d="M20 24L12 16L20 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
};
