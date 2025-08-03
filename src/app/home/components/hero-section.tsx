"use client";
import { BodyText } from "@/components/core/body-text";
import InfiniteScroll from "@/components/infinity-scroll";
import { PATHS } from "@/router/paths";
import { pxToRem } from "@/utils/pxToRem";
import { Icon } from "@iconify/react/dist/iconify.js";
import GridViewIcon from "@mui/icons-material/GridView";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import PathSVG from "./PathSVG";
import { HeroInfinityCard } from "./hero-infinity-card";

const items = [
  { content: <HeroInfinityCard title="Editor" url={PATHS.ELEMENTS.EDITOR} /> },
  {
    content: <HeroInfinityCard title="DND" url={PATHS.ELEMENTS.DND} />,
  },
  {
    content: (
      <HeroInfinityCard title="Carousel" url={PATHS.ELEMENTS.CAROUSEL} />
    ),
  },
  {
    content: (
      <HeroInfinityCard title="Timeline" url={PATHS.ELEMENTS.TIMELINE} />
    ),
  },
  {
    content: <HeroInfinityCard title="Stepper" url={PATHS.ELEMENTS.STEPPER} />,
  },
  {
    content: <HeroInfinityCard title="OTP" url={PATHS.ELEMENTS.OTP} />,
  },
  {
    content: (
      <HeroInfinityCard title="Pagination" url={PATHS.ELEMENTS.PAGINATION} />
    ),
  },
  { content: <HeroInfinityCard title="Hero" url={PATHS.BLOCKS.HERO} /> },
  { content: <HeroInfinityCard title="About" url={PATHS.BLOCKS.ABOUT} /> },
  {
    content: (
      <HeroInfinityCard title="PricingTable" url={PATHS.BLOCKS.PRICING_MENU} />
    ),
  },
  {
    content: (
      <HeroInfinityCard
        title="Testimonial"
        url={PATHS.BLOCKS.TESTIMONIAL_GRID}
      />
    ),
  },
];

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Define theme-aware colors for background elements
  const gradientFrom =
    theme.palette.mode === "dark"
      ? "rgba(0, 229, 255, 0.2)"
      : "rgba(0, 188, 212, 0.2)";
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
            icon={
              <Icon
                icon="line-md:check-all"
                width={24}
                height={24}
                color={theme.palette.text.primary}
              />
            }
            sx={{
              borderRadius: "50px",
              width: "fit-content",
              padding: "0 1rem",
              mb: 2,
              fontSize: { xs: pxToRem(12), md: pxToRem(14) },
              background: "transparent",
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            No Installation Required. Copy and paste directly into your mui
            project.
          </Alert>

          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: pxToRem(38), md: pxToRem(50), lg: pxToRem(60) },
              fontWeight: 600,
              lineHeight: { xs: 1.1, md: 1.3 },
              letterSpacing: 0,
              "& span": {
                background: "linear-gradient(90deg, #007074 0%, #24a76b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline",
              },
            }}
          >
            We&apos;ve covered, what <span>Material UI</span> is missing!
          </Typography>

          <BodyText
            text="MUI KIT is an open-source library that offers customized versions of
            material ui core components. Also we have added some extra
            components that material ui is missing, but very common
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
                background: theme.palette.text.primary,
                color: theme.palette.background.default,
                textTransform: "none",
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
                textTransform: "none",
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
            overflowX: "visible",
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
