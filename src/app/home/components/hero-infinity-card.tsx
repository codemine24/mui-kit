'use client'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { alpha } from "@mui/material/styles";

export const HeroInfinityCard = ({ title, url }: { title: string; url: string }) => {
  const theme = useTheme();
  const router = useRouter();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Grid size={{ xs: 12, md: 4 }} sx={{ width: { xs: "100%", md: "100%" } }}>
      <Paper
        elevation={0}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const { left, top } = card.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          card.style.setProperty("--cursor-x", `${x}px`);
          card.style.setProperty("--cursor-y", `${y}px`);
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget;
          card.style.removeProperty("--cursor-x");
          card.style.removeProperty("--cursor-y");
        }}
        sx={{
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: (theme) => `.5px solid ${theme.palette.divider}`,
          borderRadius: (theme) => theme.shape.borderRadius,
          background: (theme) => alpha(theme.palette.background.paper, 0.45),
          overflow: "hidden",
          transition: "transform 0.3s, background 0.3s",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            padding: "1px",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: 1,
            transition: "opacity 0.3s ease"
          },
          "&:hover": {
            transform: "translateY(-4px)",
            bgcolor: 'primary.main',
          },
          "&:hover .card-text": {
            color: 'common.white',
          },
        }}>
        {/* Background Grid */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: 0.5,
            borderRadius: "12px"
          }}
          onClick={() => router.push(url)}
        />
        <Typography
          variant="h5"
          component="h3"
          align="center"
          gutterBottom
          className="card-text"
          sx={{ color: isDarkMode ? "common.white" : "text.primary" }}>
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
};
