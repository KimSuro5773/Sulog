import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ThemeProvider } from "@/provider/theme-provider";

import { Header } from "./header";

const meta = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/" },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {};

export const Articles: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/articles" } },
  },
};

export const ArticleDetail: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/articles/sample-post" } },
  },
};

export const TagPage: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/tags/Docker" } },
  },
};

export const OnMobile: Story = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
