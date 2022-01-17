import { createContext, useState } from "react";

interface ThemeContextInterface {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
