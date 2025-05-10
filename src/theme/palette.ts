import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#007074" },
  secondary: { main: "#333" },
  background: {
    default: "#ffffff",
    paper: "#F5F9FD",
  },
  text: {
    primary: "#111",
    secondary: "#555",
  },
  divider: "#ebebeb",
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: { main: "#007074" },
  secondary: { main: "#3e9" },
  background: {
    default: "#161616",
    paper: "#1C1C1C",
  },
  text: {
    primary: "#fff",
    secondary: "#bbb",
  },
  divider: "#383939",
};
