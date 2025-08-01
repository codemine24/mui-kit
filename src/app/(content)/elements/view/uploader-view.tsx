"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { UploadSingleImagePreview } from "../components/uploader";

const sections = [
  {
    id: "uploader-1",
    title: "Single Image Upload",
    description:
      "Use Material UI soft alerts with extended design. No extra package required.",
    codeString: '',
    preview: <UploadSingleImagePreview />,
  },
];

export const UploaderView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Uploader", path: "" },
        ]}
      />
      <PageTitle
        title="Uploader"
        description="Material UI core uploader with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Uploader Section */}
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
