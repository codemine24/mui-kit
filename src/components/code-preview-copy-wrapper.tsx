"use client";

import { Iconify } from "@/components/iconify";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer"
import { IconButton, Typography } from "@mui/material";

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
    <Box>
      <ToggleButtonGroup
        value={tab}
        exclusive
        onChange={(_, newTab) => {
          if (newTab !== null) setTab(newTab);
        }}
        sx={{ py: 1 }}>
        {["preview", "code"].map((value) => (
          <ToggleButton
            key={value}
            value={value}
            size="small"
            sx={{
              textTransform: "capitalize",
              px: 1.5,
              py: 1,
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
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Box
        sx={{
          mt: 1,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.paper",
          border: `.5px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
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
              maxHeight: 500,
              width: "100%",
              overflowX: "hidden",
              overflowY: "scroll",
              bgcolor: "background.paper",
              scrollbarWidth: "thin",
              scrollbarColor: "#888 transparent",
              "&::-webkit-scrollbar-button": {
                display: "none",
                height: 0,
                width: 0,
              },
            }}
          >

            <IconButton
              onClick={handleCopy}
              size="small"
              sx={{
                bgcolor: "background.paper",
                borderRadius: theme.shape.borderRadius,
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 99,
              }}>
              <Iconify
                icon={icon}
                style={{
                  height: 24,
                  width: 24,
                  padding: 1,
                  transition: "box-shadow 0.2s ease",
                }}
              />
            </IconButton>

            <Box sx={{ scrollbarColor: "transparent transparent", py: 2, px: 3 }}>
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

              <Highlight
                theme={isDarkMode ? themes.dracula : themes.github}
                code={currentCode}
                language="tsx"
              >
                {({ style, tokens, getLineProps, getTokenProps }) => (
                  <Box
                    sx={{
                      backgroundColor: (theme) => theme.palette.background.paper,
                      overflowX: "auto"
                    }}
                  >
                    <pre style={{ ...style, backgroundColor: "transparent", margin: 0 }}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: 14,
                              mr: 2,
                              fontWeight: 500,
                              color: "text.primary",
                            }}
                          >
                            {i + 1}
                          </Typography>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  </Box>
                )}
              </Highlight>
            </Box>

          </Box>
        )}
      </Box>
    </Box>
  );
};
