import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display",
        "title-1",
        "title-2",
        "title-3",
        "title-4",
        "title-5",
        "subtitle",
        "body-lg",
        "body",
        "label",
        "caption",
        "code",
        "code-inline",
      ],
      spacing: ["gutter", "hit", "header", "sidebar"],
      container: ["list", "article"],
      ease: ["standard"],
    },
    classGroups: {
      z: [{ z: ["header", "floating", "overlay", "modal", "toast"] }],
      duration: [{ duration: ["fast", "base", "slow"] }],
    },
  },
});

export function mergeClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
