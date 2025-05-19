"use client";
import React from "react";
import UserPopup from "@/src/features/mypage/components/user/UserPopup";
import { useToast } from "@/src/shared/hooks/useToast";
import type { UserInfoType } from "./UserInfo";

export default function EditUserInfo({ user }: { user: UserInfoType }) {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const { toast, ToastUI } = useToast();

    const onEditClick = () => {
        setIsPopupOpen(true);
    };

    const onCloseClick = () => {
        setIsPopupOpen(false);
    };

    const onSaveClick = () => {
        setIsPopupOpen(false);
        showToast();
    };

    const showToast = () => {
        toast({
            message: "유저 정보가 저장되었습니다.",
        });
    };

    return (
        <>
            <button
                type="button"
                className="flex justify-center items-center h-8 relative gap-0.5 p-3 rounded-md bg-white border border-[#E0E0E2]"
                onClick={onEditClick}
            >
                <p className="text-xs font-bold text-center text-[#47486e]">편집</p>
            </button>
            {isPopupOpen && <UserPopup user={user} onClose={onCloseClick} onSave={onSaveClick} />}
            {ToastUI}
        </>
    );
}
