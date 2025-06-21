"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { testimonialGridColumnString, testimonialGridMultiColumnString, testimonialGridQuoteString, testimonialGridSpotlightString } from "../code-string/testimonial-grid";
import { TestimonialGridColumnPreview } from "../components/testimonial-grid/testimonial-grid-column-preview";
import { TestimonialGridMultiColumnPreview } from "../components/testimonial-grid/testimonial-grid-multi-column-preview";
import { TestimonialGridQuotePreview } from "../components/testimonial-grid/testimonial-grid-quote-preview";
import { TestimonialGridSpotlightPreview } from "../components/testimonial-grid/testimonial-grid-spotlight-preview";

const sections = [
  {
    id: "testimonial-grid-spotlight",
    title: "Testimonial Grid with Spotlight",
    description:
      "Interactive testimonial grid with spotlight effect that highlights the selected testimonial with a dynamic background animation.",
    codeString: testimonialGridSpotlightString,
    preview: <TestimonialGridSpotlightPreview />,
  },
  {
    id: "testimonial-grid-column",
    title: "Testimonial Grid with Stats",
    description:
      "Two-column testimonial layout featuring customer testimonials with star ratings alongside key statistics and company information.",
    codeString: testimonialGridColumnString,
    preview: <TestimonialGridColumnPreview />,
  },
  {
    id: "testimonial-grid-quote",
    title: "Testimonial Quote Grid",
    description:
      "Clean quote-style testimonial grid layout with customer avatars and company information in a card-based design.",
    codeString: testimonialGridQuoteString,
    preview: <TestimonialGridQuotePreview />,
  },
  {
    id: "testimonial-grid-multi-column",
    title: "Multi-Column Testimonial Grid",
    description:
      "Responsive multi-column testimonial grid layout with hover effects and organized customer feedback presentation.",
    codeString: testimonialGridMultiColumnString,
    preview: <TestimonialGridMultiColumnPreview />,
  },
];

export const TestimonialGridView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Testimonial Grid", path: "" },
        ]}
      />
      <PageTitle
            title="Testimonial Grid"
        description="Explore a collection of modern testimonial grid sections to make a bold first impression"
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
