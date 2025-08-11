"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { ExternalPackageAlert } from "@/components/external-package-alert";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { uploadAvatarString } from "../code-string/upload/upload-avatar-string";
import { uploadMultipleFileInputString } from "../code-string/upload/upload-multiple-file-input-string";
import { uploadMultipleImageString } from "../code-string/upload/upload-multiple-image";
import { uploadSimpleString } from "../code-string/upload/upload-simple-string";
import { uploadSingleFileInputString } from "../code-string/upload/upload-single-file-input-string";
import { uploadSingleImageString } from "../code-string/upload/upload-single-image-string";
import {
  UploadAvatarPreview,
  UploadMultipleFileInputPreview,
  UploadMultipleImagePreview,
  UploadSimplePreview,
  UploadSingleFileInputPreview,
  UploadSingleImagePreview,
} from "../components/upload";

const sections = [
  {
    id: "upload-1",
    title: "Simple image uploader",
    description:
      "This variant is very straightforward. No dropzone, not multiple files, simple image uploader.",
    codeString: uploadSimpleString,
    preview: <UploadSimplePreview />,
  },
  {
    id: "upload-2",
    title: "Single image upload",
    description: "Single image uploader with dropzone functionality. ",
    codeString: uploadSingleImageString,
    preview: <UploadSingleImagePreview />,
  },
  {
    id: "upload-3",
    title: "Multiple image upload",
    description: "Multiple image uploader with dropzone functionality. ",
    codeString: uploadMultipleImageString,
    preview: <UploadMultipleImagePreview />,
  },
  {
    id: "upload-4",
    title: "Avatar Upload",
    description: "Avatar uploader, perfect for profile updates. ",
    codeString: uploadAvatarString,
    preview: <UploadAvatarPreview />,
  },
  {
    id: "upload-5",
    title: "Single input uploader",
    description:
      "If you need uploader inside forms, you can use this input uploader variant.",
    codeString: uploadSingleFileInputString,
    preview: <UploadSingleFileInputPreview />,
  },
  {
    id: "upload-6",
    title: "Multiple input uploader",
    description:
      "If you need input uploader with multiple files upload functionality, you can go with this variant. ",
    codeString: uploadMultipleFileInputString,
    preview: <UploadMultipleFileInputPreview />,
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
          { label: "Upload", path: "" },
        ]}
      />
      <PageTitle
        title="Uploader"
        description="Material ui doesn't provide uploader component so we created for you. We have uploader variant for different use cases."
      />

      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        sx={{ mb: 4 }}
        packages={[
          {
            name: "react-dropzone",
            url: "https://www.npmjs.com/package/react-dropzone",
          },
        ]}
      />
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
