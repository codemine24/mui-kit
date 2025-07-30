import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

export const ChipDeletableIconPreview = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Deletable chip"
        color="error"
        onDelete={handleDelete}
        avatar={
          <Avatar src="https://avatars.githubusercontent.com/u/151907553?s=40&v=4" />
        }
      />
    </Stack>
  );
};
