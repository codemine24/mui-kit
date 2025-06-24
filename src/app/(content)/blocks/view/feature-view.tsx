"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { ExternalPackageAlert } from "@/components/external-package-alert";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { featureCustomIconString } from "../code-string/feature/feature-custom-icon-string";
import { featureHorizontalCardCodeString } from "../code-string/feature/feature-horizontal-card-string";
import { featureWithCardString } from "../code-string/feature/feature-with-card-string";
import { featureWithImageString } from "../code-string/feature/feature-with-image-string";
import { FeatureCustomIconPreview } from "../components/feature/feature-custom-icon-preview";
import { FeatureHorizontalCardPreview } from "../components/feature/feature-horizontal-card-preview";
import { FeatureWithCardPreview } from "../components/feature/feature-with-card-preview";
import { FeatureWithImagePreview } from "../components/feature/feature-with-image-preview";

const sections = [
  {
    id: "feature-1",
    title: "Vertical cards",
    description:
      "Featured service section with vertical cards. Fully responsive and designed with material ui only. ",
    codeString: featureWithCardString,
    preview: <FeatureWithCardPreview />,
  },
  {
    id: "feature-2",
    title: "Horizontal cards",
    description: "If you like horizontal cards, you can use this variant. ",
    codeString: featureHorizontalCardCodeString,
    preview: <FeatureHorizontalCardPreview />,
  },

  {
    id: "feature-3",
    title: "Three columns",
    description: "Three column feature section with image and feature list.",
    codeString: featureWithImageString,
    preview: <FeatureWithImagePreview />,
  },
  {
    id: "feature-4",
    title: "Custom icon",
    description: "Feature cards with custom material ui icon.",
    codeString: featureCustomIconString,
    preview: <FeatureCustomIconPreview />,
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
      <ExternalPackageAlert
        packages={[
          {
            name: "@iconify/react",
            url: "https://www.npmjs.com/package/@iconify/react",
          },
        ]}
      />
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
