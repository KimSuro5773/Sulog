import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  weight: "45 920",
  variable: "--font-pretendard",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});

export const jetbrainsMono = localFont({
  src: "./JetBrainsMono-Regular.woff2",
  weight: "400",
  variable: "--font-jetbrains-mono",
  preload: false,
  adjustFontFallback: false,
});
