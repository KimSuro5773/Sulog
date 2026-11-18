import { cva } from "class-variance-authority";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { mergeClassNames } from "@/lib/merge-class-names";

const paginationItemVariants = cva(
  "inline-flex size-hit items-center justify-center rounded-full text-label transition-[background-color,color] duration-fast select-none [&_svg]:size-5",
  {
    variants: {
      state: {
        default:
          "text-neutral-subtle hover:bg-neutral-weak hover:text-neutral active:bg-neutral-weak-pressed active:text-neutral",
        current: "bg-brand-solid font-bold text-on-brand-solid",
        disabled: "text-disabled",
      },
    },
  },
);

type PaginationProps = {
  page: number;
  totalPages: number;
  getPageHref: (page: number) => Route;
  className?: string;
};

function getPageRange(page: number, totalPages: number, count: number) {
  const start = Math.max(
    1,
    Math.min(page - Math.floor(count / 2), totalPages - count + 1),
  );

  return { start, end: Math.min(totalPages, start + count - 1) };
}

function PaginationArrow({
  href,
  label,
  children,
}: {
  href?: Route;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <a
        role="link"
        aria-disabled="true"
        aria-label={label}
        className={paginationItemVariants({ state: "disabled" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={paginationItemVariants({ state: "default" })}
    >
      {children}
    </Link>
  );
}

export function Pagination({
  page,
  totalPages,
  getPageHref,
  className,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visibleRange = getPageRange(page, totalPages, 5);
  const mobileRange = getPageRange(page, totalPages, 3);

  const pages = Array.from(
    { length: visibleRange.end - visibleRange.start + 1 },
    (_, index) => visibleRange.start + index,
  );

  return (
    <nav
      data-slot="pagination"
      aria-label="페이지 이동"
      className={mergeClassNames("flex justify-center", className)}
    >
      <ul className="flex items-center gap-1">
        <li>
          <PaginationArrow
            href={page > 1 ? getPageHref(page - 1) : undefined}
            label="이전 페이지"
          >
            <ChevronLeft />
          </PaginationArrow>
        </li>
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={
              pageNumber < mobileRange.start || pageNumber > mobileRange.end
                ? "max-tablet:hidden"
                : undefined
            }
          >
            <Link
              href={getPageHref(pageNumber)}
              aria-current={pageNumber === page ? "page" : undefined}
              className={paginationItemVariants({
                state: pageNumber === page ? "current" : "default",
              })}
            >
              {pageNumber}
              <span className="sr-only">페이지</span>
            </Link>
          </li>
        ))}
        <li>
          <PaginationArrow
            href={page < totalPages ? getPageHref(page + 1) : undefined}
            label="다음 페이지"
          >
            <ChevronRight />
          </PaginationArrow>
        </li>
      </ul>
    </nav>
  );
}
