"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { focusBoxString } from "../code-string/focus-box/focus-box-string";
import { focusBoxThreeString } from "../code-string/focus-box/focus-box-three-string";
import { focusBoxTwoString } from "../code-string/focus-box/focus-box-two-string";
import { FocusBoxPreview } from "../components/focus-box/focus-box-preview";
import { FocusBoxThreePreview } from "../components/focus-box/focus-box-three-preview";
import { FocusBoxTwoPreview } from "../components/focus-box/focus-box-two-preview";

const sections = [
  {
    id: "Focus-box-1",
    title: "Sub hero with background image",
    description:
      "Basic sub hero section with title, subtitle, and background image. Perfect if you want to showcase your skills or to tell about yourself.",
    codeString: focusBoxString,
    preview: <FocusBoxPreview />,
  },
  {
    id: "Focus-box-2",
    title: "Sub hero with background image",
    description:
      "Basic sub hero section with title, subtitle, and background image. Perfect if you want to showcase your skills or to tell about yourself.",
    codeString: focusBoxTwoString,
    preview: <FocusBoxTwoPreview />,
  },
  {
    id: "Focus-box-3",
    title: "Sub hero with background image",
    description:
      "Basic sub hero section with title, subtitle, and background image. Perfect if you want to showcase your skills or to tell about yourself.",
    codeString: focusBoxThreeString,
    preview: <FocusBoxThreePreview />,
  },
];

export const FocusBoxView = () => {
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
        title="Focus box"
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
