import { useComputedStyle } from "./computed-style";

export type ZIndexToken = {
  className: string;
  usage: string;
};

function ZIndexCard({ token, order }: { token: ZIndexToken; order: number }) {
  const [cardRef, value] = useComputedStyle((style) => style.zIndex);

  return (
    <li
      ref={cardRef}
      style={{ left: order * 48, top: order * 56 }}
      className={`absolute flex w-72 flex-col gap-1 rounded-md border bg-layer-floating px-4 py-3 shadow-md ${token.className}`}
    >
      <span className="flex gap-3 text-label">
        <code className="font-mono">{token.className}</code>
        <span className="font-mono text-neutral-subtle">{value}</span>
      </span>
      <span className="text-caption text-neutral-subtle">{token.usage}</span>
    </li>
  );
}

export function ZIndexTokenList({ tokens }: { tokens: ZIndexToken[] }) {
  return (
    <ul className="relative h-80">
      {tokens
        .map((token, order) => ({ token, order }))
        .reverse()
        .map(({ token, order }) => (
          <ZIndexCard key={token.className} token={token} order={order} />
        ))}
    </ul>
  );
}
