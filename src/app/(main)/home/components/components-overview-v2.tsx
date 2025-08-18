"use client";

import { BodyText } from "@/components/core/body-text";
import { GradientSectionTitleV2 } from "@/components/core/gradient-section-title-v2";
import { Heading2 } from "@/components/core/heading-2";
import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { PATHS } from "@/router/paths";
import { featuredComponents } from "@/router/router";
import { pxToRem } from "@/utils/pxToRem";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ComponentOverviewV2 = () => {
  const theme = useTheme();
  const router = useRouter();
  useFadeInOnScroll(".component-overview-animation");

  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: 0 },
        paddingBottom: { xs: "60px", md: "80px" },
        position: "relative",
      }}
    >
      <Container maxWidth={"xl"} sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <GradientSectionTitleV2 value={40} />

          <Heading2 text="Core elements" sx={{ textAlign: "center" }} />

          <BodyText
            text="We tried to extend the feature of mui core components also created some extra components that material ui is missing right now."
            sx={{ mb: { xs: 2, md: 4, textAlign: "center" } }}
          />
        </Box>

        <Grid container spacing={2}>
          {featuredComponents.map((item) => (
            <Grid
              className="component-overview-animation"
              size={{ xs: 6, md: 3 }}
              key={item.label}
              sx={{
                border: "1px solid var(--divider-color)",
                borderRadius: (theme) => theme.shape.borderRadius,
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .icon-container": {
                    color: theme.palette.primary.main,
                  },
                },
                ":after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    `radial-gradient(circle at center, ${theme.palette.primary.main} 0%, transparent 80%)`,
                },
              }}
              onClick={() => {
                router.push(item.url);
              }}
            >
              <Box>
                <Box
                  sx={{
                    background: theme.palette.background.paper,
                    paddingX: 2,
                    paddingY: 6,
                  }}
                >
                  {" "}
                  <Icon
                    icon={item.icon}
                    className="icon-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      color: "#555555",
                    }}
                    width={40}
                    height={40}
                  />
                </Box>
                <Box
                  sx={{ p: 2, background: theme.palette.background.default }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "text.primary",
                      fontSize: pxToRem(18),
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{ color: "text.secondary", fontSize: pxToRem(16) }}
                  >
                    {item.count} items
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: 4 }} direction="row" justifyContent="center">
          <Button
            LinkComponent={Link}
            href={PATHS.ELEMENTS.OVERVIEW}
            variant="outlined"
          >
            View all
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
