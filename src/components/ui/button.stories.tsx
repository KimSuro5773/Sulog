import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";

function SubmitExample() {
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button size="sm" loading={loading} onClick={submit}>
      등록
    </Button>
  );
}

const variants = [
  { variant: "primary", label: "Primary", children: "구독하기" },
  { variant: "secondary", label: "Secondary", children: "전체 보기" },
  { variant: "ghost", label: "Ghost", children: "더보기" },
] as const;

const states = [
  { state: "default", label: "기본" },
  { state: "hover", label: "호버" },
  { state: "active", label: "누름" },
  { state: "focus", label: "포커스" },
  { state: "disabled", label: "비활성" },
  { state: "loading", label: "로딩" },
] as const;

const stateId = (variant: string, state: string) => `${variant}-${state}`;

const selectorsFor = (state: string) =>
  variants.map(({ variant }) => `#${stateId(variant, state)}`);

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "구독하기",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary", children: "전체 보기" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "더보기" },
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: [...selectorsFor("hover"), ...selectorsFor("active")],
      active: selectorsFor("active"),
      focusVisible: selectorsFor("focus"),
    },
  },
  render: () => (
    <div className="grid grid-cols-[auto_repeat(6,auto)] items-center justify-start gap-x-10 gap-y-6">
      <span />
      {states.map(({ state, label }) => (
        <span key={state} className="text-caption text-neutral-subtle">
          {label}
        </span>
      ))}
      {variants.map(({ variant, label, children }) => [
        <span key={variant} className="text-label text-neutral-muted">
          {label}
        </span>,
        ...states.map(({ state }) => (
          <Button
            key={`${variant}-${state}`}
            id={stateId(variant, state)}
            variant={variant}
            disabled={state === "disabled"}
            loading={state === "loading"}
          >
            {children}
          </Button>
        )),
      ])}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        등록
      </Button>
      <Button {...args} size="md">
        구독하기
      </Button>
      <Button {...args} size="lg">
        구독하기
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: { variant: "secondary" },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        전체 보기
        <ArrowRight />
      </Button>
      <Button {...args} size="md">
        전체 보기
        <ArrowRight />
      </Button>
      <Button {...args} size="lg">
        전체 보기
        <ArrowRight />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        등록
      </Button>
      <Button {...args} size="md">
        구독하기
      </Button>
      <Button {...args} size="lg">
        구독하기
      </Button>
      <Button {...args} variant="secondary">
        전체 보기
        <ArrowRight />
      </Button>
    </div>
  ),
};

export const LoadingOnSubmit: Story = {
  parameters: { controls: { disable: true } },
  render: () => <SubmitExample />,
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  render: (args) => (
    <div className="max-w-sm">
      <Button {...args} />
    </div>
  ),
};
