import { jetbrainsMono, pretendard } from "@/app/fonts";
import { ReactRenderer, type Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

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
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className="bg-layer-default text-neutral">
        <Story />
      </div>
    ),
  ],
};

export default preview;
