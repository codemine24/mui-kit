"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { heroParalaxString } from "../code-string/hero/hero-paralax-string";
import { heroMinimalString } from "../code-string/hero/hero-minimal-string";
import { heroModernString } from "../code-string/hero/hero-modern-string";
import { heroCarouselString } from "../code-string/hero/hero-carousel-string";
import { heroBasicString } from "../code-string/hero/hero-basic-string";
import { heroSparkleString } from "../code-string/hero/hero-sparkle-string";
import BasicHero from "../components/hero/hero-basic-preview";
import { WatchHeroCarouselMui } from "../components/hero/hero-carouel";
import { HeroMinimalPreview } from "../components/hero/hero-minimal-preview";
import { HeroModernPreview } from "../components/hero/hero-modern-preview";
import HeroSparklePreview from "../components/hero/hero-sparkle-preview";

const sections = [
  // {
  //   id: "hero-sparkle",
  //   title: "Hero with Sparkle Effects",
  //   description:
  //     "Animated hero section with sparkle effects, floating elements, and dynamic gradients.",
  //   codeString: heroSparkleString,
  //   preview: <HeroSparklePreview />,
  // },
  {
    id: "hero-carousel",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    codeString: heroCarouselString,
    preview: <WatchHeroCarouselMui />,
  },
  {
    id: "hero-paralax",
    title: "Hero Parallax",
    description:
      "Hero parallax section with image and text.",
    codeString: heroParalaxString,
    preview: <HeroModernPreview />,
  },
  {
    id: "hero-minimal",
    title: "Hero Minimal",
    description:
      "Clean and minimal hero section with modern design and circular image elements.",
    codeString: heroMinimalString,
    preview: <HeroMinimalPreview />,
  },
  // {
  //   id: "hero-basic",
  //   title: "Hero Basic",
  //   description:
  //     "Simple and clean hero section with basic layout and typography.",
  //   codeString: heroBasicString,
  //   preview: <BasicHero />,
  // },
];

export const HeroView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Hero", path: "" },
        ]}
      />
      <PageTitle
        title="Hero"
        description="Explore a collection of modern hero sections to make a bold first impression. Find inspiration for impactful headlines, backgrounds, and call-to-action layouts."
      />

      <Divider sx={{ my: 4 }} />

      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />
          <CodePreviewCopyWrapper
            codeString={section.codeString}
            preview={section.preview}
          />
        </Box>
      ))}
    </Box>
  );
};
