"use client";
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { inputClasses } from "@mui/material/Input";
import { ContentCopy, Check } from "@mui/icons-material";

export const ClipboardV10Preview = () => {
  const [copied, setCopied] = React.useState(false);
  const [textToCopy, setTextToCopy] = React.useState("www.muikit.com");

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
        minWidth: 300,
        gap: 1,
      }}
    >
      <TextField
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        variant="standard"
        fullWidth
        sx={{
          [`& .${inputClasses.root}`]: {
            [`& .${inputClasses.input}`]: {
              fontSize: "17px",
              fontWeight: 500,
            },
            "&:before, &:after, &:hover:not(.Mui-disabled):before": {
              borderBottom: "none !important",
            },
          },
        }}
      />
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
