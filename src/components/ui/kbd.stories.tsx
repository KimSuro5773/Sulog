import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Kbd } from "./kbd";

const hints = [
  { key: "↑↓", label: "위아래 화살표", action: "이동" },
  { key: "Enter", action: "열기" },
  { key: "Esc", action: "닫기" },
  { key: "⌘K", label: "Command K", action: "검색 열기" },
];

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  args: {
    children: "Esc",
  },
  argTypes: {
    children: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { children: "⌘K", label: "Command K" },
};

export const SingleKey: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>K</Kbd>
      <Kbd>/</Kbd>
      <Kbd label="위 화살표">↑</Kbd>
    </div>
  ),
};

export const ShortcutHints: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {hints.map(({ key, label, action }) => (
        <span
          key={key}
          className="flex items-center gap-1.5 text-caption text-neutral-subtle"
        >
          <Kbd label={label}>{key}</Kbd>
          {action}
        </span>
      ))}
    </div>
  ),
};
