export const btnGroupTextString = `import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Stack } from "@mui/material";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="four">Four</Button>,
];
export const BtnGroupTextPreview = () => {
  return (
    <>
      <Stack spacing={2}>
        <ButtonGroup variant="text" aria-label="Basic button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="secondary"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="error"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="warning"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="info"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="success"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="inherit"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </>
  );
};`;
