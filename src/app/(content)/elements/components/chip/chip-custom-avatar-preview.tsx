import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipCustomAvatarPreview = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={
          <Avatar
            alt="Fazly Alahi"
            src="https://avatars.githubusercontent.com/u/151907553?s=40&v=4"
          />
        }
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
};
