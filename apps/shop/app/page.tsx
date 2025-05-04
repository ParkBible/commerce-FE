import { Button } from "@/src/shared/components/button";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Button>버튼이다</Button>
            <Link href="/product/1">
                <Button>상품 상세 페이지 이동 (임시)</Button>
            </Link>
        </>
    );
}
