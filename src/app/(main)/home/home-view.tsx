import Box from "@mui/material/Box";
import { BlockOverviewV2 } from "./components/blocks-overview-v2";
import { ComponentOverviewV2 } from "./components/components-overview-v2";
import { ContributorsOverview } from "./components/contributors-overview";
import { HeroSection } from "./components/hero-section";
import { FrequentlyAskedQuestion } from "./components/frequently-asked-question";
import { Testimonials } from "./components/Testimonials";

export const RootView = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroSection />
      <ComponentOverviewV2 />
      <BlockOverviewV2 />
      <ContributorsOverview />
      <Testimonials />
      <FrequentlyAskedQuestion />
    </Box>
  );
};
