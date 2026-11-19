import type { Metadata } from "next";

import "./globals.css";
import { jetbrainsMono, pretendard } from "./fonts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/provider/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Sulog",
    template: "%s | Sulog",
  },
  description: "배운 것을 기록하는 개발 블로그입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <div className="isolate grid min-h-dvh grid-cols-1 grid-rows-[auto_1fr_auto]">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
