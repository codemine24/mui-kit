"use client";

import { Iconify } from "@/components/iconify";
import { getCustomSyntaxStyle } from "@/utils/getCustomSyntaxStyle";
import {
  Box,
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
  codeString: string | { name: string; code: string }[];
  preview: React.ReactNode;
}

export const CodePreviewCopyWrapper: React.FC<CodePreviewWrapperProps> = ({
  codeString,
  preview,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [icon, setIcon] = useState<string>("eva:copy-fill");
  const [view, setView] = useState<string | null>("desktop");

  const isMultiFile = Array.isArray(codeString);
  const [activeFile, setActiveFile] = useState(
    isMultiFile ? codeString[0]?.name : ""
  );

  const currentCode = isMultiFile
    ? codeString.find((f) => f.name === activeFile)?.code || ""
    : codeString;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setIcon("eva:checkmark-fill");
      setTimeout(() => {
        setIcon("solar:copy-line-duotone");
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
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
        pb: 2,
        bgcolor: "background.paper",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py={1}
      >
        <ToggleButtonGroup
          value={tab}
          exclusive
          onChange={(_, newTab) => {
            if (newTab !== null) setTab(newTab);
          }}
          sx={{ p: 0.5 }}
        >
          {["preview", "code"].map((value) => (
            <ToggleButton
              key={value}
              value={value}
              sx={{
                textTransform: "none",
                px: 2.5,
                py: 1,
                fontWeight: 500,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                  },
                },
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleView}
          aria-label="different screen sizes"
          size="small"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <ToggleButton value="desktop" title="Desktop view">
            <Iconify icon="mynaui:desktop" />
          </ToggleButton>
          <ToggleButton value="tab" title="Tablet view">
            <Iconify icon="teenyicons:tablet-outline" />
          </ToggleButton>
          <ToggleButton value="mobile" title="Mobile view">
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
              maxWidth:
                view === "tab" ? "768px" : view === "mobile" ? "375px" : "100%",
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
              height: "500px",
              overflow: "auto",
              bgcolor: "background.default",
              p: 2,
              width: "100%",
            }}
          >
            <Box
              onClick={handleCopy}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <Iconify
                icon={icon}
                style={{
                  height: 32,
                  width: 32,
                  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.2s ease",
                  borderRadius: "3px",
                  padding: 4,
                }}
              />
            </Box>

            {isMultiFile && (
              <Tabs
                value={activeFile}
                onChange={(_, newFile) => setActiveFile(newFile)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 2 }}
              >
                {codeString.map((file) => (
                  <Tab
                    key={file.name}
                    value={file.name}
                    label={file.name}
                    sx={{ textTransform: "none" }}
                  />
                ))}
              </Tabs>
            )}

            <SyntaxHighlighter
              language="tsx"
              style={getCustomSyntaxStyle(theme.palette.mode)}
              customStyle={{ margin: 0 }}
            >
              {currentCode}
            </SyntaxHighlighter>
          </Box>
        )}
      </Box>
    </Box>
  );
};
