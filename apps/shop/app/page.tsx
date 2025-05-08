import { Button } from "@/src/shared/components/shared/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="p-8 flex flex-col items-start gap-4">
            <Link href="/main">
                <Button className="w-auto">
                    (임시) 디자이너가 준 시안A 메인 페이지로 이동
                </Button>
            </Link>
            <Link href="/product/1">
                <Button className="w-auto">
                    (임시) 커피 상품 상세 페이지로 이동
                </Button>
            </Link>
        </div>
    );
}
