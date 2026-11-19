import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  type TypographyToken,
  TypographyTokenList,
} from "./typography-token-list";

const responsiveTokens: TypographyToken[] = [
  { className: "text-display", usage: "메인 화면 대표 문구" },
  { className: "text-title-1", usage: "글 제목" },
  { className: "text-title-2", usage: "본문 h2" },
  { className: "text-title-3", usage: "본문 h3" },
  { className: "text-title-4", usage: "본문 h4" },
  { className: "text-subtitle", usage: "글 부제목, 요약" },
];

const fixedTokens: TypographyToken[] = [
  { className: "text-title-5", usage: "카드, 목록 항목 제목" },
  { className: "text-body-lg", usage: "글 본문" },
  { className: "text-body", usage: "기본 글자, UI 글자" },
  { className: "text-label", usage: "버튼, 입력창, 탭 이름" },
  { className: "text-caption", usage: "날짜, 태그 등 보조 정보" },
  { className: "text-logo", usage: "헤더 로고", sample: "Sulog" },
  {
    className: "text-footer-title",
    usage: "푸터 블로그 이름",
    sample: "Sulog",
  },
  {
    className: "font-mono text-code",
    usage: "코드 블록",
    sample: "const sum = (a, b) => a + b;",
  },
  {
    className: "font-mono text-code-inline",
    usage: "본문 속 인라인 코드 (주변 글자 크기의 0.9배)",
    sample: "useState()",
  },
];

const meta = {
  title: "Foundations/Typography",
  component: TypographyTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof TypographyTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Responsive: Story = {
  args: { tokens: responsiveTokens },
};

export const ResponsiveOnMobile: Story = {
  args: { tokens: responsiveTokens },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Fixed: Story = {
  args: { tokens: fixedTokens },
};
