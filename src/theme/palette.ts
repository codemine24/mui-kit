import { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: { main: "#814AE7", dark: "#4C2CCA" },
  secondary: { main: "#24a76b" },
  background: {
    default: "#ffff",
    paper: "#fafafa",
  },
  text: {
    primary: "#111",
    secondary: "#555",
  },
  divider: "#ccc",
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: { main: "#814AE7", dark: "#4C2CCA" },
  secondary: { main: "#24a76b" },
  background: {
    default: "#060010",
    paper: "#0f0c1a",
  },
  text: {
    primary: "#fff",
    secondary: "#D4D4D8",
  },
  divider: "#383939",
};
