import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowUp, Copy, Link, Mail, Search } from "lucide-react";

import { IconButton, iconButtonVariants } from "./icon-button";
import { Tooltip } from "./tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    label: "검색 열기",
    children: <span />,
  },
  argTypes: {
    children: { control: false },
  },
  render: ({ label, ...args }) => (
    <Tooltip {...args} label={label}>
      <IconButton aria-label={label}>
        <Search />
      </IconButton>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  args: { defaultOpen: true },
  decorators: [(Story) => <div className="pb-12">{Story()}</div>],
};

export const OnSmallButton: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="pb-12">
      <Tooltip label="코드 복사" defaultOpen>
        <IconButton aria-label="코드 복사" size="sm">
          <Copy />
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const OnLink: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="pb-12">
      <Tooltip label="이메일 보내기" defaultOpen>
        <a
          href="mailto:hello@example.com"
          aria-label="이메일 보내기"
          className={iconButtonVariants()}
        >
          <Mail />
        </a>
      </Tooltip>
    </div>
  ),
};

export const LongLabel: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const label =
      "이 글의 주소를 클립보드에 복사합니다. 복사한 주소는 메신저나 메일에 붙여 넣어 공유할 수 있습니다.";
    return (
      <div className="pb-24">
        <Tooltip label={label} defaultOpen>
          <IconButton aria-label={label}>
            <Link />
          </IconButton>
        </Tooltip>
      </div>
    );
  },
};

export const FlipToTop: Story = {
  parameters: { layout: "fullscreen", controls: { disable: true } },
  render: () => (
    <div className="flex h-dvh items-end justify-center pb-4">
      <Tooltip label="맨 위로 이동" defaultOpen>
        <IconButton aria-label="맨 위로 이동">
          <ArrowUp />
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const Toolbar: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-1">
      <Tooltip label="검색 열기">
        <IconButton aria-label="검색 열기">
          <Search />
        </IconButton>
      </Tooltip>
      <Tooltip label="링크 복사">
        <IconButton aria-label="링크 복사">
          <Link />
        </IconButton>
      </Tooltip>
      <Tooltip label="이메일 보내기">
        <a
          href="mailto:hello@example.com"
          aria-label="이메일 보내기"
          className={iconButtonVariants()}
        >
          <Mail />
        </a>
      </Tooltip>
    </div>
  ),
};
