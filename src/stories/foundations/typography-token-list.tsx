import { useState, useSyncExternalStore } from "react";

import { subscribeToStyleChange } from "./use-css-variable";

export type TypographyToken = {
  className: string;
  usage: string;
  sample?: string;
};

const defaultSample = "다람쥐 헌 쳇바퀴에 타고파 The quick brown fox";

function readTypography(element: HTMLElement | null) {
  if (!element) return "";

  const style = getComputedStyle(element);
  return [
    `크기 ${style.fontSize}`,
    `행간 ${style.lineHeight}`,
    `굵기 ${style.fontWeight}`,
    `자간 ${style.letterSpacing}`,
  ].join(" · ");
}

function TypographyTokenRow({ token }: { token: TypographyToken }) {
  const [sample, setSample] = useState<HTMLElement | null>(null);
  const metrics = useSyncExternalStore(subscribeToStyleChange, () =>
    readTypography(sample),
  );

  return (
    <li className="flex flex-col gap-2 py-5">
      <p ref={setSample} className={token.className}>
        {token.sample ?? defaultSample}
      </p>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-neutral-subtle">
        <code className="font-mono text-neutral">{token.className}</code>
        <span className="font-mono">{metrics}</span>
        <span>{token.usage}</span>
      </p>
    </li>
  );
}

export function TypographyTokenList({ tokens }: { tokens: TypographyToken[] }) {
  return (
    <ul className="divide-y">
      {tokens.map((token) => (
        <TypographyTokenRow key={token.className} token={token} />
      ))}
    </ul>
  );
}
