import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  type DimensionToken,
  DimensionTokenList,
} from "./dimension-token-list";

const scaleTokens: DimensionToken[] = [
  { name: "1", example: "p-1", measureClassName: "max-w-1" },
  { name: "2", example: "p-2", measureClassName: "max-w-2" },
  { name: "3", example: "p-3", measureClassName: "max-w-3" },
  { name: "4", example: "p-4", measureClassName: "max-w-4" },
  { name: "5", example: "p-5", measureClassName: "max-w-5" },
  { name: "6", example: "p-6", measureClassName: "max-w-6" },
  { name: "8", example: "p-8", measureClassName: "max-w-8" },
  { name: "10", example: "p-10", measureClassName: "max-w-10" },
  { name: "12", example: "p-12", measureClassName: "max-w-12" },
  { name: "16", example: "p-16", measureClassName: "max-w-16" },
];

const layoutTokens: DimensionToken[] = [
  {
    name: "--spacing-gutter",
    example: "px-gutter",
    measureClassName: "max-w-gutter",
    usage: "페이지 좌우 여백",
  },
  {
    name: "--spacing-hit",
    example: "min-h-hit min-w-hit",
    measureClassName: "max-w-hit",
    usage: "버튼, 링크 등 누를 수 있는 영역의 최소 크기",
  },
  {
    name: "--spacing-header",
    example: "h-header",
    measureClassName: "max-w-header",
    usage: "헤더 높이, 앵커로 이동할 때 위쪽 여백",
  },
  {
    name: "--spacing-sidebar",
    example: "w-sidebar",
    measureClassName: "max-w-sidebar",
    usage: "사이드바 너비",
  },
];

const meta = {
  title: "Foundations/Spacing",
  component: DimensionTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof DimensionTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  args: { tokens: scaleTokens },
};

export const Layout: Story = {
  args: { tokens: layoutTokens },
};

export const LayoutOnMobile: Story = {
  args: { tokens: layoutTokens },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};
