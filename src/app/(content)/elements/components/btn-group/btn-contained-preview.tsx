import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Stack } from "@mui/material";
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export const BtnContainedPreview = () => {
  return (
    <>
      <Stack spacing={2}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="error"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="warning"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="info"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="success"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="inherit"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </>
  );
};
