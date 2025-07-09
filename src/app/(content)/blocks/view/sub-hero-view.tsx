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
import { subHeroString } from "../code-string/sub-hero/sub-hero-string";
import { SubHeroPreview } from "../components/sub-hero/sub-hero-basic-preview";

const sections = [
  {
    id: "sub-hero-1",
    title: "Basic Sub Hero Section ",
    description:
      "Basic sub hero section with title, subtitle, cta button and image.Most of the portfolio and corporate website use this section website to introduce ypurself",
    codeString: subHeroString,
    preview: <SubHeroPreview />,
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
