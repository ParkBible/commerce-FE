"use client";

import { useState } from "react";
import WithDrawPopup from "./WithDrawPopup";
import { CancelIcon } from "@/src/shared/icons/Cancel";
import type { UserInfoType } from "../UserInfo";

export default function UserPopup({ user, onClose, onSave }: { user: UserInfoType; onClose: () => void; onSave: () => void }) {
    const [isWithdrawPopupOpen, setIsWithdrawPopupOpen] = useState(false);
    const [nickname, setNickname] = useState(user.nickname);

    const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    };

    const onNicknameEditClick = () => {
        // todo: 닉네임 유효성 검사 로직
    };

    const onWithdrawClick = () => {
        setIsWithdrawPopupOpen(true);
    };

    const onCloseClick = () => {
        setIsWithdrawPopupOpen(false);
    };

    const handleWithDraw = () => {
        // todo: 탈퇴 로직
        setIsWithdrawPopupOpen(false);
    };

    const onSaveClick = () => {
        onSave();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-black/50 flex items-center justify-center z-50">
            <div className="flex flex-col justify-start absolute items-end w-xl overflow-hidden rounded-2xl bg-white">
                <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-4 bg-white border-t-0 border-r-0 border-b border-l-0">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-black">계정 관리</p>
                    <button type="button" onClick={handleClose}>
                        <CancelIcon className="w-8 h-8 relative" />
                    </button>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 px-6 pt-6 pb-10">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">닉네임</p>
                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                            <div className="flex flex-col justify-start items-start flex-grow gap-2">
                                <input
                                    type="text"
                                    className="flex justify-between items-center self-stretch text-sm text-left text-black h-12 relative p-4 rounded-lg border border-black"
                                    placeholder="닉네임을 입력하세요"
                                    value={nickname}
                                    onChange={onNicknameChange}
                                />
                            </div>
                            <button
                                type="button"
                                className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-24 h-12 relative gap-0.5 px-4 py-3 rounded-lg border border-black"
                                onClick={onNicknameEditClick}
                            >
                                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-black">닉네임 변경</p>
                            </button>
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-blue-500">사용 가능한 닉네임입니다.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이름</p>
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#171719]">{user.name}</p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이메일</p>
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#171719]">{user.email}</p>
                    </div>
                    <button type="button" className="flex-grow-0 flex-shrink-0 text-base text-left text-[#2e2f33]/[0.88]" onClick={onWithdrawClick}>
                        회원 탈퇴하기
                    </button>
                    <button
                        type="button"
                        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-12 relative gap-2 px-4 py-3 rounded-lg bg-[#257a57]"
                        onClick={onSaveClick}
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">저장하기</p>
                    </button>
                </div>
            </div>
            {isWithdrawPopupOpen && <WithDrawPopup onClose={onCloseClick} onWithDraw={handleWithDraw} />}
        </div>
    );
}
