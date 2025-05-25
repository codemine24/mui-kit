import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export const HeroInfinityCard = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
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
          borderRadius: "12px",
          background: `linear-gradient(180deg, ${
            isDarkMode ? theme.palette.grey[900] : theme.palette.grey[200]
          }99 0%, transparent 100%)`,
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
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
          transition: "transform 0.3s, background 0.3s",
        }}
      >
        {/* Background Grid */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundImage: isDarkMode
              ? "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
              : "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.5,
            borderRadius: "12px",
          }}
          onClick={() => router.push(url)}
        />
        <Typography
          variant="h5"
          component="h3"
          align="center"
          gutterBottom
          fontWeight="bold"
          sx={{ color: isDarkMode ? "common.white" : "text.primary" }}
        >
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
};
