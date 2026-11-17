import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Spinner } from "./spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: "text-neutral-subtle" },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-6 text-neutral-subtle">
      <span className="flex items-center gap-2">
        <Spinner size="md" />
        <span className="text-caption">md 20px</span>
      </span>
      <span className="flex items-center gap-2">
        <Spinner size="sm" />
        <span className="text-caption">sm 16px</span>
      </span>
    </div>
  ),
};

export const FollowsTextColor: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-6 text-label">
      <span className="flex items-center gap-2 text-neutral">
        <Spinner size="sm" />
        fg.neutral
      </span>
      <span className="flex items-center gap-2 text-brand">
        <Spinner size="sm" />
        fg.brand
      </span>
      <span className="flex items-center gap-2 text-critical">
        <Spinner size="sm" />
        fg.critical
      </span>
    </div>
  ),
};

export const Standalone: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <section
      aria-busy="true"
      className="flex items-center gap-2 text-neutral-subtle"
    >
      <Spinner />
      <span role="status" className="sr-only">
        글 목록을 불러오는 중
      </span>
    </section>
  ),
};
