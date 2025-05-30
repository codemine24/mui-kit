"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { ctaImageBgString } from "../code-string/cta/cta-image-bg-string";
import { ctaSingleColString } from "../code-string/cta/cta-single-col-string";
import { ctaTwoColsString } from "../code-string/cta/cta-two-cols-string";
import { CTAImageBgPreview } from "../components/cta/cta-image-bg-preview";
import { CTASingleColPreview } from "../components/cta/cta-single-col-preview";
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
  {
    id: "cta-2",
    title: "Single Column",
    description:
      "One column Call to action section. Simple title, description and an attractive action button. ",
    codeString: ctaSingleColString,
    preview: <CTASingleColPreview />,
  },
  {
    id: "cta-3",
    title: "Image in background",
    description:
      "Use this attractive Image background Call to action if you need visible image in background.",
    codeString: ctaImageBgString,
    preview: <CTAImageBgPreview />,
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
          { label: "CTA", path: "" },
        ]}
      />
      <PageTitle
        title="Call To Action"
        description="Grab your customer attention with a Call To Action section. All the section built with Material UI and nothing else. "
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
