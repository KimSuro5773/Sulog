import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  type DimensionToken,
  DimensionTokenList,
} from "./dimension-token-list";

const containerTokens: DimensionToken[] = [
  {
    name: "--container-list",
    example: "max-w-list",
    measureClassName: "max-w-list",
    usage: "메인 화면, 글 목록의 최대 너비",
  },
  {
    name: "--container-article",
    example: "max-w-article",
    measureClassName: "max-w-article",
    usage: "글 본문의 최대 너비",
  },
];

const breakpointTokens: DimensionToken[] = [
  {
    name: "--breakpoint-tablet",
    example: "tablet:",
    measureClassName: "max-w-(--breakpoint-tablet)",
    usage: "이 너비부터 태블릿 레이아웃",
  },
  {
    name: "--breakpoint-desktop",
    example: "desktop:",
    measureClassName: "max-w-(--breakpoint-desktop)",
    usage: "이 너비부터 데스크톱 레이아웃",
  },
];

const meta = {
  title: "Foundations/Size",
  component: DimensionTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof DimensionTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Container: Story = {
  args: { tokens: containerTokens },
};

export const Breakpoint: Story = {
  args: { tokens: breakpointTokens },
};
