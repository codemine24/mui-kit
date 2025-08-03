import Box from "@mui/material/Box";
import { BlockOverviewV2 } from "./components/blocks-overview-v2";
import { ComponentOverviewV2 } from "./components/components-overview-v2";
import { ContributorsOverview } from "./components/contributors";
import { HeroSection } from "./components/hero-section";
import { FrequentlyAskedQuestion } from "./components/frequently-asked-question";
import { Testimonials } from "./components/Testimonials";

export const RootView = () => {
  return (
    <Box>
      <HeroSection />
      <Testimonials />
      <ComponentOverviewV2 />
      <BlockOverviewV2 />
      <ContributorsOverview />
      <FrequentlyAskedQuestion />
    </Box>
  );
};
