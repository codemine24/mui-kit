"use client";
import { overviewItems } from "@/constants/component-overview-data";
import { Icon } from "@iconify/react";
import { Box, Button, Chip, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export const ComponentOverview = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Grid container spacing={3}>
        {overviewItems.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
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
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: ".5px solid transparent",
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
              />
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Icon
                  icon={item.icon}
                  style={{ fontSize: 40, color: theme.palette.primary.main }}
                />
              </Box>
              <Typography
                variant="h5"
                component="h3"
                align="center"
                gutterBottom
                fontWeight="bold"
                sx={{ color: isDarkMode ? "common.white" : "text.primary" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 3 }}
              >
                {item.description}
              </Typography>
              <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {item.tags.map((tag) => (
                  <Link href={tag.url} key={tag.label} passHref>
                    <Chip
                      label={tag.label}
                      size="small"
                      clickable
                      // component="a"
                      sx={{ m: 0.5 }}
                    />
                  </Link>
                ))}
              </Stack>
              {item.button && (
                <Box
                  sx={{ mt: "auto", textAlign: "center", marginTop: "1rem" }}
                >
                  <Link href={item.button.url} passHref>
                    <Button
                      endIcon={<Icon icon="mdi:arrow-right" />}
                      color="primary"
                    >
                      {item.button.label}
                    </Button>
                  </Link>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
