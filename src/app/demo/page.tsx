"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";

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

function getBreakpoint(width: number): "xs" | "sm" | "md" | "lg" | "xl" {
  if (width < 600) return "xs";
  if (width < 900) return "sm";
  if (width < 1200) return "md";
  if (width < 1536) return "lg";
  return "xl";
}

function ChildContent({ width }: { width: number }) {
  const breakpoint = getBreakpoint(width);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        Breakpoint: {breakpoint}
      </Typography>

      <Stack
        direction={["xs", "sm"].includes(breakpoint) ? "column" : "row"}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            bgcolor: breakpoint === "md" ? "primary.main" : "white",
            p: 2,
            color: breakpoint === "md" ? "white" : "black",
          }}
        >
          Text A
        </Box>
        <Box sx={{ bgcolor: "secondary.main", p: 2, color: "white" }}>
          Box B
        </Box>
        <Box sx={{ bgcolor: "success.main", p: 2, color: "white" }}>
          Box C
        </Box>
      </Stack>
    </Paper>
  );
}

export default function ResizableContainer() {
  const { ref, size } = useResizeObserver<HTMLDivElement>();
  const [mode, setMode] = useState<"auto" | "mobile" | "desktop">("auto");

  const containerWidth =
    mode === "mobile" ? 375 : mode === "desktop" ? 1024 : "100%";

  const breakpoint = getBreakpoint(size.width);

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
        data-breakpoint={breakpoint}
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
        <ChildContent width={size.width} />
      </Box>
    </Box>
  );
}
