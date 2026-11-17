import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/nextjs-vite";

import "@/app/globals.css";
import { jetbrainsMono, pretendard } from "@/app/fonts";

document.documentElement.classList.add(
  pretendard.variable,
  jetbrainsMono.variable,
);

document.documentElement.lang = "ko";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          [
            "Color",
            "Typography",
            "Spacing",
            "Size",
            "Radius",
            "Shadow",
            "Motion",
            "Z-index",
          ],
          "Components",
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className="isolate bg-layer-default text-neutral">
        <Story />
      </div>
    ),
  ],
};

export default preview;
