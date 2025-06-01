"use client";
import { Iconify } from "@/components/iconify"; // Ensure this works in your setup
import { getCustomSyntaxStyle } from "@/utils/getCustomSyntaxStyle";
import {
  Box,
  Button,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodePreviewWrapperProps {
  codeString: string;
  preview: React.ReactNode;
}

export const CodePreviewCopyWrapper: React.FC<CodePreviewWrapperProps> = ({
  codeString,
  preview,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [icon, setIcon] = useState<string>("eva:copy-fill");
  const [view, setView] = React.useState<string | null>("desktop");

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

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setView(newAlignment);
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          aria-label="preview and code tabs"
          sx={{ mb: 2 }}
        >
          <Tab value="preview" label="Preview" />
          <Tab value="code" label="Code" />
        </Tabs>

        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleView}
          aria-label="different screen sizes"
          size="small"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <ToggleButton
            value="desktop"
            aria-label="left aligned"
            title="Desktop view"
          >
            <Iconify icon="mynaui:desktop" />
          </ToggleButton>
          <ToggleButton value="tab" aria-label="centered" title="Tablet view">
            <Iconify icon="teenyicons:tablet-outline" />
          </ToggleButton>
          <ToggleButton
            value="mobile"
            aria-label="centered"
            title="Mobile view"
          >
            <Iconify icon="mynaui:mobile" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          backgroundImage: isDarkMode
            ? "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {tab === "preview" ? (
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%", 
                sm:
                  view === "tab"
                    ? "768px" 
                    : view === "mobile"
                    ? "375px" 
                    : "100%", 
              },
              borderColor: "divider",
              p: 2,
              bgcolor: "background.default",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {preview}
          </Box>
        ) : (
          <Box
            sx={{
              position: "relative",
              height: "410px",
              overflow: "auto",
              scrollbarWidth: "none",
              bgcolor: "background.default",
              p: 2 , 
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={handleCopy}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 10,
                display: "flex",
                gap: 1,
                alignItems: "center",
                bgcolor: "background.paper",
                color: "text.primary",
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "none",
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