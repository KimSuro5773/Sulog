import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-full max-w-list flex-col items-center justify-center px-gutter py-18 text-center">
      <p className="text-numeral text-brand">404</p>
      <h1 className="mt-4 text-title-4 text-neutral">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-2 max-w-105 text-body text-neutral-muted">
        주소가 바뀌었거나 삭제된 글일 수 있습니다.
      </p>
      <div className="mt-2 pt-2">
        <Link href="/" className={buttonVariants()}>
          홈으로
        </Link>
      </div>
    </div>
  );
}
