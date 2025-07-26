import * as React from "react";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Stack } from "@mui/material";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export const BtnGroupTextPreview = () => {
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Stack>
  );
};
