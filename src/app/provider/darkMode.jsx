"use client";

import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "@app/styles/darkTheme";
import lightTheme from "@app/styles/lightTheme";
import { useState, createContext, useContext } from "react";

const ColorModeContext = createContext();

export function useColorMode() {
  return useContext(ColorModeContext);
}
export default function ColorModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ColorModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
