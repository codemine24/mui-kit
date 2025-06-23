"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import {
  testimonialSliderAdvancedString,
  testimonialJourneyString,
  testimonialSimpleString,
} from "../code-string/testimonial-slider";
import { TestimonialSliderAdvancedPreview } from "../components/testimonial-slider/testimonial-slider-advanced-preview";
import { TestimonialJourneyPreview } from "../components/testimonial-slider/testimonial-journey-preview";
import { TestimonialSimplePreview } from "../components/testimonial-slider/testimonial-simple-preview";

const sections = [
  {
    id: "testimonial-slider-advanced",
    title: "Advanced Testimonial Slider",
    description:
      "A sophisticated testimonial slider with autoplay, manual controls, and a modern, engaging design.",
    codeString: testimonialSliderAdvancedString,
    preview: <TestimonialSliderAdvancedPreview />,
  },
  {
    id: "testimonial-journey",
    title: "Testimonial Journey",
    description:
      "A sophisticated testimonial slider with autoplay, manual controls, and a modern, engaging design.",
    codeString: testimonialJourneyString,
    preview: <TestimonialJourneyPreview />,
  },
  {
    id: "testimonial-simple",
    title: "Simple Testimonial Slider",
    description: "A minimal and clean testimonial slider with autoplay and simple navigation.",
    codeString: testimonialSimpleString,
    preview: <TestimonialSimplePreview />,
  },
];

export const TestimonialSliderView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Testimonial Slider", path: "" },
        ]}
      />
      <PageTitle
        title="Testimonial Slider"
        description="Explore a collection of modern testimonial slider sections to showcase customer feedback."
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
