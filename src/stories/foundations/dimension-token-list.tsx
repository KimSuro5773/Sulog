import { useState, useSyncExternalStore } from "react";

import { subscribeToStyleChange } from "./use-css-variable";

export type DimensionToken = {
  name: string;
  example: string;
  measureClassName: string;
  usage?: string;
};

// 측정용 클래스가 적용한 max-width 값을 px와 rem으로 읽습니다.
function readLength(element: HTMLElement | null) {
  if (!element) return "";

  const px = parseFloat(getComputedStyle(element).maxWidth);
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return `${px}px · ${px / rootFontSize}rem`;
}

function DimensionTokenRow({ token }: { token: DimensionToken }) {
  const [bar, setBar] = useState<HTMLElement | null>(null);
  const value = useSyncExternalStore(subscribeToStyleChange, () =>
    readLength(bar),
  );

  return (
    <li className="flex flex-col gap-2 py-4">
      <span
        ref={setBar}
        className={`block h-4 w-full rounded-sm bg-brand-solid ${token.measureClassName}`}
      />
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-neutral-subtle">
        <code className="font-mono text-neutral">{token.name}</code>
        <span className="font-mono">{value}</span>
        <code className="font-mono">{token.example}</code>
        {token.usage && <span>{token.usage}</span>}
      </p>
    </li>
  );
}

export function DimensionTokenList({ tokens }: { tokens: DimensionToken[] }) {
  return (
    <ul className="divide-y">
      {tokens.map((token) => (
        <DimensionTokenRow key={token.name} token={token} />
      ))}
    </ul>
  );
}
