export const chipCustomSizeString = `import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipCustomSizePreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
      alignItems="center" 
    >
      <Chip
        label="Fashion"
        sx={{
          borderRadius: 1,
          fontWeight: "bold",
          height: 50,
        }}
      />
      <Chip
        label="Commercial"
        sx={{
          borderRadius: 50,
          fontWeight: "bold",
          width: 200,
          height: 20,
        }}
      />
      <Chip
        label="Lifestyle"
        sx={{
          borderRadius: "1rem 0 0 1rem",
          fontWeight: "bold",
        }}
      />
    </Stack>
  );
};`;
