import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { type MotionToken, MotionTokenList } from "./motion-token-list";

const motionTokens: MotionToken[] = [
  { className: "duration-fast", usage: "버튼 색 변화 등 작은 변화" },
  { className: "duration-base", usage: "드롭다운 열기, 토글 등 일반적인 전환" },
  { className: "duration-slow", usage: "모달 등 큰 영역의 등장과 이동" },
];

const meta = {
  title: "Foundations/Motion",
  component: MotionTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof MotionTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Motion: Story = {
  args: { tokens: motionTokens },
};
