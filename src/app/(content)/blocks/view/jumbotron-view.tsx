"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { JumbotronFourPreview } from "../components/jumbotron/jumbotron-four-preview";
import { JumbotronPreview } from "../components/jumbotron/jumbotron-preview";
import { JumbotronThreePreview } from "../components/jumbotron/jumbotron-three-preview";
import { JumbotronTwoPreview } from "../components/jumbotron/jumbotron-two-preview";

const sections = [
  {
    id: "jumbotron-1",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    // codeString: heroCarouselString,
    preview: <JumbotronPreview />,
  },
  {
    id: "jumbotron-2",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    // codeString: heroCarouselString,
    preview: <JumbotronTwoPreview />,
  },
  {
    id: "jumbotron-3",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    // codeString: heroCarouselString,
    preview: <JumbotronThreePreview />,
  },
  {
    id: "jumbotron-4",
    title: "Featured product with carousel",
    description:
      "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    // codeString: heroCarouselString,
    preview: <JumbotronFourPreview />,
  },
];

export const JumbotronView = () => {
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
