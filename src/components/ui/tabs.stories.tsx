import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const categories = [
  { value: "all", label: "전체" },
  { value: "frontend", label: "프론트엔드" },
  { value: "backend", label: "백엔드" },
  { value: "infra", label: "인프라" },
  { value: "retrospect", label: "회고" },
];

const sections = [
  {
    value: "overview",
    label: "개요",
    description: "프로젝트의 목표와 구성을 소개합니다.",
  },
  {
    value: "install",
    label: "설치",
    description: "필요한 도구와 설치 순서를 안내합니다.",
  },
  {
    value: "config",
    label: "설정",
    description: "환경 변수와 설정 파일을 설명합니다.",
  },
  {
    value: "deploy",
    label: "배포",
    description: "배포 과정과 확인 방법을 정리합니다.",
  },
];

const meta = {
  title: "Components/Tabs",
  component: TabsList,
  tags: ["autodocs"],
  args: {
    size: "sm",
    layout: "hug",
    divider: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
    layout: { control: "inline-radio", options: ["hug", "fill"] },
  },
  render: (args) => (
    <Tabs defaultValue="all">
      <TabsList {...args}>
        {categories.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
} satisfies Meta<typeof TabsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: ["#tab-sm-hover", "#tab-md-hover"],
      focusVisible: ["#tab-sm-focus", "#tab-md-focus"],
    },
  },
  render: () => (
    <div className="grid grid-cols-[repeat(6,auto)] items-center justify-start gap-x-10 gap-y-4">
      {["", "기본", "호버", "선택", "포커스", "비활성"].map((label) => (
        <span key={label} className="text-caption text-neutral-subtle">
          {label}
        </span>
      ))}
      {(["sm", "md"] as const).map((size) => (
        <div key={size} className="contents">
          <span className="text-caption text-neutral-subtle">{size}</span>
          <Tabs value={null}>
            <TabsList size={size}>
              <TabsTrigger value="default">프론트엔드</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs value={null}>
            <TabsList size={size}>
              <TabsTrigger id={`tab-${size}-hover`} value="hover">
                프론트엔드
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs value="selected">
            <TabsList size={size}>
              <TabsTrigger value="selected">프론트엔드</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs value={null}>
            <TabsList size={size}>
              <TabsTrigger id={`tab-${size}-focus`} value="focus">
                프론트엔드
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs value={null}>
            <TabsList size={size}>
              <TabsTrigger value="disabled" disabled>
                프론트엔드
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      ))}
    </div>
  ),
};

export const Fill: Story = {
  args: { layout: "fill" },
  render: (args) => (
    <Tabs defaultValue="post" className="max-w-md">
      <TabsList {...args}>
        <TabsTrigger value="post">글</TabsTrigger>
        <TabsTrigger value="series">시리즈</TabsTrigger>
        <TabsTrigger value="tag">태그</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const WithDivider: Story = {
  args: { size: "md", divider: true },
  render: (args) => (
    <Tabs defaultValue="overview" className="max-w-xl">
      <TabsList {...args}>
        {sections.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map(({ value, description }) => (
        <TabsContent key={value} value={value} className="pt-4">
          <p className="text-body text-neutral-muted">{description}</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Scrollable: Story = {
  render: (args) => (
    <Tabs defaultValue="all" className="w-56">
      <TabsList {...args}>
        {categories.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};
