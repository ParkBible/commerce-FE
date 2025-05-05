import { Button } from "@/src/shared/components/button";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Button>버튼이다</Button>
            <Link href="/product/1">
                <Button className="ml-2">상품 상세 페이지 이동 (임시)</Button>
            </Link>
            <Link href="/temp-main-page">
                <Button className="ml-2">임시 메인 페이지</Button>
            </Link>
        </>
    );
}
