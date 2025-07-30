import * as React from "react";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

export const ChipOnlyIconPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        sx={{
          [`& .${chipClasses.label}`]: {
            display: "none",
          },
        }}
        icon={<FaceIcon />}
        label="With Icon"
      />
    </Stack>
  );
};
