import { useCssVariable } from "./use-css-variable";

export type ColorToken = {
  name: string;
  cssVar: `--${string}`;
  className: string;
  usage: string;
  surface?: string;
};

type PreviewKind = "text" | "background" | "border" | "outline";

const previewClassNames: Record<Exclude<PreviewKind, "text">, string> = {
  background: "block size-10 rounded-sm border",
  border: "block size-10 rounded-sm border-2",
  outline: "block size-10 rounded-sm outline-2 outline-offset-2",
};

function ColorTokenPreview({
  token,
  preview,
}: {
  token: ColorToken;
  preview: PreviewKind;
}) {
  if (preview === "text") {
    return (
      <span
        className={`rounded-sm px-2 py-1 ${token.surface ?? ""} ${token.className}`}
      >
        가나다 Aa 123
      </span>
    );
  }

  return (
    <span className={`${previewClassNames[preview]} ${token.className}`} />
  );
}

function ColorTokenRow({
  token,
  preview,
}: {
  token: ColorToken;
  preview: PreviewKind;
}) {
  const value = useCssVariable(token.cssVar);

  return (
    <tr className="border-b">
      <td className="py-3 pr-4">
        <ColorTokenPreview token={token} preview={preview} />
      </td>
      <td className="py-3 pr-4 font-mono text-code">{token.name}</td>
      <td className="py-3 pr-4 font-mono text-code">{token.className}</td>
      <td className="py-3 pr-4 font-mono text-caption text-neutral-subtle">
        {value}
      </td>
      <td className="py-3 text-label">{token.usage}</td>
    </tr>
  );
}

export function ColorTokenList({
  tokens,
  preview,
}: {
  tokens: ColorToken[];
  preview: PreviewKind;
}) {
  return (
    <table className="w-full text-left">
      <thead className="text-caption text-neutral-subtle">
        <tr className="border-b">
          <th className="py-2 font-normal">미리보기</th>
          <th className="py-2 font-normal">토큰</th>
          <th className="py-2 font-normal">Tailwind 클래스</th>
          <th className="py-2 font-normal">현재 값</th>
          <th className="py-2 font-normal">용도</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <ColorTokenRow key={token.name} token={token} preview={preview} />
        ))}
      </tbody>
    </table>
  );
}
