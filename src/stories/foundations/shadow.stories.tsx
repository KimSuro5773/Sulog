import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { type ShadowToken, ShadowTokenList } from "./shadow-token-list";

const shadowTokens: ShadowToken[] = [
  {
    className: "shadow-md",
    cssVar: "--elevation-md",
    usage: "드롭다운, 팝오버 등 떠 있는 요소",
  },
];

const meta = {
  title: "Foundations/Shadow",
  component: ShadowTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof ShadowTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shadow: Story = {
  args: { tokens: shadowTokens },
};
