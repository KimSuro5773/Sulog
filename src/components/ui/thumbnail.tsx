"use client";

import Image from "next/image";
import { useState } from "react";

import thumbnailFallback from "@/assets/thumbnail-fallback.png";
import { mergeClassNames } from "@/lib/merge-class-names";

type ThumbnailProps = {
  src?: string;
  className?: string;
};

export function Thumbnail({ src, className }: ThumbnailProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const imageSrc = !src || src === failedSrc ? thumbnailFallback : src;

  return (
    <div
      data-slot="thumbnail"
      className={mergeClassNames(
        "relative isolate size-24 shrink-0 overflow-hidden rounded-lg bg-neutral-weak tablet:h-33.5 tablet:w-50",
        className,
      )}
    >
      <div className="size-full transition-transform duration-base ease-standard motion-safe:will-change-transform motion-safe:group-hover/post:scale-103">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(min-width: 48rem) 200px, 96px"
          className="object-cover dark:brightness-92"
          onError={() => setFailedSrc(src)}
        />
      </div>
    </div>
  );
}
