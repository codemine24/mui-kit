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
import { featureWithCardString } from "../code-string/feature/feature-with-card-string";
import { ServicesWithCardPreview } from "../components/services/services-with-card-preview";

const sections = [
  {
    id: "services-1",
    title: "Vertical cards",
    description:
      "Featured service section with vertical cards. Fully responsive and designed with material ui only. ",
    codeString: featureWithCardString,
    preview: <ServicesWithCardPreview />,
  },
];

export const ServicesView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Services", path: "" },
        ]}
      />
      <PageTitle
        title="Services"
        description="Showcase your services with modern service cards design with material ui only."
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
