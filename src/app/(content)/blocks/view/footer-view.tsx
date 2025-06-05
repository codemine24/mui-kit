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
import { footerSingleColString } from "../code-string/footer/footer-single-col-string";
import { footerThreeColString } from "../code-string/footer/footer-three-col-string";
import { CopyrightThreeColPreview } from "../components/copyright/copyright-three-col-preview";
import { FooterSingleColPreview } from "../components/footer/footer-single-col-preview";
import { FooterThreeColPreview } from "../components/footer/footer-three-col-preview";

const sections = [
  {
    id: "footer-1",
    title: "Single column",
    description:
      "Single column footer section logo, navigation and copyright. ",
    codeString: footerSingleColString,
    preview: <FooterSingleColPreview />,
  },
  {
    id: "footer-2",
    title: "Three columns",
    description:
      "Three columns footer with about, navigation and social media links.",
    codeString: footerThreeColString,
    preview: <FooterThreeColPreview />,
  },
  {
    id: "footer-3",
    title: "Three columns",
    description:
      "Three columns copyright section with copyright text, social media links and navigation. ",
    codeString: copyrightThreeColString,
    preview: <CopyrightThreeColPreview />,
  },
];

export const FooterView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Footer", path: "" },
        ]}
      />
      <PageTitle
        title="Footer"
        description="We have added modern footer variants designed with material ui and nothing else. "
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
