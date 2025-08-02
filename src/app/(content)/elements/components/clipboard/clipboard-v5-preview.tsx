"use-client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export const ClipboardV5Preview = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "https://www.muikit.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <Box
      sx={{
        width: 400,
        maxWidth: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        height: 48,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          bgcolor: "blue",
          color: "white",
          px: "16px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          Generate
        </Typography>
      </Box>
      <Box
        component="kbd"
        sx={{
          flexGrow: 1,
          mx: 2,
          fontFamily: "15px",
        }}
      >
        {textToCopy}
      </Box>

      <IconButton
        sx={{
          borderRadius: 0,
          p: "11px",
          borderLeft: "1px solid #e0e0e0",
        }}
        aria-label="copy"
        onClick={handleCopy}
      >
        {copied ? <CheckIcon color="success" /> : <ContentCopyIcon />}
      </IconButton>
    </Box>
  );
};
