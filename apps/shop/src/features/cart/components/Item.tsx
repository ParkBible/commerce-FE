interface ItemProps {
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export default function Item({ title, price, quantity, image }: ItemProps) {
    return (
        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
            <img src={image} alt={title} className="w-16 h-16 object-cover" />
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                    >
                        삭제
                    </button>
                </div>
                <div className="flex justify-between items-center gap-2 mt-2">
                    <p className="text-gray-600">가격: {price}원</p>
                    {/* 샤드 사용 */}
                    <button type="button">- {quantity} +</button>
                </div>
            </div>
        </div>
    );
}
