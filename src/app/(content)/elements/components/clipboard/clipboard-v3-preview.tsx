"use-client";
import React from "react";
import { Box, Button } from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";

export const ClipboardV3Preview = () => {
  const [copied, setCopied] = React.useState(false);
  const textToCopy = "www.muikit.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
        minWidth: 300,
      }}
    >
      <Box component="kbd" sx={{ fontSize: "17px", fontWeight: 500 }}>
        {textToCopy}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopy}
        startIcon={copied ? <Check /> : <ContentCopy />}
        sx={{
          textTransform: "none",
          minWidth: "100px",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
};
