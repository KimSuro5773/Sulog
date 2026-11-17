import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Copy, Search } from "lucide-react";

import { IconButton } from "./icon-button";

const variants = [
  { variant: "ghost", label: "Ghost" },
  { variant: "primary", label: "Primary" },
  { variant: "secondary", label: "Secondary" },
] as const;

const states = [
  { state: "default", label: "기본" },
  { state: "hover", label: "호버" },
  { state: "active", label: "누름" },
  { state: "focus", label: "포커스" },
  { state: "disabled", label: "비활성" },
] as const;

const stateId = (variant: string, state: string) => `icon-${variant}-${state}`;

const selectorsFor = (state: string) =>
  variants.map(({ variant }) => `#${stateId(variant, state)}`);

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    "aria-label": "검색",
    children: <Search />,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ghost", "primary", "secondary"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    disabled: { control: "boolean" },
    children: { control: false },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Ghost: Story = {};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
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
    <div className="grid grid-cols-[auto_repeat(5,auto)] items-center justify-start gap-x-10 gap-y-6">
      <span />
      {states.map(({ state, label }) => (
        <span key={state} className="text-caption text-neutral-subtle">
          {label}
        </span>
      ))}
      {variants.map(({ variant, label }) => [
        <span key={variant} className="text-label text-neutral-muted">
          {label}
        </span>,
        ...states.map(({ state }) => (
          <IconButton
            key={`${variant}-${state}`}
            id={stateId(variant, state)}
            variant={variant}
            aria-label="검색"
            disabled={state === "disabled"}
          >
            <Search />
          </IconButton>
        )),
      ])}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} size="md" aria-label="검색">
        <Search />
      </IconButton>
      <IconButton {...args} size="sm" aria-label="코드 복사">
        <Copy />
      </IconButton>
    </div>
  ),
};

export const SizesOnMobile: Story = {
  ...Sizes,
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};
