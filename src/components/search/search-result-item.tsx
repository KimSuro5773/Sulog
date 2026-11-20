import { Autocomplete } from "@base-ui/react/autocomplete";

import type { SearchResult } from "@/components/search/search-dialog";
import { formatDate } from "@/lib/format-date";

type SearchResultItemProps = {
  result: SearchResult;
  onSelect: (result: SearchResult) => void;
};

export function SearchResultItem({ result, onSelect }: SearchResultItemProps) {
  return (
    <Autocomplete.Item
      data-slot="search-result-item"
      value={result.slug}
      onClick={() => onSelect(result)}
      className="flex cursor-pointer flex-col gap-1 rounded-md p-3 data-highlighted:bg-neutral-weak"
    >
      <p className="text-title-5 text-neutral">{result.title}</p>
      <p className="text-body-sm text-neutral-muted">{result.summary}</p>
      <time
        dateTime={result.publishedAt}
        className="text-caption text-neutral-subtle"
      >
        {formatDate(result.publishedAt)}
      </time>
    </Autocomplete.Item>
  );
}
