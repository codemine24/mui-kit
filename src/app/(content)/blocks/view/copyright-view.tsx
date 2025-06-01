"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { copyrightThreeColString } from "../code-string/copyright/copyright-three-col-string";
import { copyrightTwoColString } from "../code-string/copyright/copyright-two-col-string";
import { CopyrightThreeColPreview } from "../components/copyright/copyright-three-col-preview";
import { CopyrightTwoColPreview } from "../components/copyright/copyright-two-col-preview";

const sections = [
  {
    id: "copyright-1",
    title: "Single columns",
    description: "Single column copyright section with copyright text only.",
    codeString: copyrightThreeColString,
    preview: <CopyrightThreeColPreview />,
  },
  {
    id: "copyright-2",
    title: "Two columns",
    description:
      "Two columns copyright section with copyright text and scroll to top button.",
    codeString: copyrightTwoColString,
    preview: <CopyrightTwoColPreview />,
  },
  {
    id: "copyright-3",
    title: "Three columns",
    description:
      "Three columns copyright section with copyright text, social media links and navigation. ",
    codeString: copyrightThreeColString,
    preview: <CopyrightThreeColPreview />,
  },
];

export const CopyrightView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Copyright", path: "" },
        ]}
      />
      <PageTitle
        title="Copyright"
        description="Copyright or bottom footer is one of the most commonly used section in any website. Here you will find different variants of copyrights section. "
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
