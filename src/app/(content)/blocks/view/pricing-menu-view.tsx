"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { pricingMenuImgString } from "../code-string/pricing-menu/pricing-menu-img-preview";
import { PricingMenuImgPreview } from "../components/pricing-menu/pricing-menu-img-preview";

const sections = [
  {
    id: "pricing-menu-1",
    title: "With image",
    description:
      "Simple pricing menu with image, title, description, and price. This section fully build with material ui only.",
    codeString: pricingMenuImgString,
    preview: <PricingMenuImgPreview />,
  },
];

export const PricingMenuView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Pricing Menu", path: "" },
        ]}
      />
      <PageTitle
        title="Pricing Menu"
        description="Show your product pricing with modern pricing menu design with material ui only."
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
