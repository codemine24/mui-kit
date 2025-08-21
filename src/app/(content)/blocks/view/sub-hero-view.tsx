"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { subHeroDoubleColString } from "../code-string/sub-hero/sub-hero-double-col-string";
import { subHeroDoubleColTwoString } from "../code-string/sub-hero/sub-hero-double-col-two-string";
import { subHeroSingleColString } from "../code-string/sub-hero/sub-hero-single-col-string";
import { subHeroSingleColTwoString } from "../code-string/sub-hero/sub-hero-single-col-two-string";
import { SubHeroDoubleColPreview } from "../components/sub-hero/sub-hero-double-col-preview";
import { SubHeroDoubleColTwoPreview } from "../components/sub-hero/sub-hero-double-col-two-preview";
import { SubHeroSingleColPreview } from "../components/sub-hero/sub-hero-single-col-preview";
import { SubHeroSingleColTwoPreview } from "../components/sub-hero/sub-hero-single-col-two-preview";

const sections = [
  {
    id: "sub-hero-1",
    title: "Sub hero with background image",
    description:
      "Basic sub hero section with title, subtitle, and background image. Perfect if you want to showcase your skills or to tell about yourself.",
    codeString: subHeroSingleColString,
    preview: <SubHeroSingleColPreview />,
  },
  {
    id: "sub-hero-2",
    title: "Sub hero without bg",
    description:
      "Single column sub hero section with no background image. Designed with material ui only, nothing else.",
    codeString: subHeroSingleColTwoString,
    preview: <SubHeroSingleColTwoPreview />,
  },
  {
    id: "sub-hero-3",
    title: "Sub hero with image grid",
    description:
      "If you want to display a photo along with the information, you can use this material ui sub hero design. ",
    codeString: subHeroDoubleColString,
    preview: <SubHeroDoubleColPreview />,
  },
  {
    id: "sub-hero-4",
    title: "Stylish sub hero",
    description:
      "If you want to use a unique variant designed with material ui, you can use this block. ",
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
        description="Sub Hero section is perfect to showcase your skills or to tell about yourself. All these section has been built using Material UI and nothing else."
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
