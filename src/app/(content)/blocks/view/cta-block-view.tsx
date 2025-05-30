"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { ctaTwoColsString } from "../code-string/cta/cta-two-cols-string";
import { CTATwoColsPreview } from "../components/cta/cta-two-cols-preview";

const sections = [
  {
    id: "cta-1",
    title: "Two Columns",
    description:
      "One of the most commonly used Call To Action sections. Simple but effective to grab your visitor's attention.",
    codeString: ctaTwoColsString,
    preview: <CTATwoColsPreview />,
  },
  
];

export const CTAView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "About", path: "" },
        ]}
      />
      <PageTitle
        title="About"
        description="About us section designed with purely material ui and nothing else. "
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
