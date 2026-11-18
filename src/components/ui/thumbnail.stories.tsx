import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Thumbnail } from "./thumbnail";

const sampleImage = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsl4ba0_ar_r8Iwt0W_e2hbGDpjS_KwjxiEmCGtxz6VA&s'`;

const meta = {
  title: "Components/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
  args: {
    src: sampleImage,
  },
  argTypes: {
    src: { control: "text" },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImage: Story = {
  args: { src: undefined },
};

export const ImageError: Story = {
  args: { src: "/not-found-thumbnail.png" },
};

export const OnMobile: Story = {
  parameters: { controls: { disable: true } },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
  render: () => (
    <div className="flex gap-4">
      <Thumbnail src={sampleImage} />
      <Thumbnail />
    </div>
  ),
};

export const InPostItem: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <a href="#" className="group/post flex max-w-2xl items-center gap-6">
      <Thumbnail src={sampleImage} />
      <div className="flex flex-col gap-1">
        <span className="text-caption text-neutral-subtle">
          인프라 · 2026.09.17
        </span>
        <span className="text-title-5 text-neutral">
          GitHub Actions와 Docker로 Spring Boot 무중단 배포 구성하기
        </span>
      </div>
    </a>
  ),
};
