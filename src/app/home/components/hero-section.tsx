"use client";
import { BodyText } from "@/components/core/body-text";
import { Iconify } from "@/components/iconify";
import InfiniteScroll from "@/components/infinity-scroll";
import { PATHS } from "@/router/paths";
import { pxToRem } from "@/utils/pxToRem";
import GridViewIcon from "@mui/icons-material/GridView";
import {
  Alert,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import PathSVG from "./PathSVG";

const items = [
  { content: "Header" },
  { content: "Footer" },
  { content: "Testimonial" },
  { content: "About Section" },
  { content: "Hero Section" },
  { content: "Contact Section" },
  { content: "Carousel" },
  { content: "Dialog" },
  { content: "Mega menu" },
  { content: "Lightbox" },
  { content: "Drag & Drop" },
  { content: "Chart" },
  { content: "Gallery" },
  { content: "Timeline" },
];
export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Define theme-aware colors for background elements
  const gradientFrom =
    theme.palette.mode === "dark"
      ? "rgba(30, 136, 229, 0.2)"
      : "rgba(33, 150, 243, 0.2)";
  const gradientTo =
    theme.palette.mode === "dark"
      ? "rgba(0, 229, 255, 0.2)"
      : "rgba(0, 188, 212, 0.2)";
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
        py: { xs: 6, md: 8 },
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
          <Alert
            severity="info"
            icon={<Iconify icon="line-md:check-all" width={24} height={24} />}
            sx={{
              borderRadius: "50px",
              width: "fit-content",
              padding: "0 1rem",
              mb: 2,
              fontSize: { xs: pxToRem(12), md: pxToRem(14) },
            }}
          >
            No Installation Required. Copy and paste components directly into
            your project.
          </Alert>

          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: pxToRem(34), md: pxToRem(40), lg: pxToRem(50) },
              fontWeight: 800,
              lineHeight: { xs: 1.1, md: 1.3 },
              "& span": { color: "primary.main" },
            }}
          >
            We&apos;ve covered, what <span>Material UI</span> is missing!
          </Typography>

          <BodyText
            text="MUI KIT is a open-source library that offers customized versions of
            material ui core components. Also we have added some extra
            components using mui that are missing in material ui but very common
            in real world projects."
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "start",
              gap: 2,
            }}
          >
            <Button
              LinkComponent={Link}
              href={PATHS.DOCS.INSTALL}
              variant="contained"
              sx={{
                borderRadius: theme.shape.borderRadius,
                width: "fit-content",
              }}
            >
              Get Started
            </Button>

            <Button
              LinkComponent={Link}
              href={PATHS.ELEMENTS.OVERVIEW}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: theme.shape.borderRadius,
                width: "fit-content",
              }}
              startIcon={<GridViewIcon />}
            >
              Explore Elements
            </Button>
          </Box>
        </Box>

        {/* Right image box */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: 300, lg: 600 },
            height: isMobile ? 400 : 500,
            display: { xs: "none", md: "flex" },
          }}
        >
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={1.1}
            autoplayDirection="up"
            pauseOnHover={true}
          />
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
