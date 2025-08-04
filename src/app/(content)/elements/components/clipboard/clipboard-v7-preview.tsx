import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";

export const ClipboardV7Preview = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "npm i @material-tailwind/react";
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
        backgroundColor: "#374151",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        fontFamily: "sans-serif",
      }}
    >
      <Typography
        component="span"
        sx={{
          flexGrow: 1,
          whiteSpace: "nowrap",
          color: theme.palette.common.white,
          fontSize: "0.875rem",
        }}
      >
        {textToCopy}
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 1.5,
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <IconButton
        aria-label="copy command to clipboard"
        onClick={handleCopy}
        sx={{ color: theme.palette.common.white, p: "4px" }}
      >
        {copied ? (
          <CheckIcon fontSize="small" sx={{ color: "#22c55e" }} />
        ) : (
          <ContentCopyIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};
