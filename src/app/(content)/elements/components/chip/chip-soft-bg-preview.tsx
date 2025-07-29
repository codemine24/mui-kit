import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/system";

export const ChipSoftBgPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#367BF5", 0.3)}`,
          color: "#367BF5",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#A22F2D", 0.3)}`,
          color: "#A22F2D",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#045f45", 0.3)}`,
          color: "#045f45",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#fef3c7", 1)}`,
          color: "#93410e",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#413ba9", 0.3)}`,
          color: "#413ba9",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lorem ipsum"
        sx={{
          bgcolor: `${alpha("#5e25b7", 0.3)}`,
          color: "#5e25b7",
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
    </Stack>
  );
};
