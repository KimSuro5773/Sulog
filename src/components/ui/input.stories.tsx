import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "lucide-react";

import { Field, FieldError } from "./field";
import { Input } from "./input";

const placeholder = "글 제목이나 내용을 검색해 보세요";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "search",
    "aria-label": "검색어",
    placeholder,
    icon: <Search />,
  },
  argTypes: {
    icon: { control: false },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const narrow: NonNullable<Story["decorators"]> = [
  (Story) => <div className="max-w-md">{Story()}</div>,
];

export const Default: Story = {
  decorators: narrow,
};

export const WithoutIcon: Story = {
  args: { icon: undefined },
  decorators: narrow,
};

export const Disabled: Story = {
  args: { disabled: true },
  decorators: narrow,
};

export const WithError: Story = {
  decorators: narrow,
  render: (args) => (
    <Field invalid>
      <Input {...args} />
      <FieldError>검색어를 두 글자 이상 입력해 주세요.</FieldError>
    </Field>
  ),
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: "#input-hover",
      focus: "#input-focus",
    },
  },
  decorators: [(Story) => <div className="max-w-5xl">{Story()}</div>],
  render: () => (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">
      {[
        { label: "기본", props: {} },
        { label: "호버", props: { id: "input-hover" } },
        { label: "포커스", props: { id: "input-focus" } },
        { label: "비활성", props: { disabled: true } },
      ].map(({ label, props }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-caption text-neutral-subtle">{label}</span>
          <Input
            type="search"
            aria-label="검색어"
            placeholder={placeholder}
            icon={<Search />}
            {...props}
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="text-caption text-neutral-subtle">오류</span>
        <Field invalid>
          <Input
            type="search"
            aria-label="검색어"
            placeholder={placeholder}
            icon={<Search />}
          />
          <FieldError>검색어를 두 글자 이상 입력해 주세요.</FieldError>
        </Field>
      </div>
    </div>
  ),
};
