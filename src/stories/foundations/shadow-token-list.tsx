import { useCssVariable } from "./style-value";

export type ShadowToken = {
  className: string;
  cssVar: `--${string}`;
  usage: string;
};

function ShadowTokenRow({ token }: { token: ShadowToken }) {
  const value = useCssVariable(token.cssVar);

  return (
    <li className="flex items-center gap-8 py-8">
      <span
        className={`block h-20 w-40 rounded-md bg-layer-floating ${token.className}`}
      />
      <p className="flex flex-col gap-1 text-caption text-neutral-subtle">
        <code className="font-mono text-neutral">{token.className}</code>
        <span className="font-mono">{value}</span>
        <span>{token.usage}</span>
      </p>
    </li>
  );
}

export function ShadowTokenList({ tokens }: { tokens: ShadowToken[] }) {
  return (
    <ul className="divide-y">
      {tokens.map((token) => (
        <ShadowTokenRow key={token.className} token={token} />
      ))}
    </ul>
  );
}
