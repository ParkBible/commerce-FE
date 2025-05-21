import React from "react";
import { KakaoIcon, NaverIcon, GoogleIcon } from "@/src/shared/components/shared/Icon";

export default function LoginComponent() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center mt-[-3rem]">
            {/* 메인 컨텐츠 */}
            <div className="w-[25rem] bg-white rounded-2xl p-6">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-2xl font-bold mb-4">로그인</h2>
                    <p className="text-base text-[#171719] text-center whitespace-nowrap">SNS로 간편하게 로그인하고 더 많은 서비스를 즐겨보세요!</p>
                </div>

                <div className="space-y-2">
                    {/* 카카오 로그인 버튼 */}
                    <button type="button" className="w-full h-12 rounded-lg bg-[#fee500] flex items-center justify-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <KakaoIcon />
                        </div>
                        <span className="text-sm font-semibold">카카오 간편 로그인</span>
                    </button>

                    {/* 네이버 로그인 버튼 */}
                    <button type="button" className="w-full h-12 rounded-lg bg-[#00c73c] flex items-center justify-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <NaverIcon />
                        </div>
                        <span className="text-sm font-semibold text-white">네이버 간편 로그인</span>
                    </button>

                    {/* 구글 로그인 버튼 */}
                    <button
                        type="button"
                        className="w-full h-12 rounded-lg bg-white border border-gray-200/70 flex items-center justify-center gap-2"
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
                            <GoogleIcon />
                        </div>
                        <span className="text-sm font-semibold">Google 간편 로그인</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
