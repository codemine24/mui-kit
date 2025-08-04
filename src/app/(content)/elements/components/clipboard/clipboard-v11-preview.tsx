"use client";
import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";

export const ClipboardV11Preview = () => {
  const [copied, setCopied] = React.useState(false);
  const [text, setText] = React.useState("npm install mui-kit");

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "primary",
        minWidth: 300,
      }}
    >
      <TextField
        variant="standard"
        value={text}
        onChange={handleTextChange}
        sx={{
          flexGrow: 1,
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-input": {
            fontWeight: 500,
            fontFamily: "monospace",
          },
        }}
        InputProps={{
          disableUnderline: true,
        }}
      />
      <IconButton onClick={handleCopy} color={copied ? "success" : "default"}>
        {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
      </IconButton>
    </Box>
  );
};
