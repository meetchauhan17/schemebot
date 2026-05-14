"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleButtonProps {
  className?: string;
  iconSize?: string;
}

export default function ThemeToggleButton({
  className = "p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative flex items-center justify-center",
  iconSize = "w-5 h-5",
}: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={className}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {/* Sun icon is hidden by default, shown in dark mode */}
      <Sun className={`${iconSize} hidden dark:block`} />
      {/* Moon icon is shown by default, hidden in dark mode */}
      <Moon className={`${iconSize} block dark:hidden`} />
    </button>
  );
}
