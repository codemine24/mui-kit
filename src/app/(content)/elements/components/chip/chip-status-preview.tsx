import * as React from "react";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { alpha } from "@mui/system";

export const ChipStatusPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip
        sx={{
          bgcolor: `${alpha("#08C108", 0.1)}`,
          color: "#08C108",
          borderRadius: 2,
          [`& .${chipClasses.label}`]: {
            display: "flex",
            gap: 1,
            alignItems: "center",
            fontSize: "1rem",
          },
        }}
        label={
          <>
            <FiberManualRecordIcon sx={{ fontSize: "0.8rem" }} />
            <span>Online</span>
          </>
        }
      />
      <Chip
        sx={{
          bgcolor: `${alpha("#ff0000", 0.1)}`,
          color: "#ff0000",
          borderRadius: 2,
          [`& .${chipClasses.label}`]: {
            display: "flex",
            gap: 1,
            alignItems: "center",
            fontSize: "1rem",
          },
        }}
        label={
          <>
            <FiberManualRecordIcon sx={{ fontSize: "0.8rem" }} />
            <span>Offline</span>
          </>
        }
      />
    </Stack>
  );
};
