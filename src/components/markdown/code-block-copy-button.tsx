"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

export function CodeBlockCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("코드를 복사했습니다.");
    } catch {
      toast.error("코드를 복사하지 못했습니다.");
    }
  };

  return (
    <Tooltip label="코드 복사">
      <IconButton
        aria-label="코드 복사"
        size="sm"
        className="text-neutral-subtle hover:text-neutral-subtle active:text-neutral-subtle"
        onClick={copy}
      >
        {copied ? <Check className="text-positive" /> : <Copy />}
      </IconButton>
    </Tooltip>
  );
}
