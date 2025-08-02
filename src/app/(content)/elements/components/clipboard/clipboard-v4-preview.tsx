import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export const ClipboardV4Preview = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "www.muikit.com";

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
        width: 400,
        maxWidth: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "16px",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: "bold" }}
      >
        URL
      </Typography>
      <Divider orientation="vertical" sx={{ mx: 2, borderColor: "#e0e0e0" }} />
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {textToCopy}
      </Typography>
      <IconButton
        sx={{
          p: "10px",
          bgcolor: "blue",
          color: "white",
          borderRadius: "0",
          "&:hover": {
            bgcolor: "#1C4ED8",
          },
        }}
        aria-label="copy"
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <ContentCopyIcon />}
      </IconButton>
    </Box>
  );
};
