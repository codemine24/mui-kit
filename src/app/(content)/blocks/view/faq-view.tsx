"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { faqSingleColString } from "../code-string/faq/faq-single-col-string";
import { faqTwoColString } from "../code-string/faq/faq-two-col-string";
import { faqWithImgString } from "../code-string/faq/faq-with-img-string";
import { FaqSingleColPreview } from "../components/faq/faq-single-col-preview";
import { FaqTwoColPreview } from "../components/faq/faq-two-col-preview";
import { FaqWithImgPreview } from "../components/faq/faq-with-img-preview";

const sections = [
  {
    id: "faq-1",
    title: "Single column",
    description:
      "Single column FAQ section that will fit most of the websites.",
    codeString: faqSingleColString,
    preview: <FaqSingleColPreview />,
  },
  {
    id: "faq-2",
    title: "Single column",
    description:
      "Two column with description and FAQ that will fit most of the websites.",
    codeString: faqTwoColString,
    preview: <FaqTwoColPreview />,
  },
  {
    id: "faq-3",
    title: "With image",
    description: "FAQ section with a modern image and questions. ",
    codeString: faqWithImgString,
    preview: <FaqWithImgPreview />,
  },
];

export const FaqView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "FAQ", path: "" },
        ]}
      />
      <PageTitle
        title="Frequently Asked Questions"
        description="Frequently asked question section with most commonly used layouts. New section will be added soon. "
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
