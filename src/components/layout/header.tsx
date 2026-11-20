import Link from "next/link";

import { Navigation } from "@/components/layout/navigation";
import { HeaderSearch } from "@/components/search/header-search";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-header bg-layer-default-alpha">
      <div className="mx-auto grid max-w-list grid-cols-[1fr_auto] items-center px-gutter tablet:grid-cols-[auto_1fr_auto] tablet:gap-x-7.5">
        <Link href="/" className="justify-self-start text-logo text-neutral">
          Sulog
        </Link>
        <Navigation className="col-span-2 row-start-2 scrollbar-none h-11 overflow-x-auto tablet:col-2 tablet:row-start-1 tablet:h-header" />
        <div className="flex h-header items-center gap-1">
          <HeaderSearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
