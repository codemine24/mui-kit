"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { aboutBasicString } from "../code-string/about/about-basic-string";
import { aboutImageBgString } from "../code-string/about/about-image-bg-string";
import { aboutImageString } from "../code-string/about/about-image-string";
import { aboutReversedSectionString } from "../code-string/about/about-reversed-section-string";
import { aboutVideoString } from "../code-string/about/about-video-string";
import { AboutBasicPreview } from "../components/about/about-basic-preview";
import { AboutImageBgPreview } from "../components/about/about-image-bg-preview";
import { AboutImagePreview } from "../components/about/about-image-preview";
import { AboutReversedSectionsPreview } from "../components/about/about-reversed-sections-preview";
import { AboutVideoPreview } from "../components/about/about-video-preview";

const sections = [
  {
    id: "about-1",
    title: "Basic About ",
    description:
      "Basic about section with title, description. Use this section to introduce your product or service.",
    codeString: aboutBasicString,
    preview: <AboutBasicPreview />,
  },
  {
    id: "about-2",
    title: "With image",
    description:
      "About section with image. Most of the website uses this type of about section.",
    codeString: aboutImageString,
    preview: <AboutImagePreview />,
  },
  {
    id: "about-3",
    title: "Image with background color",
    description:
      "This about section is slightly different from the previous one. It uses image background color which made this one more attractive.",
    codeString: aboutImageBgString,
    preview: <AboutImageBgPreview />,
  },
  {
    id: "about-4",
    title: "Reversed sections with image",
    description:
      "One of the most common about section. use it if you need two similar sections. ",
    codeString: aboutReversedSectionString,
    preview: <AboutReversedSectionsPreview />,
  },
  {
    id: "about-5",
    title: "About with video",
    description:
      "Video section with title, description and video. Use this section to introduce your product or service.",
    codeString: aboutVideoString,
    preview: <AboutVideoPreview />,
  },
];

export const AboutBlockView = () => {
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
