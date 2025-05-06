"use client";

import { getTheme } from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useMemo, useEffect, useState } from "react";

type Mode = "light" | "dark";

const ColorModeContext = React.createContext({
  mode: "dark" as Mode,
  toggleColorMode: () => {},
});

export const useColorMode = () => React.useContext(ColorModeContext);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const storedMode = localStorage.getItem("mui-mode") as Mode | null;
    if (storedMode) {
      setMode(storedMode);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultMode: Mode = prefersDark ? "dark" : "light";
      setMode(defaultMode);
      localStorage.setItem("mui-mode", defaultMode);
    }
  }, []);

  const toggleColorMode = () => {
    if (!mode) return;
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mui-mode", newMode);
  };

  const theme = useMemo(() => getTheme(mode || "dark"), [mode]);

  if (!mode) return null;

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
