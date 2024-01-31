"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="transition-all"
    >
      {theme === "light" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
      )}
    </Button>
  );
}
