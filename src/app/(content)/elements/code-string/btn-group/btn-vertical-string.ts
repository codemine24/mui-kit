export const btnVerticalString = `"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup, { buttonGroupClasses } from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="four">Four</Button>,
];

export const BtnVerticalPreview = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          color="secondary"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          variant="text"
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            [\`& .\${buttonGroupClasses.root}\`]: {
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
          orientation="vertical"
          variant="contained"
          color="info"
          disabled={true}
          aria-label="Basic button group"
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </>
  );
};
`;
