"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
<<<<<<< Updated upstream:movie-database/src/components/ui/mode-toggle.tsx

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
=======
import { Button } from "@/components/ui/Button";
>>>>>>> Stashed changes:movie-database/src/components/layouts/header/navigation/ModeToggle.tsx

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
