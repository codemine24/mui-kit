export const heroBasicString = `
"use client"

import { Box, Container, Typography, Stack } from "@mui/material"

export default function BasicHero() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: 500, md: 600 },
        background: "#fff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "45%" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#637381",
                mb: 1,
                fontSize: "0.875rem",
              }}
            >
              Save time and money
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#637381",
                mb: 3,
                fontSize: "0.875rem",
              }}
            >
              Automated Inventory Management
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                color: "#212B36",
              }}
            >
              Optimize,
              <br />
              Outperform
            </Typography>
          </Box>

          {/* Right Content - Mobile Device Illustration */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", md: "55%" },
            }}
          >
            <Box
              component="img"
              src="/images/optimize-hero.svg"
              alt="Mobile device illustration"
              sx={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                transform: { xs: "scale(0.9)", md: "scale(1)" },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}`; 