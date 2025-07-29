import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup, { buttonGroupClasses } from "@mui/material/ButtonGroup";
import { Stack } from "@mui/material";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="four">Four</Button>,
];

export const BtnGroupSoftBgPreview = () => {
  return (
    <>
      <Stack spacing={2}>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#1976d2",
              backgroundColor: "rgba(25, 118, 210, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#9c27b0",
              backgroundColor: "rgba(156, 39, 176, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(156, 39, 176, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#d32f2f",
              backgroundColor: "rgba(211, 47, 47, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(211, 47, 47, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#ed6c02",
              backgroundColor: "rgba(237, 108, 2, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(237, 108, 2, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#0288d1",
              backgroundColor: "rgba(2, 136, 209, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(2, 136, 209, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#2e7d32",
              backgroundColor: "rgba(46, 125, 50, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(46, 125, 50, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [`& .${buttonGroupClasses.grouped}`]: {
              color: "#616161",
              backgroundColor: "rgba(97, 97, 97, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(97, 97, 97, 0.12)",
              },
            },
          }}
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </>
  );
};
