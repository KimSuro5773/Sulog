import { useState } from "react";

import { useComputedStyle } from "./style-value";

export type MotionToken = {
  className: string;
  usage: string;
};

function readMotion(style: CSSStyleDeclaration) {
  const duration = parseFloat(style.transitionDuration) * 1000;
  return `${duration}ms · ${style.transitionTimingFunction}`;
}

function MotionTokenRow({
  token,
  moved,
}: {
  token: MotionToken;
  moved: boolean;
}) {
  const [dotRef, value] = useComputedStyle(readMotion);

  return (
    <li className="flex flex-col gap-2 py-4">
      <span className="block w-64 rounded-sm bg-neutral-weak">
        <span
          ref={dotRef}
          className={`block size-6 rounded-sm bg-brand-solid transition-transform ${token.className} ${moved ? "translate-x-58" : ""}`}
        />
      </span>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-neutral-subtle">
        <code className="font-mono text-neutral">{token.className}</code>
        <span className="font-mono">{value}</span>
        <span>{token.usage}</span>
      </p>
    </li>
  );
}

export function MotionTokenList({ tokens }: { tokens: MotionToken[] }) {
  const [moved, setMoved] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setMoved((value) => !value)}
        className="self-start rounded-md bg-brand-solid px-4 py-2 text-label text-on-brand-solid hover:bg-brand-solid-hover"
      >
        재생
      </button>
      <ul className="divide-y">
        {tokens.map((token) => (
          <MotionTokenRow key={token.className} token={token} moved={moved} />
        ))}
      </ul>
    </div>
  );
}
