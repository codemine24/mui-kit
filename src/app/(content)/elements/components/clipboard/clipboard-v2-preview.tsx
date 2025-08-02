"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";

export const ClipboardV2Preview = () => {
  const [copied, setCopied] = React.useState(false);
  const textToCopy = "npm install mui-kit";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
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
      <Box sx={{ fontWeight: 500 }}>{textToCopy}</Box>
      <IconButton onClick={handleCopy} color={copied ? "success" : "default"}>
        {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
      </IconButton>
    </Box>
  );
};
