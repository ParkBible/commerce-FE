interface CategoryItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

export function CategoryItem({
    title,
    description,
    imageUrl,
}: CategoryItemProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full h-[150px] overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-24 h-24 object-contain"
                />
            </div>
            <div className="flex flex-col items-center text-center bg-black text-white w-full p-4 rounded-b-lg">
                <h3 className="text-base font-bold mb-1">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
            </div>
        </div>
    );
}
