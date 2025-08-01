import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipRoundedPreview = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Lorem ipsum"
        sx={{
          color: "#ffffff",
          bgcolor: "primary.main",
          fontSize: "20px",
        }}
      />
    </Stack>
  );
};
