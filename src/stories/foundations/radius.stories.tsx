import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { type RadiusToken, RadiusTokenList } from "./radius-token-list";

const radiusTokens: RadiusToken[] = [
  { className: "rounded-sm", usage: "태그, 입력창, 작은 버튼" },
  { className: "rounded-md", usage: "카드, 드롭다운, 코드 블록" },
  { className: "rounded-lg", usage: "모달 등 큰 영역" },
];

const meta = {
  title: "Foundations/Radius",
  component: RadiusTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof RadiusTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  args: { tokens: radiusTokens },
};
