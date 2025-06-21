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
import WatchHeroCarousel from "../components/hero/hero-carousel-preview";

const sections = [
  {
    id: "hero-paralax-1",
    title: "Hero Parallax",
    description:
      "Hero parallax section with image and text.",
    codeString: heroParalaxString,
    preview: <WatchHeroCarousel />,
  },
//   {
//     id: "feature-product-2",
//     title: "Product with carousel",
//     description:
//       "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
//     codeString: featureProductWithCarouselString,
//     preview: <FeatureProductWithCarouselPreview />,
//   },
//   {
//     id: "feature-product-3",
//     title: "Featured product with minimal animation",
//     description:
//       "Add minimal hover animation to your featured product section.",
//     codeString: featureProductMinimalAnimationString,
//     preview: <FeaturedProductMinimalAnimationPreview />,
//   },
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
