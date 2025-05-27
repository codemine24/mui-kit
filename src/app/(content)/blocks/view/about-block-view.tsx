"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { SoftAlertsCodeString } from "../../elements/code-string/alert/alert-1";
import { AboutBasicPreview } from "../components/about/about-basic-preview";

const sections = [
  {
    id: "about-1",
    title: "Basic About ",
    description:
      "Basic about section with title, description. Use this section to introduce your product or service.",
    codeString: SoftAlertsCodeString,
    preview: <AboutBasicPreview />,
  },
];

export const AboutBlockView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Alert", path: "" },
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
