import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

import type { HighlightedCode } from "@/lib/markdown/highlight";
import { mergeClassNames } from "@/lib/merge-class-names";

import { CodeBlockFrame } from "./code-block-frame";

const preClassName =
  "overflow-x-auto pb-5 font-mono text-code focus-visible:-outline-offset-2 group-data-wrap/code-block:wrap-break-word group-data-wrap/code-block:whitespace-pre-wrap [&_.add]:bg-(--syntax-line-added) [&_.add]:before:text-positive [&_.add]:before:content-['+'] [&_.diff]:before:absolute [&_.diff]:before:left-1.5 [&_.diff]:before:font-semibold [&_.highlighted]:bg-(--syntax-line-highlight) [&_.highlighted]:shadow-[inset_2px_0_0_var(--bg-brand-solid)] [&_.line]:relative [&_.line]:min-h-lh [&_.line]:px-5 [&_.remove]:bg-(--syntax-line-removed) [&_.remove]:before:text-critical [&_.remove]:before:content-['−'] [&_code]:grid [&_code]:w-max [&_code]:min-w-full group-data-wrap/code-block:[&_code]:w-full";

type CodeBlockProps = HighlightedCode & {
  filename?: string;
  className?: string;
};

export function CodeBlock({
  label,
  hast,
  text,
  filename,
  className,
}: CodeBlockProps) {
  return (
    <CodeBlockFrame
      label={label}
      text={text}
      filename={filename}
      className={className}
    >
      {toJsxRuntime(hast, {
        Fragment,
        jsx,
        jsxs,
        components: {
          pre: ({ className: shikiClassName, ...props }) => (
            <pre
              className={mergeClassNames(
                shikiClassName,
                preClassName,
                filename ? "pt-4" : "pt-8",
              )}
              {...props}
            />
          ),
        },
      })}
    </CodeBlockFrame>
  );
}
