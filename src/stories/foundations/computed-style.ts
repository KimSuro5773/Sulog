import { useState, useSyncExternalStore } from "react";

import { subscribeToStyleChange } from "./use-css-variable";

export function useComputedStyle(read: (style: CSSStyleDeclaration) => string) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const value = useSyncExternalStore(subscribeToStyleChange, () =>
    element ? read(getComputedStyle(element)) : "",
  );

  return [setElement, value] as const;
}

export function formatLength(value: string) {
  const px = parseFloat(value);
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  return `${px}px · ${px / rootFontSize}rem`;
}
