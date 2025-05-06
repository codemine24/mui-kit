import { Box, Container } from "@mui/material";
import { HeroSection } from "./components/hero-section";
import { ComponentOverview } from "./components/components-overview";
import FeaturesSection from "./components/Features/Features";
import { Testimonials } from "./components/Testimonials";
// import { MuiBlocksTemplates } from "./components/MuiBlocksTemplates";

export const RootView = () => {
  return (
    <Box>
      <HeroSection />
      <Container maxWidth={"xl"}>
        <ComponentOverview />
        {/* <MuiBlocksTemplates /> */}
        <FeaturesSection />
        <Testimonials />
      </Container>
    </Box>
  );
};
