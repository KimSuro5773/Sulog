import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import { toast } from "sonner";

import { Button } from "./button";
import { Toaster } from "./sonner";

const examples = [
  { label: "기본", show: () => toast("임시 저장한 댓글을 불러왔습니다.") },
  { label: "성공", show: () => toast.success("링크를 복사했습니다.") },
  {
    label: "오류",
    show: () =>
      toast.error("댓글을 등록하지 못했습니다. 잠시 후 다시 시도해 주세요."),
  },
  {
    label: "주의",
    show: () =>
      toast.warning("인터넷 연결이 끊겼습니다. 연결되면 다시 시도합니다."),
  },
  {
    label: "정보",
    show: () =>
      toast.info("이 글은 2025년에 작성되어 일부 내용이 다를 수 있습니다."),
  },
  { label: "진행 중", show: () => toast.loading("댓글을 등록하는 중입니다.") },
  {
    label: "설명 포함",
    show: () =>
      toast.success("댓글을 등록했습니다.", {
        description: "작성한 댓글은 글 아래에서 확인할 수 있습니다.",
      }),
  },
  {
    label: "진행 중 → 성공",
    show: () => {
      const id = toast.loading("댓글을 등록하는 중입니다.");
      setTimeout(() => toast.success("댓글을 등록했습니다.", { id }), 2000);
    },
  },
];

function ToastPlayground() {
  useEffect(() => () => void toast.dismiss(), []);

  return (
    <div className="flex flex-wrap gap-2">
      {examples.map(({ label, show }) => (
        <Button key={label} variant="secondary" size="sm" onClick={show}>
          {label}
        </Button>
      ))}
      <Toaster />
    </div>
  );
}

function AllStatesDemo() {
  useEffect(() => {
    let cancelled = false;
    const options = { duration: Infinity };

    const bodyFont = getComputedStyle(document.body).fontFamily;
    void document.fonts.load(`500 13px ${bodyFont}`).then(() => {
      if (cancelled) return;
      toast("임시 저장한 댓글을 불러왔습니다.", options);
      toast.success("링크를 복사했습니다.", options);
      toast.error(
        "댓글을 등록하지 못했습니다. 잠시 후 다시 시도해 주세요.",
        options,
      );
      toast.warning(
        "인터넷 연결이 끊겼습니다. 연결되면 다시 시도합니다.",
        options,
      );
      toast.info(
        "이 글은 2025년에 작성되어 일부 내용이 다를 수 있습니다.",
        options,
      );
      toast.loading("댓글을 등록하는 중입니다.", options);
    });

    return () => {
      cancelled = true;
      toast.dismiss();
    };
  }, []);

  return <Toaster expand visibleToasts={6} />;
}

const meta = {
  title: "Components/Toast",
  component: Toaster,
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <ToastPlayground />,
};

export const AllStates: Story = {
  render: () => <AllStatesDemo />,
};
