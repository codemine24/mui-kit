import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/system";

export const ChipCustomNumberPreview = () => {
  return (
    <Stack direction="row">
      <Chip
        size="medium"
        sx={{
          bgcolor: "#bbe5d6",
          color: "#045f45",

          [`& .${chipClasses.avatar}`]: {
            m: 0,
            p: 1.8,
            color: "#ffffff",
            background: "linear-gradient(136deg,#4EC59C 0%,#37AF63 100%)",
          },
        }}
        avatar={<Avatar>3</Avatar>}
        label="Avatar"
      />
    </Stack>
  );
};
