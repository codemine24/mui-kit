"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { heroCarouselString } from "../code-string/hero/hero-carousel-string";
import { heroMinimalString } from "../code-string/hero/hero-minimal-string";
import { heroBasicTwoColsString } from "../code-string/hero/hero-paralax-string";
import {
  HeroBasicTwoColsPreview
} from "../components/hero/hero-basic-two-cols-preview";
import { WatchHeroCarouselPreview } from "../components/hero/hero-carouel-preview";
import { HeroMinimalPreview } from "../components/hero/hero-minimal-preview";

const sections = [
  {
    id: "hero-carousel",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    codeString: heroCarouselString,
    preview: <WatchHeroCarouselPreview />,
  },
  {
    id: "hero-paralax",
    title: "Hero Basic Two Columns",
    description: "Two columns hero section with title and image. ",
    codeString: heroBasicTwoColsString,
    preview: <HeroBasicTwoColsPreview />,
  },
  {
    id: "hero-minimal",
    title: "Hero Minimal",
    description:
      "Clean and minimal hero section with modern design and circular image elements.",
    codeString: heroMinimalString,
    preview: <HeroMinimalPreview />,
  },
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
        description="We tried to design some commonly used hero sections for you. All the section are designed with purely material ui and nothing else. "
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
