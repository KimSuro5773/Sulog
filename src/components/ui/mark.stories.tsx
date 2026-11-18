import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Mark } from "./mark";

function SampleTitle() {
  return (
    <p className="text-title-5 text-neutral">
      <Mark>배포</Mark> 자동화 입문 1편: 수동 <Mark>배포</Mark>에서 벗어나기
    </p>
  );
}

const meta = {
  title: "Components/Mark",
  component: Mark,
  tags: ["autodocs"],
  args: {
    children: "배포",
  },
  argTypes: {
    children: { control: "text" },
  },
  render: (args) => (
    <p className="text-title-5 text-neutral">
      <Mark {...args} /> 자동화 입문 1편: 수동 <Mark {...args} />
      에서 벗어나기
    </p>
  ),
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InSummary: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <p className="max-w-xl text-body text-neutral-muted">
      캐시 무효화 시점을 <Mark>배포</Mark> 파이프라인에 연결해서,{" "}
      <Mark>배포</Mark> 직후에도 오래된 응답이 나가지 않게 했습니다.
    </p>
  ),
};

export const Surfaces: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[auto_auto] items-center justify-start gap-x-10 gap-y-6">
      <span className="text-caption text-neutral-subtle">기본 배경</span>
      <div className="px-6 py-4">
        <SampleTitle />
      </div>
      <span className="text-caption text-neutral-subtle">Floating 배경</span>
      <div className="rounded-lg bg-layer-floating px-6 py-4 shadow-md">
        <SampleTitle />
      </div>
    </div>
  ),
};
