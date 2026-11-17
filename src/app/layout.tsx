import "./globals.css";
import { jetbrainsMono, pretendard } from "./fonts";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/provider/theme-provider";

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
          <div className="isolate">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
