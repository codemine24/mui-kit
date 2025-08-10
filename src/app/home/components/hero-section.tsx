"use client";
import { BodyText } from "@/components/core/body-text";
import InfiniteScroll from "@/components/infinity-scroll";
import { PATHS } from "@/router/paths";
import { pxToRem } from "@/utils/pxToRem";
import { Icon } from "@iconify/react/dist/iconify.js";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import PathSVG from "./PathSVG";
import { HeroInfinityCard } from "./hero-infinity-card";
import ExploreElementButton from "./explore-element-button";
import AnimatedDotBg from "@/components/core/animated-dot-bg";

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

  return (
    <Box
      sx={{
        paddingTop: { xs: "130px", lg: "100px" },
        paddingBottom: 5,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Animated Dot Background */}
      <AnimatedDotBg />

      {/* Main Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="xl"
        sx={{
          zIndex: 1,
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Left text box */}
        <Box sx={{ position: "relative", zIndex: 101 }}>
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
                background: (theme) =>
                  `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #4C2CCA 100%)`,
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
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "start",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              LinkComponent={Link}
              href={PATHS.DOCS.INSTALL}
              variant="outlined"
              sx={{
                width: 200,
              }}
            >
              Get Started
            </Button>

            <ExploreElementButton />
          </Box>
        </Box>

        {/* Right image box */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: 300, lg: 600 },
            height: isMobile ? 400 : 500,
            display: { xs: "none", lg: "flex" },
            overflowX: "visible",
            zIndex: 100,
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

      {/* Gradient Background in bottom */}
      <Box
        sx={{
          background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: 160,
          zIndex: 1,
          display: { xs: "none", lg: "block" },
        }}
      />

      {/* Gradient Background in center */}
      <Box
        sx={{
          position: "absolute",
          inset: 0, // equivalent to top: 0, right: 0, bottom: 0, left: 0
          background: theme.palette.mode === "dark" ? "radial-gradient(at 50% 20%, rgba(255, 255, 255, 0.08), transparent 70%)" : `radial-gradient(at 50% 20%, ${alpha(theme.palette.primary.main, 0.22)}, transparent 70%)`,
          zIndex: 0,
        }}
      />
    </Box>
  );
};
