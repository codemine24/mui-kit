"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { faqTwoColString } from "../code-string/faq/faq-two-col-string";
import { faqWithImgString } from "../code-string/faq/faq-with-img-string";
import { featureWithCardCodeString } from "../code-string/feature/feature-with-card-string";
import { FaqTwoColPreview } from "../components/faq/faq-two-col-preview";
import { FaqWithImgPreview } from "../components/faq/faq-with-img-preview";
import { FeatureWithCardPreview } from "../components/feature/feature-with-card-preview";

const sections = [
  {
    id: "feature-1",
    title: "Vertical card",
    description:
      "Featured service section with vertical cards. Fully responsive and designed with material ui only. ",
    codeString: featureWithCardCodeString,
    preview: <FeatureWithCardPreview />,
  },
  {
    id: "feature-2",
    title: "Single column",
    description:
      "Two column with description and FAQ that will fit most of the websites.",
    codeString: faqTwoColString,
    preview: <FaqTwoColPreview />,
  },
  {
    id: "feature-3",
    title: "With image",
    description: "FAQ section with a modern image and questions. ",
    codeString: faqWithImgString,
    preview: <FaqWithImgPreview />,
  },
];

export const FeatureView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Feature & Benefits", path: "" },
        ]}
      />
      <PageTitle
        title="Feature & Benefits"
        description="Showcase your features and benefits with this section. "
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
