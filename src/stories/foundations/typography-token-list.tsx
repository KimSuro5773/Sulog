import { useComputedStyle } from "./computed-style";

export type TypographyToken = {
  className: string;
  usage: string;
  sample?: string;
};

const defaultSample = "다람쥐 헌 쳇바퀴에 타고파 The quick brown fox";

function readTypography(style: CSSStyleDeclaration) {
  return [
    `크기 ${style.fontSize}`,
    `행간 ${style.lineHeight}`,
    `굵기 ${style.fontWeight}`,
    `자간 ${style.letterSpacing}`,
  ].join(" · ");
}

function TypographyTokenRow({ token }: { token: TypographyToken }) {
  const [sampleRef, metrics] = useComputedStyle(readTypography);

  return (
    <li className="flex flex-col gap-2 py-5">
      <p ref={sampleRef} className={token.className}>
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
