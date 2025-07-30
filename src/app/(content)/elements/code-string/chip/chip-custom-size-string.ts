export const chipCustomSizeString = `import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipCustomSizePreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        label="Fashion"
        sx={{
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Commercial"
        sx={{
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
      <Chip
        label="Lifestyle"
        sx={{
          borderRadius: 1,
          fontWeight: "bold",
        }}
      />
    </Stack>
  );
};
`;
