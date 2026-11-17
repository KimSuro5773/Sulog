import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/nextjs-vite",
  features: { backgrounds: false },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, { plugins: [tailwindcss()] });
  },
};

export default config;
