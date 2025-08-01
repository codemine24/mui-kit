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
export const BtnGroupOutlinePreview = () => {
  return (
    <>
      <Stack spacing={2}>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="error"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="warning"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="info"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="success"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="inherit"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </>
  );
};
