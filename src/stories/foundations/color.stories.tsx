import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { type ColorToken, ColorTokenList } from "./color-token-list";

const foregroundTokens: ColorToken[] = [
  {
    name: "fg.neutral",
    cssVar: "--fg-neutral",
    className: "text-neutral",
    usage: "본문, 제목 등 기본 글자",
  },
  {
    name: "fg.neutral-muted",
    cssVar: "--fg-neutral-muted",
    className: "text-neutral-muted",
    usage: "보조 설명, 메타 정보",
  },
  {
    name: "fg.neutral-subtle",
    cssVar: "--fg-neutral-subtle",
    className: "text-neutral-subtle",
    usage: "날짜, 캡션 등 가장 약한 글자",
  },
  {
    name: "fg.disabled",
    cssVar: "--fg-disabled",
    className: "text-disabled",
    usage: "비활성 상태의 글자",
  },
  {
    name: "fg.brand",
    cssVar: "--fg-brand",
    className: "text-brand",
    usage: "링크, 강조 글자",
  },
  {
    name: "fg.brand-hover",
    cssVar: "--fg-brand-hover",
    className: "text-brand-hover",
    usage: "링크에 마우스를 올렸을 때",
  },
  {
    name: "fg.on-brand-solid",
    cssVar: "--fg-on-brand-solid",
    className: "text-on-brand-solid",
    usage: "brand-solid 배경 위 글자",
    surface: "bg-brand-solid",
  },
  {
    name: "fg.informative",
    cssVar: "--fg-informative",
    className: "text-informative",
    usage: "정보 안내",
  },
  {
    name: "fg.positive",
    cssVar: "--fg-positive",
    className: "text-positive",
    usage: "성공, 완료 안내",
  },
  {
    name: "fg.important",
    cssVar: "--fg-important",
    className: "text-important",
    usage: "중요 안내",
  },
  {
    name: "fg.warning",
    cssVar: "--fg-warning",
    className: "text-warning",
    usage: "주의 안내",
  },
  {
    name: "fg.critical",
    cssVar: "--fg-critical",
    className: "text-critical",
    usage: "오류, 위험 안내",
  },
];

const backgroundTokens: ColorToken[] = [
  {
    name: "bg.layer-default",
    cssVar: "--bg-layer-default",
    className: "bg-layer-default",
    usage: "페이지 기본 배경",
  },
  {
    name: "bg.layer-default-alpha",
    cssVar: "--bg-layer-default-alpha",
    className: "bg-layer-default-alpha",
    usage: "반투명 헤더 배경",
  },
  {
    name: "bg.layer-floating",
    cssVar: "--bg-layer-floating",
    className: "bg-layer-floating",
    usage: "드롭다운, 팝오버 등 떠 있는 요소 배경",
  },
  {
    name: "bg.overlay",
    cssVar: "--bg-overlay",
    className: "bg-overlay",
    usage: "모달 뒤를 덮는 반투명 배경",
  },
  {
    name: "bg.neutral-weak",
    cssVar: "--bg-neutral-weak",
    className: "bg-neutral-weak",
    usage: "태그, 보조 버튼 배경",
  },
  {
    name: "bg.neutral-subtle",
    cssVar: "--bg-neutral-subtle",
    className: "bg-neutral-subtle",
    usage: "코드 블록, 카드 등 가장 약한 배경",
  },
  {
    name: "bg.disabled",
    cssVar: "--bg-disabled",
    className: "bg-disabled",
    usage: "비활성 요소 배경",
  },
  {
    name: "bg.brand-solid",
    cssVar: "--bg-brand-solid",
    className: "bg-brand-solid",
    usage: "주요 버튼 배경",
  },
  {
    name: "bg.brand-solid-hover",
    cssVar: "--bg-brand-solid-hover",
    className: "bg-brand-solid-hover",
    usage: "주요 버튼에 마우스를 올렸을 때",
  },
  {
    name: "bg.brand-weak",
    cssVar: "--bg-brand-weak",
    className: "bg-brand-weak",
    usage: "선택된 항목 등 약한 브랜드 배경",
  },
  {
    name: "bg.informative-weak",
    cssVar: "--bg-informative-weak",
    className: "bg-informative-weak",
    usage: "정보 안내 상자 배경",
  },
  {
    name: "bg.positive-weak",
    cssVar: "--bg-positive-weak",
    className: "bg-positive-weak",
    usage: "성공 안내 상자 배경",
  },
  {
    name: "bg.important-weak",
    cssVar: "--bg-important-weak",
    className: "bg-important-weak",
    usage: "중요 안내 상자 배경",
  },
  {
    name: "bg.warning-weak",
    cssVar: "--bg-warning-weak",
    className: "bg-warning-weak",
    usage: "주의 안내 상자 배경",
  },
  {
    name: "bg.critical-weak",
    cssVar: "--bg-critical-weak",
    className: "bg-critical-weak",
    usage: "오류 안내 상자 배경",
  },
];

const strokeTokens: ColorToken[] = [
  {
    name: "stroke.neutral-weak",
    cssVar: "--stroke-neutral-weak",
    className: "border-neutral-weak",
    usage: "입력창, 체크박스 등 컨트롤 테두리",
  },
  {
    name: "stroke.neutral-weak-hover",
    cssVar: "--stroke-neutral-weak-hover",
    className: "border-neutral-weak-hover",
    usage: "컨트롤에 마우스를 올렸을 때",
  },
  {
    name: "stroke.neutral-muted",
    cssVar: "--stroke-neutral-muted",
    className: "border-neutral-muted",
    usage: "강조가 필요한 구분선",
  },
  {
    name: "stroke.neutral-subtle",
    cssVar: "--stroke-neutral-subtle",
    className: "border-neutral-subtle",
    usage: "기본 구분선, 카드 테두리",
  },
  {
    name: "stroke.critical",
    cssVar: "--stroke-critical",
    className: "border-critical",
    usage: "오류 상태의 입력창 테두리",
  },
];

const focusRingTokens: ColorToken[] = [
  {
    name: "stroke.focus-ring",
    cssVar: "--stroke-focus-ring",
    className: "outline-focus-ring",
    usage: "키보드 포커스 표시",
  },
];

const meta = {
  title: "Foundations/Color",
  component: ColorTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof ColorTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Foreground: Story = {
  args: { tokens: foregroundTokens, preview: "text" },
};

export const Background: Story = {
  args: { tokens: backgroundTokens, preview: "background" },
};

export const Stroke: Story = {
  args: { tokens: strokeTokens, preview: "border" },
};

export const FocusRing: Story = {
  args: { tokens: focusRingTokens, preview: "outline" },
};
