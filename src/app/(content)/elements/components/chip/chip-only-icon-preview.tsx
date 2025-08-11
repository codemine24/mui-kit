import * as React from "react";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import { alpha } from "@mui/system";

export const ChipOnlyIconPreview = () => {
  return (
    <Stack sx={{ flexWrap: { xs: "nowrap" }, gap: 1 }} direction="row">
      <Chip
        sx={{
          m: 0,
          borderRadius: "50px",
          aspectRatio: 1 / 1,
          [`& .${chipClasses.label}`]: {
            display: "none",
          },
          [`& .${chipClasses.icon}`]: {
            m: 0,
          },
        }}
        icon={<FaceIcon />}
        label="With Icon"
      />
      <Chip
        sx={{
          m: 0,
          bgcolor: `${alpha("#367BF5", 0.3)}`,
          borderRadius: "50px",
          aspectRatio: 1 / 1,
          [`& .${chipClasses.label}`]: {
            display: "none",
          },
          [`& .${chipClasses.icon}`]: {
            m: 0,
            color: "#183CAD",
          },
        }}
        icon={<VerifiedIcon />}
        label="With Icon"
      />
      <Chip
        sx={{
          m: 0,
          borderRadius: "50px",
          aspectRatio: 1 / 1,
          [`& .${chipClasses.label}`]: {
            display: "none",
          },
          [`& .${chipClasses.icon}`]: {
            m: 0,
          },
        }}
        icon={<AccountCircleIcon />}
        label="With Icon"
      />
      <Chip
        sx={{
          m: 0,
          bgcolor: `${alpha("#367BF5", 0.3)}`,
          borderRadius: "50px",
          aspectRatio: 1 / 1,
          [`& .${chipClasses.label}`]: {
            display: "none",
          },
          [`& .${chipClasses.icon}`]: {
            m: 0,
            color: "#183CAD",
          },
        }}
        icon={<InfoIcon />}
        label="With Icon"
      />
    </Stack>
  );
};
