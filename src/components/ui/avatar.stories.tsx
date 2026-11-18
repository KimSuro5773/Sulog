import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar } from "./avatar";

const sampleImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#d6e4ff"/><circle cx="32" cy="25" r="12" fill="#3466d6"/><path d="M8 64c2-15 12-23 24-23s22 8 24 23z" fill="#3466d6"/></svg>',
)}`;

const sizes = [
  { size: "sm", label: "sm 24px" },
  { size: "md", label: "md 32px · 댓글, 최신 댓글" },
  { size: "lg", label: "lg 56px · 작성자 소개, 소개 페이지" },
] as const;

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "수로",
    size: "md",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    src: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: { src: sampleImage },
};

export const ImageError: Story = {
  args: { src: "/not-found-avatar.png" },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4">
      {sizes.map(({ size, label }) => (
        <div key={size} className="flex items-center gap-4">
          <Avatar name="수로" size={size} />
          <Avatar name="suro" size={size} src={sampleImage} />
          <span className="text-caption text-neutral-subtle">{label}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithName: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <Avatar name="김개발" />
        <div className="flex flex-col">
          <span className="text-label text-neutral">김개발</span>
          <span className="text-caption text-neutral-subtle">2026.09.24</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="수로" size="lg" src={sampleImage} />
        <div className="flex flex-col gap-1">
          <span className="text-title-5 text-neutral">수로</span>
          <span className="text-body text-neutral-muted">
            배우고 만든 것을 기록하는 개발자입니다.
          </span>
        </div>
      </div>
    </div>
  ),
};
