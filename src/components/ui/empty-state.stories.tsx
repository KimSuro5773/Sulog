import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchX } from "lucide-react";

import { EmptyState } from "./empty-state";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  args: {
    icon: <SearchX />,
    title: "‘프론트엔드’와 일치하는 글이 없습니다",
    description: "검색어를 변경하거나 다른 키워드로 검색해 보세요.",
  },
  argTypes: {
    icon: { control: false },
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: { description: undefined },
};

export const LongTitle: Story = {
  args: {
    title: `‘${"kubernetes".repeat(8)}’와 일치하는 글이 없습니다`,
  },
  parameters: {
    docs: {
      description: {
        story: "끊을 곳이 없는 긴 검색어도 줄바꿈합니다.",
      },
    },
  },
};
