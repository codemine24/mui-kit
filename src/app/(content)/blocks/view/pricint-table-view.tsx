"use client";
"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { pricingTableDarkString } from "../code-string/pricing-table/pricing-table-dark-string";
import { PricingTableDarkPreview } from "../components/pricing-table/pricing-table-dark-preview";

const sections = [
  {
    id: "feature-1",
    title: "Dark variant",
    description: "Simple pricing table with dark background. ",
    codeString: pricingTableDarkString,
    preview: <PricingTableDarkPreview />,
  },
];

export const PricingTableView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Pricing Table", path: "" },
        ]}
      />
      <PageTitle
        title="Pricing Table"
        description="Show your product price with modern pricing table design with material ui only."
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
