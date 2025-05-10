interface ItemProps {
    title: string;
    price: number;
    quantity: number;
    stockQuantity: number;
    image: string;
}

const LOW_STOCK_QUANTITY = 10;

export default function Item({
    title,
    price,
    quantity,
    stockQuantity,
    image,
}: ItemProps) {
    const getQuantityMessage = () => {
        if (quantity <= 0) {
            return "품절";
        }

        return `품절 임박! 남은 수량: ${stockQuantity}`;
    };

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
                <div>
                    {stockQuantity < LOW_STOCK_QUANTITY && (
                        <p className="text-red-500">{getQuantityMessage()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
