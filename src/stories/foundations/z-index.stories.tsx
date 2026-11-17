import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { type ZIndexToken, ZIndexTokenList } from "./z-index-token-list";

const zIndexTokens: ZIndexToken[] = [
  { className: "z-header", usage: "상단 고정 헤더" },
  { className: "z-floating", usage: "드롭다운, 툴팁 등 떠 있는 요소" },
  { className: "z-overlay", usage: "모달 뒤를 덮는 반투명 배경" },
  { className: "z-modal", usage: "모달, 검색 창" },
  { className: "z-toast", usage: "알림 메시지" },
];

const meta = {
  title: "Foundations/Z-index",
  component: ZIndexTokenList,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof ZIndexTokenList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ZIndex: Story = {
  name: "Z-index",
  args: { tokens: zIndexTokens },
};
