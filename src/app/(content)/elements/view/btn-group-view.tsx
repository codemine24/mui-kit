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
import { BtnGroupContainedPreview } from "../components/btn-group/btn-contained-preview";
import { BtnGroupOutlinePreview } from "../components/btn-group/btn-outline-preview";
import { BtnGroupTextPreview } from "../components/btn-group/btn-text-preview";
import { BtnGroupSoftBgPreview } from "../components/btn-group/btn-soft-bg-preview";
import { BtnGroupDifferentSizePreview } from "../components/btn-group/btn-different-size-preview";
import { BtnGroupDifferentSizeContainedPreview } from "../components/btn-group/btn-different-size-contained-preview";

const sections = [
  {
    id: "btn-group-1",
    title: "Button contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupContainedPreview />,
  },
  {
    id: "btn-group-2",
    title: "Button outline",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupOutlinePreview />,
  },
  {
    id: "btn-group-3",
    title: "Button group text",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupTextPreview />,
  },
  {
    id: "btn-group-4",
    title: "Button Soft Background",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupSoftBgPreview />,
  },
  {
    id: "btn-group-5",
    title: "Button different size outlineed",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupDifferentSizePreview />,
  },
  {
    id: "btn-group-6",
    title: "Button different size contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnGroupDifferentSizeContainedPreview />,
  },
];

export const BtnGroupView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Accordion", path: "" },
        ]}
      />
      <PageTitle
        title="Accordion"
        description="Use material ui accordion with different styles to show your FAQ's and other info."
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
