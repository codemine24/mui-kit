"use client";

import {
    Box,
    Button,
    ButtonGroup,
    createTheme,
    CssBaseline,
    ThemeProvider,
    Typography
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";

// ResizeObserver hook for measuring container
function useResizeObserver<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, size };
}

// Define breakpoints based on width
function getBreakpoint(width: number): "xs" | "sm" | "md" | "lg" | "xl" {
  if (width < 600) return "xs";
  if (width < 900) return "sm";
  if (width < 1200) return "md";
  if (width < 1536) return "lg";
  return "xl";
}

// Dynamically create theme based on breakpoint
function createResponsiveTheme(breakpoint: "xs" | "sm" | "md" | "lg" | "xl") {
  return createTheme({
    breakpoints: {
      values: {
        xs: breakpoint === "xs" ? 0 : 600,
        sm: breakpoint === "sm" ? 0 : 900,
        md: breakpoint === "md" ? 0 : 1200,
        lg: breakpoint === "lg" ? 0 : 1536,
        xl: 1536,
      },
    },
  });
}

// Main responsive wrapper
export function ResponsiveContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { ref, size } = useResizeObserver<HTMLDivElement>();
  const [mode, setMode] = useState<"auto" | "mobile" | "desktop">("auto");

  const containerWidth =
    mode === "mobile" ? 375 : mode === "desktop" ? 1024 : "100%";

  const breakpoint = getBreakpoint(size.width);
  const theme = createResponsiveTheme(breakpoint);

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
        <Button
          onClick={() => setMode("mobile")}
          variant={mode === "mobile" ? "contained" : "outlined"}
        >
          Mobile
        </Button>
        <Button
          onClick={() => setMode("desktop")}
          variant={mode === "desktop" ? "contained" : "outlined"}
        >
          Desktop
        </Button>
        <Button
          onClick={() => setMode("auto")}
          variant={mode === "auto" ? "contained" : "outlined"}
        >
          Auto
        </Button>
      </ButtonGroup>

      <Box
        ref={ref}
        sx={{
          width: containerWidth,
          maxWidth: "100%",
          mx: "auto",
          p: 2,
          border: "2px dashed gray",
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" mb={1}>
          Container Width: {size.width}px
        </Typography>

        {/* Apply dynamic theme ONLY to children */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Box>
    </Box>
  );
}
