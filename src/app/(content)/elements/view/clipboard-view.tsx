"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import { ClipboardNonEditablePreview } from "../components/clipboard/clipboard-non editable-preview";
import { ClipboardV2Preview } from "../components/clipboard/clipboard-v2-preview";
import { ClipboardV3Preview } from "../components/clipboard/clipboard-v3-preview";
import { ClipboardV4Preview } from "../components/clipboard/clipboard-v4-preview";

const sections = [
  {
    id: "clipboard-1",
    title: "Non-editable Clipboard",
    description: "",
    codeString: "",
    preview: <ClipboardNonEditablePreview />,
  },
  {
    id: "clipboard-2",
    title: "Clipboard version 2",
    description: "",
    codeString: "",
    preview: <ClipboardV2Preview />,
  },
  {
    id: "clipboard-3",
    title: "Clipboard version 3",
    description: "",
    codeString: "",
    preview: <ClipboardV3Preview />,
  },
  {
    id: "clipboard-4",
    title: "Clipboard version 4",
    description: "",
    codeString: "",
    preview: <ClipboardV4Preview />,
  },
];

export const ClipboardView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Clipboard", path: "" },
        ]}
      />
      <PageTitle title="Clipboard" description="Use material ui Clipboard" />

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
