"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { TextWrap } from "lucide-react";
import { useState } from "react";

import { iconButtonVariants } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { mergeClassNames } from "@/lib/merge-class-names";

import { CodeBlockCopyButton } from "./code-block-copy-button";

type CodeBlockFrameProps = {
  label: string;
  text: string;
  filename?: string;
  className?: string;
  children: React.ReactNode;
};

export function CodeBlockFrame({
  label,
  text,
  filename,
  className,
  children,
}: CodeBlockFrameProps) {
  const [wrap, setWrap] = useState(false);

  const actions = (
    <div className="flex shrink-0 items-center gap-1">
      <span className="px-1 text-caption text-neutral-subtle">{label}</span>
      <Tooltip label="코드 줄바꿈">
        <TogglePrimitive
          aria-label="코드 줄바꿈"
          pressed={wrap}
          onPressedChange={setWrap}
          className={mergeClassNames(
            iconButtonVariants({ size: "sm" }),
            "text-neutral-subtle hover:text-neutral-subtle active:text-neutral-subtle data-pressed:bg-neutral-weak-pressed data-pressed:text-neutral",
          )}
        >
          <TextWrap />
        </TogglePrimitive>
      </Tooltip>
      <CodeBlockCopyButton text={text} />
    </div>
  );

  return (
    <div
      data-slot="code-block"
      data-wrap={wrap || undefined}
      className={mergeClassNames(
        "group/code-block relative isolate overflow-hidden rounded-md bg-(--syntax-background)",
        className,
      )}
    >
      {filename ? (
        <div className="flex min-h-11 items-center gap-2 border-b border-neutral-muted pr-2 pl-5">
          <span className="min-w-0 flex-1 truncate font-mono text-caption text-neutral-muted">
            {filename}
          </span>
          {actions}
        </div>
      ) : (
        <div className="absolute top-2 right-2 z-1">{actions}</div>
      )}
      {children}
    </div>
  );
}
