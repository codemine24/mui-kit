"use client";
import { ReactNode, useRef } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";

export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      if (shadowRef.current) {
        shadowRef.current.style.top = `${y}px`;
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.transform = "translate(-50%, -50%)";
      }

      cardRef.current.style.setProperty("--cursor-x", `${x}px`);
      cardRef.current.style.setProperty("--cursor-y", `${y}px`);
    }
  };

  return (
    <Paper
      ref={cardRef}
      onMouseMove={handleMouseMove}
      elevation={0}
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backdropFilter: "blur(8px)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(30, 30, 30, 0.9)"
            : "rgba(255, 255, 255, 0.1)",
        border: `.5px solid transparent`,
        borderRadius: 1,
        height: "100%",
        transition: "transform 0.3s, background 0.3s",
        color: theme.palette.mode === "dark" ? "white" : "text.primary",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: 1,
          padding: "1px",
          background:
            "radial-gradient(500px circle at var(--cursor-x) var(--cursor-y), rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Background grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage:
            theme.palette.mode === "dark"
              ? "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
              : "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.5,
          borderRadius: 1,
        }}
      />
      {/* Shadow */}
      <Box
        ref={shadowRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "80%",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, #1E293B 0%, rgba(59, 130, 246, 0) 137.53%)"
              : "linear-gradient(180deg, #E2E8F0 0%, rgba(59, 130, 246, 0) 137.53%)",
          filter: "blur(70px)",
          opacity: 0,
          transition: "opacity 0.15s",
          zIndex: 0,
        }}
      />

      {/* Icon */}
      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor:
            theme.palette.mode === "dark" ? "grey.800" : "grey.200",
          mb: 2,
          fontSize: 28,
          color: "primary.main",
          zIndex: 1,
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        zIndex={1}
        sx={{ textTransform: "uppercase", letterSpacing: 1 }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography variant="body2" zIndex={1} sx={{ textAlign: "center" }}>
        {desc}
      </Typography>
    </Paper>
  );
}
