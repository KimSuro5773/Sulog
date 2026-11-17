import { formatLength, useComputedStyle } from "./computed-style";

export type DimensionToken = {
  name: string;
  example: string;
  measureClassName: string;
  usage?: string;
};

function DimensionTokenRow({ token }: { token: DimensionToken }) {
  const [barRef, value] = useComputedStyle((style) =>
    formatLength(style.maxWidth),
  );

  return (
    <li className="flex flex-col gap-2 py-4">
      <span
        ref={barRef}
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
