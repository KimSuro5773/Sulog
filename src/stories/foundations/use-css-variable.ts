import { useSyncExternalStore } from "react";

export function subscribeToStyleChange(onChange: () => void) {
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
