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
    description: "다른 검색어를 입력하거나, 단어를 줄여서 다시 검색해 보세요.",
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
