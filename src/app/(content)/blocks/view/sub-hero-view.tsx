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
import { subHeroDoubleColString } from "../code-string/sub-hero/sub-hero-double-col-string";
import { subHeroDoubleColTwoString } from "../code-string/sub-hero/sub-hero-double-col-two-string";
import { subHeroSingleColString } from "../code-string/sub-hero/sub-hero-single-col-string";
import { subHeroSingleColTwoString } from "../code-string/sub-hero/sub-hero-single-col-two-string";
import { SubHeroPreview } from "../components/sub-hero/sub-hero-double-col-preview";
import { SubHeroDoubleColTwoPreview } from "../components/sub-hero/sub-hero-double-col-two-preview";
import { SubHeroSingleColPreview } from "../components/sub-hero/sub-hero-single-col-preview";
import { SubHeroSingleColTwoPreview } from "../components/sub-hero/sub-hero-single-col-two-preview";

const sections = [
  {
    id: "sub-hero-single-col",
    title: "Single column sub hero section",
    description:
      "Basic sub hero section with title, subtitle, cta button and image. Most of the portfolio and corporate website use this section to introduce yourself",
    codeString: subHeroSingleColString,
    preview: <SubHeroSingleColPreview />,
  },
  {
    id: "sub-hero-single-col-two",
    title: "Single column sub hero section ",
    description:
      "Basic sub hero section with title, subtitle, cta button and image. Most of the portfolio and corporate website use this section to introduce yourself",
    codeString: subHeroSingleColTwoString,
    preview: <SubHeroSingleColTwoPreview />,
  },
  {
    id: "sub-hero-1",
    title: "Double column sub hero section ",
    description:
      "Basic sub hero section with title, subtitle, cta button and image. Most of the portfolio and corporate website use this section to introduce yourself",
    codeString: subHeroDoubleColString,
    preview: <SubHeroPreview />,
  },
  {
    id: "sub-hero-double-col-two",
    title: "Double column sub hero section ",
    description:
      "Basic sub hero section with title, subtitle, cta button and image. Most of the portfolio and corporate website use this section to introduce yourself",
    codeString: subHeroDoubleColTwoString,
    preview: <SubHeroDoubleColTwoPreview />,
  },
];

export const SubHeroView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Sub Hero", path: "" },
        ]}
      />
      <PageTitle
        title="Sub Hero"
        description="Showcase your services with modern service cards design with material ui only."
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
