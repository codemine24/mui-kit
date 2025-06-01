"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { csTwoColsString } from "../code-string/coming-soon/cs-two-cols-string";
import { copyrightThreeColString } from "../code-string/copyright/copyright-three-col-string";
import { ctaImageBgString } from "../code-string/cta/cta-image-bg-string";
import { CSTwoColsPreview } from "../components/coming-soon/cs-two-cols-preview";
import { CSWithCounterPreview } from "../components/coming-soon/cs-with-counter-preview";
import { CopyrightThreeColPreview } from "../components/copyright/copyright-three-col-preview";

const sections = [
  {
    id: "copyright-1",
    title: "Three columns",
    description:
      "Three columns copyright section with copyright text, social media links and navigation. ",
    codeString: copyrightThreeColString,
    preview: <CopyrightThreeColPreview />,
  },
  {
    id: "copyright-2",
    title: "Two columns",
    description:
      "This coming soon has two columns design with an email collecting input. If you want to collect your user email, you can use this section.",
    codeString: csTwoColsString,
    preview: <CSTwoColsPreview />,
  },
  {
    id: "copyright-3",
    title: "With counter",
    description:
      "This coming soon section has a built in countdown timer. If you want to show a counter, you can use this section.",
    codeString: ctaImageBgString,
    preview: <CSWithCounterPreview />,
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
