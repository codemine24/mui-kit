import { createTheme, PaletteMode } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";
import { shape } from "./shape";
import { typography } from "./typography";

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    shape,
  });
};
