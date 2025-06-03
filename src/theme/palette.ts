import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#007074" },
  secondary: { main: "#333" },
  background: {
    default: "#fafbff",
    paper: "#F2F3F4",
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
    primary: "#fafbff",
    secondary: "#bbb",
  },
  divider: "#383939",
};
