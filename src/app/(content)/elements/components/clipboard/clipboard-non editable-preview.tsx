"use client";
import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";

export const ClipboardNonEditablePreview = () => {
  const [copied, setCopied] = React.useState(false);
  const textToCopy = "npm install mui-kit";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert("Failed to copy text to clipboard"));
  };

  return (
    <Box sx={{ minWidth: "500px", margin: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          component="code"
          sx={{
            fontWeight: 500,
            border: "1px solid #e0e0e0",
            p: "15px 25px",
            borderRadius: "8px",
          }}
        >
          {textToCopy}
        </Box>

        <Button
          variant="contained"
          color={copied ? "success" : "primary"}
          onClick={handleCopyClick}
          startIcon={copied ? <Check /> : <ContentCopy />}
          sx={{ p: "15px 25px", borderRadius: "8px" }}
        >
          Copy
        </Button>
      </Box>
    </Box>
  );
};
