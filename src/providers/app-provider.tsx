"use client";

import { getTheme } from "@/theme/theme";
import { setThemeCSSVars } from "@/theme/utils";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

type Mode = "light" | "dark";

const ColorModeContext = React.createContext({
  mode: "light" as Mode,
  toggleColorMode: () => {},
});

export const useColorMode = () => React.useContext(ColorModeContext);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode | null>(null);
  const theme = useMemo(() => getTheme(mode || "dark"), [mode]);

  const toggleColorMode = () => {
    if (!mode) return;
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mui-mode", newMode);
  };

  useEffect(() => {
    if (theme) {
      setThemeCSSVars(theme);
    }
  }, [theme]);

  useEffect(() => {
    const storedMode = localStorage.getItem("mui-mode") as Mode | null;
    if (storedMode) {
      setMode(storedMode);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultMode: Mode = prefersDark ? "dark" : "light";
      setMode(defaultMode);
      localStorage.setItem("mui-mode", defaultMode);
    }
  }, []);

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
