"use client";

import { Iconify } from "@/components/iconify";
import { getCustomSyntaxStyle } from "@/utils/getCustomSyntaxStyle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodePreviewWrapperProps {
  codeString: string | { name: string; code: string }[];
  preview: React.ReactNode;
}

export const CodePreviewCopyWrapper: React.FC<CodePreviewWrapperProps> = ({
  codeString,
  preview
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [icon, setIcon] = useState<string>("solar:copy-line-duotone");

  const isMultiFile = Array.isArray(codeString);
  const [activeFile, setActiveFile] = useState(isMultiFile ? codeString[0]?.name : "");

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

  return (
    <Box
      sx={{
        border: `.5px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        px: 2,
        pb: 2,
        bgcolor: "background.paper"
      }}>
      <ToggleButtonGroup
        value={tab}
        exclusive
        onChange={(_, newTab) => {
          if (newTab !== null) setTab(newTab);
        }}
        sx={{
          py: 1
        }}>
        {["preview", "code"].map((value) => (
          <ToggleButton
            key={value}
            value={value}
            sx={{
              textTransform: "uppercase",
              px: 2.5,
              py: 1,
              fontWeight: 500,
              border: `1px solid ${theme.palette.primary.main}`,
              color: "primary.main",
              "&.Mui-selected": {
                bgcolor: "primary.main",
                color: "white",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white"
                }
              },
              "&:hover": {
                bgcolor: "primary.main",
                color: "white"
              }
            }}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          backgroundImage: isDarkMode
            ? "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
        {tab === "preview" ? (
          <Box
            sx={{
              width: "100%",
              p: 2,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center"
            }}>
            {preview}
          </Box>
        ) : (
          <Box
            sx={{
              height: "500px",
              overflow: "auto",
              bgcolor: "background.paper",
              p: 2,
              width: "100%"
            }}>
            <Box
              onClick={handleCopy}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
                zIndex: 10
              }}>
              <Iconify
                icon={icon}
                style={{
                  height: 32,
                  width: 32,
                  transition: "box-shadow 0.2s ease",
                  borderRadius: "3px",
                  padding: 4
                }}
              />
            </Box>

            {isMultiFile && (
              <Tabs
                value={activeFile}
                onChange={(_, newFile) => setActiveFile(newFile)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 2 }}>
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
              customStyle={{ margin: 0 }}>
              {currentCode}
            </SyntaxHighlighter>
          </Box>
        )}
      </Box>
    </Box>
  );
};
