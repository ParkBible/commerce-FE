import React from "react";
import Image from "next/image";

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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <title>카카오 로고</title>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 3.125C6.17 3.125 3.125 5.682 3.125 8.957C3.125 11.1 4.452 13.047 6.454 14.094C6.298 14.602 5.73 16.11 5.67 16.34C5.593 16.637 5.779 16.637 5.941 16.531C6.068 16.446 7.89 15.207 8.532 14.77C9 14.855 9.492 14.895 10 14.895C13.83 14.895 16.875 12.337 16.875 9.063C16.875 5.789 13.83 3.125 10 3.125Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold">카카오 간편 로그인</span>
                    </button>

                    {/* 네이버 로그인 버튼 */}
                    <button type="button" className="w-full h-12 rounded-lg bg-[#00c73c] flex items-center justify-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <title>네이버 로고</title>
                                <path d="M13.5615 10.7692L6.16346 0H0V20H6.44231V9.23077L13.8365 20H20V0H13.5615V10.7692Z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-white">네이버 간편 로그인</span>
                    </button>

                    {/* 구글 로그인 버튼 */}
                    <button
                        type="button"
                        className="w-full h-12 rounded-lg bg-white border border-gray-200/70 flex items-center justify-center gap-2"
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <title>구글 로고</title>
                                <path
                                    d="M19.6 10.2273C19.6 9.51819 19.5364 8.83637 19.4182 8.18182H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M10 20C12.7 20 14.9636 19.1045 16.6182 17.5773L13.3864 15.0682C12.4909 15.6682 11.3455 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40455 11.9H1.06364V14.4909C2.70909 17.7591 6.09091 20 10 20Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M4.40454 11.9C4.20454 11.3 4.09091 10.6591 4.09091 10C4.09091 9.34091 4.20454 8.7 4.40454 8.1V5.50909H1.06364C0.386365 6.85909 0 8.38636 0 10C0 11.6136 0.386365 13.1409 1.06364 14.4909L4.40454 11.9Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z"
                                    fill="#EA4335"
                                />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold">Google 간편 로그인</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
