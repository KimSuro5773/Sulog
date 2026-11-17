"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { IconButton } from "@/components/ui/icon-button";

const themeOptions = {
  system: { Icon: Monitor, next: "light", nextLabel: "라이트 테마로 변경" },
  light: { Icon: Sun, next: "dark", nextLabel: "다크 테마로 변경" },
  dark: { Icon: Moon, next: "system", nextLabel: "시스템 테마로 변경" },
} as const;

type ThemeOption = keyof typeof themeOptions;

const isThemeOption = (theme: string | undefined): theme is ThemeOption =>
  theme !== undefined && theme in themeOptions;

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const current = mounted && isThemeOption(theme) ? themeOptions[theme] : null;

  return (
    <IconButton
      aria-label={current?.nextLabel ?? "테마 변경"}
      onClick={() => current && setTheme(current.next)}
    >
      {current && <current.Icon />}
    </IconButton>
  );
}
