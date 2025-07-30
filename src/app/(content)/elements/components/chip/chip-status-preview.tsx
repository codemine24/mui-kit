import * as React from "react";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

export const ChipStatusPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        variant="outlined"
        sx={{
          [`& .${chipClasses.label}`]: {
            display: "flex",
            gap: 1,
            alignItems: "center",
          },
        }}
        label={
          <>
            <span>With Icon</span>
            <FaceIcon />
          </>
        }
      />
    </Stack>
  );
};
