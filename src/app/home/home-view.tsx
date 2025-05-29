import { Box } from "@mui/material";
import { BlockOverviewV2 } from "./components/blocks-overview-v2";
import { ComponentOverviewV2 } from "./components/components-overview-v2";
import { ContributorsOverview } from "./components/contributors";
import { HeroSection } from "./components/hero-section";
import { FrequentlyAskedQuestion } from "./components/frequently-asked-question";

export const RootView = () => {
  return (
    <Box>
      <HeroSection />
      <ComponentOverviewV2 />
      <BlockOverviewV2 />
      <ContributorsOverview />
      <FrequentlyAskedQuestion />
    </Box>
  );
};
