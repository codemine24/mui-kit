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
import { HeroInfinityCard } from "./hero-infinity-card";

const items = [
  { content: <HeroInfinityCard title="Header" url={PATHS.BLOCKS.HEADER} /> },
  {
    content: (
      <HeroInfinityCard title="Header" url={PATHS.BLOCKS.CALL_TO_ACTION} />
    ),
  },
  { content: <HeroInfinityCard title="Footer" url={PATHS.BLOCKS.HEADER} /> },
  {
    content: <HeroInfinityCard title="Testimonial" url={PATHS.BLOCKS.HEADER} />,
  },
  {
    content: (
      <HeroInfinityCard title="About Section" url={PATHS.BLOCKS.HEADER} />
    ),
  },
  {
    content: (
      <HeroInfinityCard title="Hero Section" url={PATHS.BLOCKS.HEADER} />
    ),
  },
  {
    content: (
      <HeroInfinityCard title="Contact Section" url={PATHS.BLOCKS.HEADER} />
    ),
  },
  { content: <HeroInfinityCard title="Carousel" url={PATHS.BLOCKS.HEADER} /> },
  { content: <HeroInfinityCard title="Dialog" url={PATHS.BLOCKS.HEADER} /> },
  { content: <HeroInfinityCard title="Mega menu" url={PATHS.BLOCKS.HEADER} /> },
  { content: <HeroInfinityCard title="Lightbox" url={PATHS.BLOCKS.HEADER} /> },
  {
    content: <HeroInfinityCard title="Drag & Drop" url={PATHS.BLOCKS.HEADER} />,
  },
  { content: <HeroInfinityCard title="Chart" url={PATHS.BLOCKS.HEADER} /> },
  { content: <HeroInfinityCard title="Gallery" url={PATHS.BLOCKS.HEADER} /> },
  { content: <HeroInfinityCard title="Timeline" url={PATHS.BLOCKS.HEADER} /> },
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

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 0 },
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
          px: { xs: 2, md: 3 },
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
              mt: 4,
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
          <Box
            sx={{
              height: "180px",
              width: "700px",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
              background:
                "linear-gradient(to bottom right, #fafbff, transparent)",
            }}
          />

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
