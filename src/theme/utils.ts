import { Theme } from "@mui/material/styles";

export const setThemeCSSVars = (theme: Theme) => {
  const root = document.documentElement;

  const themeVars: Record<string, string> = {
    "--divider-color": theme.palette.divider
  };

  Object.entries(themeVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
