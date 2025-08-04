import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";

const contactDetails = [
  { label: "Name", value: "Fazly Alahi" },
  { label: "Email", value: "fazly@codemine.com" },
  { label: "Phone Number", value: "+ 12 345 67890" },
];

export const ClipboardV8Preview = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = contactDetails
      .map((detail) => `${detail.label}: ${detail.value}`)
      .join("\n");

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
        width: 450,
        maxWidth: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        p: 3,
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Contact details
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          position: "relative",
          p: 2,
        }}
      >
        <IconButton
          aria-label="copy contact details"
          onClick={handleCopy}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "text.secondary",
          }}
        >
          {copied ? (
            <CheckIcon fontSize="small" color="success" />
          ) : (
            <ContentCopyOutlinedIcon fontSize="small" />
          )}
        </IconButton>
        <Box>
          {contactDetails.map((detail, index) => (
            <Box
              key={detail.label}
              sx={{
                display: "flex",
                mb: index < contactDetails.length - 1 ? 1.5 : 0,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: "1.03rem", width: "40%" }}
              >
                {detail.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "1.03rem", fontWeight: 500 }}
              >
                {detail.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
