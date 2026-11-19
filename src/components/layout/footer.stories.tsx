import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnMobile: Story = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
