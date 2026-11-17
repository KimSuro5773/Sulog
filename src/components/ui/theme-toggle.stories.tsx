import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ThemeProvider } from "@/provider/theme-provider";

import { ThemeToggle } from "./theme-toggle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
