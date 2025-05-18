"use client";
import { Button } from "@/src/shared/components/shared/button";
import { useModal } from "@/src/shared/hooks/useModal";

export default function ShippingInfoForm() {
    const { openModal, closeModal, Modal } = useModal();
    return (
        <div className="p-4 border border-gray-200 rounded-2xl">
            <h2>배송지</h2>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mb-5">
                    <h3 className="font-bold">배송지명</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 rounded-xs px-2 py-1">기본 배송지</span>
                </div>
                <div>
                    <Button variant="outline" onClick={openModal}>
                        배송지 변경
                    </Button>
                </div>
            </div>
            <div className="text-sm">
                <p>
                    <span>김팔공</span> | 강원도 춘천시 영서로 105
                </p>
                <p>010-1234-5678</p>
            </div>
            <Modal title="배송지 변경" onClickClose={closeModal}>
                <div>test</div>
            </Modal>
        </div>
    );
}
