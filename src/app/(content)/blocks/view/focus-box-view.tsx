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
    title: "Focus box grid layout",
    description:
      "You can add multiple grid block in this layout. This layout is fully built using Material UI only.",
    codeString: focusBoxString,
    preview: <FocusBoxPreview />,
  },
  {
    id: "Focus-box-2",
    title: "Focus box with image card.",
    description: "Material UI focus box with simple image card.",
    codeString: focusBoxTwoString,
    preview: <FocusBoxTwoPreview />,
  },
  {
    id: "Focus-box-3",
    title: "Nested layout",
    description: "This material ui focus box variant has nested layout. ",
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
          { label: "Focus box", path: "" },
        ]}
      />
      <PageTitle
        title="Focus box"
        description="Focus box section is perfect to showcase your specific skills or to tell about your service. "
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
