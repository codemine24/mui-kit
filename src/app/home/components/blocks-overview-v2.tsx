"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading1 } from "@/components/core/heading-1";
import { Iconify } from "@/components/iconify";
import { PATHS } from "@/router/paths";
import { pxToRem } from "@/utils/pxToRem";
import { Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
// import Link from "next/link";

const items = [
  {
    label: "Slider",
    url: PATHS.BLOCKS.SLIDER,
    icon: "tabler:carousel-horizontal",
  },
  {
    label: "Mega Menu",
    url: PATHS.BLOCKS.MEGA_MENU,
    icon: "tabler:layout-navbar",
  },
  {
    label: "About",
    url: PATHS.BLOCKS.ABOUT,
    icon: "mdi:account-question-outline",
  },
  {
    label: "Call To Action",
    url: PATHS.BLOCKS.CALL_TO_ACTION,
    icon: "tabler:click",
  },
  {
    label: "Coming Soon",
    url: PATHS.BLOCKS.COMING_SOON,
    icon: "tabler:clock-hour-10",
  },
  { label: "Contact", url: PATHS.BLOCKS.CONTACT, icon: "tabler:phone-call" },
  { label: "Copyright", url: PATHS.BLOCKS.COPYRIGHT, icon: "mdi:copyright" },
  { label: "FAQ", url: PATHS.BLOCKS.FAQ, icon: "tabler:question-mark" },
  {
    label: "Feature",
    url: PATHS.BLOCKS.FEATURE_AND_BENEFIT,
    icon: "tabler:star",
  },
  {
    label: "Feature Product",
    url: PATHS.BLOCKS.FEATURE_PRODUCT,
    icon: "tabler:package",
  },
  {
    label: "Focus Boxes",
    url: PATHS.BLOCKS.FOCUS_BOXES,
    icon: "tabler:focus-2",
  },
  {
    label: "Footer",
    url: PATHS.BLOCKS.FOOTER,
    icon: "tabler:layout-navbar-collapse",
  },
  { label: "Gallery", url: PATHS.BLOCKS.GALLERY, icon: "tabler:photo" },
  { label: "Logo Grid", url: PATHS.BLOCKS.LOGO_GRID, icon: "tabler:grid-dots" },
  { label: "Hero", url: PATHS.BLOCKS.HERO, icon: "tabler:layout-dashboard" },
  {
    label: "Pricing Menu",
    url: PATHS.BLOCKS.PRICING_MENU,
    icon: "tabler:currency-dollar",
  },
  {
    label: "Testimonial",
    url: PATHS.BLOCKS.TESTIMONIAL_SLIDER,
    icon: "tabler:message-chatbot",
  },
];

export const BlockOverviewV2 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid size={{ xs: 12, md: 4 }} sx={{ mb: { xs: 2, md: 0 } }}>
            <Box>
              <Heading1 text="20+" />
              <BodyText
                text="Ready made blocks"
                sx={{ fontWeight: 600, fontSize: 20 }}
              />
              <BodyText
                text="Fully functional ui blocks ready to use in your project"
                sx={{ mb: { xs: 0, md: 2 } }}
              />
              <Link
                href={PATHS.BLOCKS.OVERVIEW}
                style={{ color: theme.palette.primary.main, textDecoration: "none", fontSize: pxToRem(16) }}
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
