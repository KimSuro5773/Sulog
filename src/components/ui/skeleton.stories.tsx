import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Skeleton } from "./skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    className: "h-4 w-64",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Circle: Story = {
  args: { className: "size-10 rounded-full" },
};

export const CommentList: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <section aria-busy="true" className="flex max-w-xl flex-col gap-5">
      <span role="status" className="sr-only">
        댓글을 불러오는 중
      </span>
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex gap-3">
          <Skeleton className="size-7 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-3/5" />
          </div>
        </div>
      ))}
    </section>
  ),
};

export const SearchResults: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <section
      aria-busy="true"
      className="flex max-w-xl flex-col gap-5 rounded-lg bg-layer-floating p-4 shadow-md"
    >
      <span role="status" className="sr-only">
        검색 결과를 불러오는 중
      </span>
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/5" />
        </div>
      ))}
    </section>
  ),
};
