import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소가 바뀌었거나 삭제된 글일 수 있습니다.</p>
      <Link href="/" className={buttonVariants()}>
        홈으로
      </Link>
    </div>
  );
}
