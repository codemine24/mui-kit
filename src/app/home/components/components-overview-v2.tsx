"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading1 } from "@/components/core/heading-1";
import { Iconify } from "@/components/iconify";
import { PATHS } from "@/router/paths";
import { pxToRem } from "@/utils/pxToRem";
import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import Link from "next/link";
// import Link from "next/link";

const items = [
  {
    label: "Accordion",
    url: PATHS.ELEMENTS.ACCORDION,
    icon: "tabler:layout-list",
  },
  {
    label: "Alert",
    url: PATHS.ELEMENTS.ALERT,
    icon: "tabler:alert-triangle",
  },
  {
    label: "Avatar",
    url: PATHS.ELEMENTS.AVATAR,
    icon: "tabler:user-circle",
  },
  {
    label: "Badge",
    url: PATHS.ELEMENTS.BADGE,
    icon: "tabler:badge",
  },
  {
    label: "Button",
    url: PATHS.ELEMENTS.BUTTON,
    icon: "tabler:square-rounded-arrow-right",
  },
  {
    label: "Button Group",
    url: PATHS.ELEMENTS.BUTTON_GROUP,
    icon: "tabler:layout-grid",
  },
  {
    label: "Card",
    url: PATHS.ELEMENTS.CARD,
    icon: "tabler:id",
  },
  {
    label: "Dialog",
    url: PATHS.ELEMENTS.DIALOG,
    icon: "tabler:message-2",
  },
  {
    label: "Slider",
    url: PATHS.ELEMENTS.SLIDER,
    icon: "tabler:slideshow",
  },
  {
    label: "Stepper",
    url: PATHS.ELEMENTS.STEPPER,
    icon: "tabler:list-numbers",
  },
  {
    label: "Tab",
    url: PATHS.ELEMENTS.TABS,
    icon: "tabler:layout-navbar-expand",
  },
  {
    label: "Textarea",
    url: PATHS.ELEMENTS.TEXTAREA,
    icon: "tabler:typography",
  },
];

export const ComponentOverviewV2 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid size={{ xs: 12, md: 4 }} sx={{ mb: { xs: 2, md: 0 } }}>
            <Box>
              <Heading1 text="40+" />
              <BodyText
                text="Ready made components"
                sx={{ fontWeight: 600, fontSize: 20 }}
              />
              <BodyText
                text="Fully functional components for you to start immediately"
                sx={{ mb: { xs: 0, md: 2 } }}
              />
              <Link
                href={PATHS.ELEMENTS.OVERVIEW}
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontSize: pxToRem(16),
                }}
              >
                View all
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {items.map((item) => (
              <Button
                startIcon={<Iconify icon={item.icon} />}
                key={item.label}
                variant="outlined"
                color="inherit"
                sx={{
                  mr: { xs: 0.5, md: 1 },
                  mb: { xs: 1, md: 2 },
                  border: "1px solid var(--divider-color)",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
