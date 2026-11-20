import { Autocomplete } from "@base-ui/react/autocomplete";
import { Dialog } from "@base-ui/react/dialog";
import { josa } from "es-hangul";
import { Search, SearchX, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { SearchResultItem } from "@/components/search/search-result-item";
import { EmptyState } from "@/components/ui/empty-state";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Skeleton } from "@/components/ui/skeleton";

export type SearchResult = {
  slug: string;
  title: React.ReactNode;
  summary: React.ReactNode;
  publishedAt: string;
};

type SearchDialogProps = {
  results?: SearchResult[];
  isLoading?: boolean;
  onQueryChange?: (query: string) => void;
  onResultSelect?: (result: SearchResult) => void;
};

type SearchStatus = "idle" | "loading" | "results" | "empty";

const LOADING_PLACEHOLDER_COUNT = 3;

function getSearchStatus(
  query: string,
  isLoading: boolean,
  resultCount: number,
): SearchStatus {
  if (query === "") return "idle";
  if (isLoading) return "loading";
  if (resultCount > 0) return "results";
  return "empty";
}

export function SearchDialog({
  results = [],
  isLoading = false,
  onQueryChange,
  onResultSelect,
}: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function closeSearch() {
    setOpen(false);
    setQuery("");
  }

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    closeSearch();
  }

  const trimmedQuery = query.trim();
  const status = getSearchStatus(trimmedQuery, isLoading, results.length);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setOpen(true);
      return;
    }

    closeSearch();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextQuery = event.currentTarget.value;

    setQuery(nextQuery);
    onQueryChange?.(nextQuery);
  }

  function handleResultSelect(result: SearchResult) {
    onResultSelect?.(result);
    closeSearch();
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger render={<IconButton aria-label="검색 열기" />}>
        <Search />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup
          data-slot="search-dialog"
          initialFocus={inputRef}
          className="fixed inset-0 z-modal overflow-y-auto bg-layer-default"
        >
          <Dialog.Title className="sr-only">검색</Dialog.Title>
          <Autocomplete.Root
            inline
            open={open}
            mode="none"
            autoHighlight="always"
            value={query}
          >
            <div className="sticky top-0 bg-layer-default pb-3">
              <div className="mx-auto max-w-list px-gutter">
                <div className="flex h-header items-center justify-between">
                  <span className="text-logo text-neutral">Sulog</span>
                  <Dialog.Close render={<IconButton aria-label="검색 닫기" />}>
                    <X />
                  </Dialog.Close>
                </div>
                <Autocomplete.Input
                  ref={inputRef}
                  aria-label="글 검색"
                  placeholder="글 제목이나 내용을 검색해 보세요"
                  enterKeyHint="search"
                  onChange={handleInputChange}
                  render={<Input icon={<Search />} />}
                />
              </div>
            </div>

            <div className="mx-auto max-w-list px-gutter pb-10">
              <div className="hidden items-center gap-3 py-3 text-caption text-neutral-subtle desktop:flex">
                <span className="flex items-center gap-1">
                  <Kbd label="위아래 화살표">↑↓</Kbd> 이동
                </span>
                <span className="flex items-center gap-1">
                  <Kbd>Enter</Kbd> 열기
                </span>
                <span className="flex items-center gap-1">
                  <Kbd>Esc</Kbd> 닫기
                </span>
              </div>

              {status === "loading" && <SearchLoading />}
              {status === "results" && (
                <Autocomplete.List className="-mx-3 flex flex-col">
                  {results.map((result) => (
                    <SearchResultItem
                      key={result.slug}
                      result={result}
                      onSelect={handleResultSelect}
                    />
                  ))}
                </Autocomplete.List>
              )}
              {status === "empty" && <SearchEmpty query={trimmedQuery} />}
            </div>
          </Autocomplete.Root>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function SearchLoading() {
  return (
    <div className="-mx-3 flex flex-col">
      {Array.from({ length: LOADING_PLACEHOLDER_COUNT }, (_, index) => (
        <div key={index} className="flex flex-col gap-2 p-3">
          <Skeleton className="h-5 w-7/10" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3.5 w-3/5" />
        </div>
      ))}
    </div>
  );
}

function SearchEmpty({ query }: { query: string }) {
  return (
    <EmptyState
      icon={<SearchX />}
      title={`‘${query}’${josa.pick(query, "와/과")} 일치하는 글이 없습니다`}
      description="검색어를 변경하거나 다른 키워드로 검색해 보세요."
    />
  );
}
