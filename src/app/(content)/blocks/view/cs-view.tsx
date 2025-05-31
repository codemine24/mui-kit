"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { RegularAlert } from "@/components/regular-alert";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { csClassicString } from "../code-string/coming-soon/cs-classic-string";
import { csTwoColsString } from "../code-string/coming-soon/cs-two-cols-string";
import { ctaImageBgString } from "../code-string/cta/cta-image-bg-string";
import { CSClassicPreview } from "../components/coming-soon/cs-classic-preview";
import { CSTwoColsPreview } from "../components/coming-soon/cs-two-cols-preview";
import { CSWithCounterPreview } from "../components/coming-soon/cs-with-counter-preview";

const sections = [
  {
    id: "cs-1",
    title: "Classic coming soon",
    description:
      "Simple coming soon section. You can use height: calc(100vh - 100px) if you want this section to cover full page.",
    codeString: csClassicString,
    preview: <CSClassicPreview />,
  },
  {
    id: "cs-2",
    title: "Two columns",
    description:
      "This coming soon has two columns design with an email collecting input. If you want to collect your user email, you can use this section.",
    codeString: csTwoColsString,
    preview: <CSTwoColsPreview />,
  },
  {
    id: "cs-3",
    title: "With counter",
    description:
      "This coming soon section has a built in countdown timer. If you want to show a counter, you can use this section.",
    codeString: ctaImageBgString,
    preview: <CSWithCounterPreview />,
  }
];

export const CSView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Coming Soon", path: "" },
        ]}
      />
      <PageTitle
        title="Coming Soon"
        description="Let your customer know that you are cooking something special with these amazing coming soon templates. All the section built with Material UI and nothing else. "
      />

      <Divider sx={{ my: 4 }} />
      <RegularAlert message="Please use custom height (eg: height: calc(100vh - 100px) if you want to use these as full page. " />
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
