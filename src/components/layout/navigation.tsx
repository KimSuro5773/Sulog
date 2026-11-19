"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: { href: Route; label: string; matches: string[] }[] = [
  { href: "/", label: "홈", matches: [] },
  { href: "/articles", label: "아티클", matches: ["/articles", "/tags"] },
  { href: "/series", label: "시리즈", matches: ["/series"] },
  { href: "/about", label: "소개", matches: ["/about"] },
];

function isCurrentPath(pathname: string, href: string, matches: string[]) {
  if (href === "/") {
    return pathname === "/";
  }

  return matches.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root aria-label="주요 메뉴" className={className}>
      <NavigationMenu.List className="flex h-full gap-5 tablet:gap-6">
        {menuItems.map(({ href, label, matches }) => (
          <NavigationMenu.Item key={href} className="flex">
            <NavigationMenu.Link
              active={isCurrentPath(pathname, href, matches)}
              render={<Link href={href} />}
              className="relative inline-flex min-h-hit items-center text-label whitespace-nowrap text-neutral-subtle transition-colors duration-fast hover:text-neutral focus-visible:rounded-sm focus-visible:-outline-offset-2 data-active:text-label-strong data-active:text-neutral data-active:after:absolute data-active:after:inset-x-0 data-active:after:bottom-0 data-active:after:h-0.5 data-active:after:bg-brand-solid"
            >
              {label}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
