"use client";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PathSVG from "./PathSVG";
import Link from "next/link";

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Define theme-aware colors for background elements
  const gradientFrom =
    theme.palette.mode === "dark"
      ? "rgba(30, 136, 229, 0.2)"
      : "rgba(33, 150, 243, 0.2)"; // Blue shades
  const gradientTo =
    theme.palette.mode === "dark"
      ? "rgba(0, 229, 255, 0.2)"
      : "rgba(0, 188, 212, 0.2)"; // Cyan/Teal shades
  const lineColors = {
    blue: theme.palette.mode === "dark" ? "#42a5f5" : "#2196f3",
    indigo: theme.palette.mode === "dark" ? "#5c6bc0" : "#3f51b5",
    cyan: theme.palette.mode === "dark" ? "#26c6da" : "#00bcd4",
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 8,
        // px: 2,
        mb: 6,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        {/* Gradient Circles */}
        <Box
          sx={{
            position: "absolute",
            top: "-5rem",
            right: "-5rem",
            width: { xs: "16rem", md: "24rem" },
            height: { xs: "16rem", md: "24rem" },
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            filter: "blur(80px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10rem",
            left: "-5rem",
            width: { xs: "14rem", md: "20rem" },
            height: { xs: "14rem", md: "20rem" },
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            filter: "blur(80px)",
          }}
        />
        {/* <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: { xs: "10%", md: "25%" },
            width: { xs: "12rem", md: "16rem" },
            height: { xs: "12rem", md: "16rem" },
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            filter: "blur(80px)",
          }}
        /> */}

        {/* Animated Lines */}
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          {/* Horizontal Lines */}
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: 0,
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${lineColors.blue}, transparent)`,
              animation: "pulse 3s infinite",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${lineColors.indigo}, transparent)`,
              animation: "pulse 3s infinite 1s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "75%",
              left: 0,
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${lineColors.cyan}, transparent)`,
              animation: "pulse 3s infinite 2s",
            }}
          />
          {/* Vertical Lines */}
          <Box
            sx={{
              position: "absolute",
              left: "25%",
              top: 0,
              height: "100%",
              width: "1px",
              background: `linear-gradient(to bottom, transparent, ${lineColors.blue}, transparent)`,
              animation: "pulse 3s infinite 0.5s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              height: "100%",
              width: "1px",
              background: `linear-gradient(to bottom, transparent, ${lineColors.indigo}, transparent)`,
              animation: "pulse 3s infinite 1.5s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: "75%",
              top: 0,
              height: "100%",
              width: "1px",
              background: `linear-gradient(to bottom, transparent, ${lineColors.cyan}, transparent)`,
              animation: "pulse 3s infinite 2.5s",
            }}
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "xl",
          mx: "auto",
          px: 4,
        }}
      >
        {/* Left text box */}
        <Box sx={{ maxWidth: 800, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: -60,
              left: 0,
              zIndex: 1,
            }}
          >
            <PathSVG />
          </Box>

          <Typography
            variant="h1"
            gutterBottom
            sx={{
              "& span": { color: "primary.main" },
            }}
          >
            We&apos;ve covered, what <span>Material UI</span> is missing!
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            <Chip label="REACT" size="small" />
            <Chip label="TYPESCRIPT" size="small" />
            <Chip label="MATERIAL DESIGN" size="small" />
          </Stack>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, fontSize: "1.1rem" }}
          >
            MUI KIT is a comprehensive library of components that features
            implementation of Google&apos;s Material Design system, providing
            ready-to-use UI elements for creating beautiful and responsive React
            applications.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Link href={"/docs/intro"}>
              <Button variant="contained" size="large">
                Get Started
              </Button>
            </Link>
          </Stack>
        </Box>

        {/* Right image box */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
            height: isMobile ? 400 : 500,
            display: { xs: "none", md: "flex" },
          }}
        >
          {/* Floating UI components */}
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "5%",
              left: "10%",
              width: "60%",
              height: "40%",
              borderRadius: 2,
              p: 2,
              zIndex: 3,
              transform: "rotate(-5deg)",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Templates
            </Typography>
            <Box
              sx={{
                height: 10,
                width: "80%",
                bgcolor: "primary.light",
                borderRadius: 1,
                mb: 1,
              }}
            />
            <Box
              sx={{
                height: 10,
                width: "60%",
                bgcolor: "secondary.light",
                borderRadius: 1,
                mb: 1,
              }}
            />
            <Box
              sx={{
                height: 10,
                width: "70%",
                bgcolor: "grey.300",
                borderRadius: 1,
              }}
            />
          </Paper>

          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "30%",
              right: "5%",
              width: "50%",
              height: "35%",
              borderRadius: 2,
              p: 2,
              zIndex: 3,
              transform: "rotate(3deg)",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Components
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <Box
                sx={{
                  height: 30,
                  width: 30,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  height: 10,
                  width: "60%",
                  bgcolor: "grey.300",
                  borderRadius: 1,
                  alignSelf: "center",
                }}
              />
            </Stack>
            <Box
              sx={{
                height: 10,
                width: "80%",
                bgcolor: "grey.300",
                borderRadius: 1,
                mb: 1,
              }}
            />
            <Box
              sx={{
                height: 10,
                width: "70%",
                bgcolor: "grey.300",
                borderRadius: 1,
              }}
            />
          </Paper>

          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "15%",
              width: "55%",
              height: "30%",
              borderRadius: 2,
              p: 2,
              zIndex: 4,
              transform: "rotate(2deg)",
              bgcolor: theme.palette.primary.main,
              color: "white",
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Dashboard
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "60%",
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <Box
                  key={item}
                  sx={{
                    width: "15%",
                    bgcolor: "rgba(255,255,255,0.3)",
                    borderRadius: "2px",
                    alignSelf: "flex-end",
                    height: `${30 + item * 10}%`,
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Stack>

      {/* CSS for Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
};
