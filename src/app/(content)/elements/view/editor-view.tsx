"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { SoftAlertsCodeString } from "../code-string/alert/alert-1";
import SoftAlerts from "../components/alert/alert-1";

const sections = [
  {
    id: "alert-1",
    title: "Soft",
    description:
      "Use Material UI soft alerts with extended design. No extra package required.",
    codeString: SoftAlertsCodeString,
    preview: <SoftAlerts />,
  },
];

export const EditorView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Editor", path: "" },
        ]}
      />
      <PageTitle
        title="Editor"
        description="Text editor with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Alert Section */}
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
