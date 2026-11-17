import { useState, useSyncExternalStore } from "react";

function subscribeToStyleChange(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("resize", onChange);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", onChange);
  };
}

export function useCssVariable(name: `--${string}`) {
  return useSyncExternalStore(subscribeToStyleChange, () =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
  );
}

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
