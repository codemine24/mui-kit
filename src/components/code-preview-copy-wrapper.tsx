"use client";
import { Iconify } from "@/components/iconify"; // Ensure this works in your setup
import { getCustomSyntaxStyle } from "@/utils/getCustomSyntaxStyle";
import { Box, Button, Tab, Tabs, useTheme } from "@mui/material";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodePreviewWrapperProps {
  codeString: string;
  preview: React.ReactNode;
}

export const CodePreviewCopyWrapper: React.FC<CodePreviewWrapperProps> = ({
  codeString,
  preview,
}) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [icon, setIcon] = useState<string>("eva:copy-fill");
  const theme = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopySuccess("Copied!");
      setIcon("eva:checkmark-fill");
      setTimeout(() => {
        setCopySuccess("");
        setIcon("solar:copy-line-duotone");
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <Box
      sx={{
        border: `.5px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        px: 2,
        pb: 4,
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        aria-label="preview and code tabs"
        sx={{ mb: 2 }}
      >
        <Tab value="preview" label="Preview" />
        <Tab value="code" label="Code" />
      </Tabs>

      <Box
        sx={{
          bgcolor: "background.default",
          p: 2,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        {tab === "preview" ? (
          <Box sx={{ height: "410px", overflow: "auto" }}>{preview}</Box>
        ) : (
          <Box
            sx={{
              position: "relative",
              height: "410px",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={handleCopy}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 10,
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "background.paper",
                color: "text.primary",
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "none",
                // ":hover": {
                //   bgcolor: "primary.main",
                //   color: "background.default",
                // },
              }}
            >
              <Iconify icon={icon} />
              {copySuccess ? "Copied" : "Copy"}
            </Button>
            <SyntaxHighlighter
              language="tsx"
              style={getCustomSyntaxStyle(theme.palette.mode)}
            >
              {codeString}
            </SyntaxHighlighter>
          </Box>
        )}
      </Box>
    </Box>
  );
};
