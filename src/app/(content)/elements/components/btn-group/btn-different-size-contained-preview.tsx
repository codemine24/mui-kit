import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Stack } from "@mui/material";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="four">Four</Button>,
];

export const BtnDifferentSizeContainedPreview = () => {
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <ButtonGroup
        variant="contained"
        size="small"
        aria-label="Small button group"
        color="secondary"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="Medium-sized button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="Large button group"
        color="success"
      >
        {buttons}
      </ButtonGroup>
    </Stack>
  );
};
