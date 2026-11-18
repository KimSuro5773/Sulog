import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Field, FieldCount, FieldDescription, FieldError } from "./field";
import { Textarea } from "./textarea";

const maxLength = 1000;

function CommentField() {
  const [comment, setComment] = useState("");

  return (
    <Field>
      <Textarea
        aria-label="댓글"
        placeholder="댓글을 남겨 주세요"
        maxLength={maxLength}
        value={comment}
        onValueChange={setComment}
      />
      <FieldDescription>줄바꿈은 그대로 표시됩니다.</FieldDescription>
      <FieldCount current={comment.length} max={maxLength} />
    </Field>
  );
}

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    "aria-label": "댓글",
    placeholder: "댓글을 남겨 주세요",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

const narrow: NonNullable<Story["decorators"]> = [
  (Story) => <div className="max-w-md">{Story()}</div>,
];

export const Default: Story = {
  decorators: narrow,
};

export const Disabled: Story = {
  args: { disabled: true },
  decorators: narrow,
};

export const WithDescriptionAndCount: Story = {
  parameters: { controls: { disable: true } },
  decorators: narrow,
  render: () => <CommentField />,
};

export const WithError: Story = {
  decorators: narrow,
  render: (args) => (
    <Field invalid>
      <Textarea {...args} />
      <FieldError>댓글 내용을 입력해 주세요.</FieldError>
      <FieldCount current={0} max={maxLength} />
    </Field>
  ),
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: "#textarea-hover",
      focus: "#textarea-focus",
    },
  },
  decorators: [(Story) => <div className="max-w-5xl">{Story()}</div>],
  render: () => (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">
      {[
        { label: "기본", props: {} },
        { label: "호버", props: { id: "textarea-hover" } },
        { label: "포커스", props: { id: "textarea-focus" } },
        { label: "비활성", props: { disabled: true } },
      ].map(({ label, props }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-caption text-neutral-subtle">{label}</span>
          <Textarea
            aria-label="댓글"
            placeholder="댓글을 남겨 주세요"
            {...props}
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="text-caption text-neutral-subtle">오류</span>
        <Field invalid>
          <Textarea aria-label="댓글" placeholder="댓글을 남겨 주세요" />
          <FieldError>댓글 내용을 입력해 주세요.</FieldError>
          <FieldCount current={0} max={maxLength} />
        </Field>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-neutral-subtle">
          도움말과 글자 수
        </span>
        <Field>
          <Textarea aria-label="댓글" placeholder="댓글을 남겨 주세요" />
          <FieldDescription>줄바꿈은 그대로 표시됩니다.</FieldDescription>
          <FieldCount current={0} max={maxLength} />
        </Field>
      </div>
    </div>
  ),
};
