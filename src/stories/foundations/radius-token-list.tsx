import { formatLength, useComputedStyle } from "./computed-style";

export type RadiusToken = {
  className: string;
  usage: string;
};

function RadiusTokenRow({ token }: { token: RadiusToken }) {
  const [boxRef, value] = useComputedStyle((style) =>
    formatLength(style.borderTopLeftRadius),
  );

  return (
    <li className="flex items-center gap-6 py-4">
      <span
        ref={boxRef}
        className={`block size-16 border bg-neutral-weak ${token.className}`}
      />
      <p className="flex flex-col gap-1 text-caption text-neutral-subtle">
        <code className="font-mono text-neutral">{token.className}</code>
        <span className="font-mono">{value}</span>
        <span>{token.usage}</span>
      </p>
    </li>
  );
}

export function RadiusTokenList({ tokens }: { tokens: RadiusToken[] }) {
  return (
    <ul className="divide-y">
      {tokens.map((token) => (
        <RadiusTokenRow key={token.className} token={token} />
      ))}
    </ul>
  );
}
