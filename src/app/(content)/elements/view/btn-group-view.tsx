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
import { BtnContainedPreview } from "../components/btn-group/btn-contained-preview";
import { BtnOutlinePreview } from "../components/btn-group/btn-outline-preview";
import { BtnTextPreview } from "../components/btn-group/btn-text-preview";
import { BtnSoftBgPreview } from "../components/btn-group/btn-soft-bg-preview";
import { BtnDifferentSizePreview } from "../components/btn-group/btn-different-size-preview";
import { BtnDifferentSizeContainedPreview } from "../components/btn-group/btn-different-size-contained-preview";
import { BtnVerticalPreview } from "../components/btn-group/btn-vertical-preview";

const sections = [
  {
    id: "btn-group-1",
    title: "Button contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnContainedPreview />,
  },
  {
    id: "btn-group-2",
    title: "Button outline",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnOutlinePreview />,
  },
  {
    id: "btn-group-3",
    title: "Button group text",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnTextPreview />,
  },
  {
    id: "btn-group-4",
    title: "Button Soft Background",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnSoftBgPreview />,
  },
  {
    id: "btn-group-5",
    title: "Button different size outlined",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnDifferentSizePreview />,
  },
  {
    id: "btn-group-6",
    title: "Button different size contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnDifferentSizeContainedPreview />,
  },
  {
    id: "btn-group-7",
    title: "Vertical button group ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnVerticalPreview />,
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
