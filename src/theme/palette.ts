import { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#007074" },
  secondary: { main: "#24a76b" },
  background: {
    default: "#fafbff",
    paper: "#f3f5f7",
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
  secondary: { main: "#24a76b" },
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
