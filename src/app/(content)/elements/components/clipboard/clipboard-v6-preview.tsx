import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";

export const ClipboardV6Preview = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "npm i preline";
  const theme = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <Box
      sx={{
        width: "fit-content",
        maxWidth: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "#1F2937" : "#FFFFFF",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      <Typography
        variant="body1"
        aria-hidden="true"
        sx={{
          mr: 2,
          color: "text.secondary",
          fontFamily: "monospace",
        }}
      >
        $
      </Typography>
      <Typography
        component="span"
        sx={{
          flexGrow: 1,
          fontFamily: "monospace",
          whiteSpace: "nowrap",
          color: "text.primary",
        }}
      >
        {textToCopy}
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 1.5,
          borderColor: `1px solid ${theme.palette.divider}`,
        }}
      />
      <IconButton aria-label="copy command to clipboard" onClick={handleCopy}>
        {copied ? (
          <CheckIcon fontSize="small" color="success" />
        ) : (
          <ContentCopyIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};
