"use client";

export default function WithDrawPopup({ onClose, onWithDraw }: { onClose: () => void; onWithDraw: () => void }) {
    const onWithDrawClick = () => {
        onWithDraw();
    };

    const onCloseClick = () => {
        onClose();
    };

    return (
        <div className="fixed items-center flex justify-center inset-0 z-50">
            <div className="flex flex-col justify-start items-end w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 p-6 bg-white">
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">정말로 탈퇴하시겠어요?</p>
                        <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#171719]">
                            <span className="flex-grow-0 flex-shrink-0 text-base text-center text-[#171719]">탈퇴시 모든 정보가 삭제되고,</span>
                            <br />
                            <span className="flex-grow-0 flex-shrink-0 text-base text-center text-[#171719]">복구가 불가능합니다.</span>
                        </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                        <button
                            type="button"
                            className="flex justify-center items-center flex-grow h-12 relative gap-2 px-4 py-3 rounded-lg bg-zinc-100"
                            onClick={onCloseClick}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#46474b]">닫기</p>
                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center flex-grow h-12 relative gap-2 px-4 py-3 rounded-lg bg-[#257a57]"
                            onClick={onWithDrawClick}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">탈퇴하기</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
