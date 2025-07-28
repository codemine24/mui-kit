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
import { BtnTogglePreview } from "../components/btn-group/btn-toggle-preview";
import { buttonContainedString } from "../code-string/button";
import { btnOutlineString } from "../code-string/btn-group/btn-outline-string";
import { btnTextString } from "../code-string/btn-group/btn-text-string";
import { btnSoftBgString } from "../code-string/btn-group/btn-soft-bg-string";
import { btnDifferentSizeString } from "../code-string/btn-group/btn-different-size-string";
import { btnDifferentSizeContainedString } from "../code-string/btn-group/btn-different-size-contained-string";
import { btnVerticalString } from "../code-string/btn-group/btn-vertical-string";
import { BtnToggleVerticalPreview } from "../components/btn-group/btn-toggle-vertical-preview";
import { BtnCheckBoxPreview } from "../components/btn-group/btn-check-box-preview";

const sections = [
  {
    id: "btn-group-1",
    title: "Button contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: buttonContainedString,
    preview: <BtnContainedPreview />,
  },
  {
    id: "btn-group-2",
    title: "Button outline",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnOutlineString,
    preview: <BtnOutlinePreview />,
  },
  {
    id: "btn-group-3",
    title: "Button group text",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnTextString,
    preview: <BtnTextPreview />,
  },
  {
    id: "btn-group-4",
    title: "Button Soft Background",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnSoftBgString,
    preview: <BtnSoftBgPreview />,
  },
  {
    id: "btn-group-5",
    title: "Button different size outlined",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnDifferentSizeString,
    preview: <BtnDifferentSizePreview />,
  },
  {
    id: "btn-group-6",
    title: "Button different size contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnDifferentSizeContainedString,
    preview: <BtnDifferentSizeContainedPreview />,
  },
  {
    id: "btn-group-7",
    title: "Vertical button group ",
    description: "A regular but elegant accordion with solid background color",
    codeString: btnVerticalString,
    preview: <BtnVerticalPreview />,
  },
  {
    id: "btn-group-8",
    title: "Vertical Toggle button ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnTogglePreview />,
  },
  {
    id: "btn-group-9",
    title: "Horizontal Toggle button ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnToggleVerticalPreview />,
  },
  {
    id: "btn-group-10",
    title: "Check box Toggle button ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnCheckBoxPreview />,
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
