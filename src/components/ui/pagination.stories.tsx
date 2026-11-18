import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Route } from "next";

import { Pagination } from "./pagination";

const getPageHref = (page: number): Route => `?page=${page}`;

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    page: 1,
    totalPages: 12,
    getPageHref,
  },
  argTypes: {
    page: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
    getPageHref: { control: false },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MiddlePage: Story = {
  args: { page: 7 },
};

export const LastPage: Story = {
  args: { page: 12 },
};

export const FewPages: Story = {
  args: { page: 2, totalPages: 3 },
};

export const SinglePage: Story = {
  args: { totalPages: 1 },
};

export const States: Story = {
  args: { totalPages: 5 },
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: ["#pagination-states li:nth-child(3) > a"],
      focusVisible: ["#pagination-states li:nth-child(4) > a"],
    },
  },
  render: (args) => (
    <div id="pagination-states" className="flex flex-col items-start gap-3">
      <Pagination {...args} />
      <p className="text-caption text-neutral-subtle">
        이전: 비활성 · 1: 현재 · 2: 호버 · 3: 포커스 · 4, 5: 기본
      </p>
    </div>
  ),
};

export const OnMobile: Story = {
  args: { page: 7 },
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
