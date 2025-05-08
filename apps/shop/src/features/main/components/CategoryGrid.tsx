import * as React from "react";
import { CategoryItem } from "./CategoryItem";

const categories = [
    {
        id: "virtuo-capsules",
        title: "버츄오 캡슐 커피",
        description: "다양한 크기와 풍부한 맛으로 즐기는 프리미엄 커피",
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
    },
    {
        id: "original-capsules",
        title: "오리지널 캡슐 커피",
        description: "진하고 깊은 에스프레소 풍미를 담은 정통 캡슐",
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
    },
    {
        id: "machines",
        title: "머신",
        description: "혁신적인 디자인과 최신 기술이 적용된 801 커피 머신",
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
    },
    {
        id: "accessories",
        title: "액세서리",
        description: "커피 경험을 완성하는 다양한 고품질 액세서리",
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7bfa7b14aca451340208bfc07390f055298c80",
    },
];

export default function CategoryGrid() {
    return (
        <section className="py-8 px-6">
            <div className="mx-auto w-full max-w-[1240px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">카테고리</h2>
                    <div className="flex space-x-2">
                        <button
                            type="button"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
                        >
                            &lt;
                        </button>
                        <button
                            type="button"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                    {categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            title={category.title}
                            description={category.description}
                            imageUrl={category.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
