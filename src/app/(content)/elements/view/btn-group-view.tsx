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
import { btnDifferentSizeContainedString } from "../code-string/btn-group/btn-different-size-contained-string";
import { btnDifferentSizeString } from "../code-string/btn-group/btn-different-size-string";
import { btnGroupContainedString } from "../code-string/btn-group/btn-group-contained-string";
import { btnGroupModernString } from "../code-string/btn-group/btn-group-modern-string";
import { btnOutlineString } from "../code-string/btn-group/btn-outline-string";
import { btnSoftBgString } from "../code-string/btn-group/btn-soft-bg-string";
import { btnTextString } from "../code-string/btn-group/btn-text-string";
import { btnVerticalString } from "../code-string/btn-group/btn-vertical-string";
import { BtnCheckBoxPreview } from "../components/btn-group/btn-check-box-preview";
import { BtnContainedIconPreview } from "../components/btn-group/btn-contained-icon-preview";
import { BtnDifferentSizeContainedPreview } from "../components/btn-group/btn-different-size-contained-preview";
import { BtnDifferentSizePreview } from "../components/btn-group/btn-different-size-preview";
import { BtnGroupContainedPreview } from "../components/btn-group/btn-group-contained-preview";
import { BtnGroupModernPreview } from "../components/btn-group/btn-group-modern-preview";
import { BtnOutlinePreview } from "../components/btn-group/btn-outline-preview";
import { BtnSoftBgPreview } from "../components/btn-group/btn-soft-bg-preview";
import { BtnTextPreview } from "../components/btn-group/btn-text-preview";
import { BtnTogglePreview } from "../components/btn-group/btn-toggle-preview";
import { BtnToggleVerticalPreview } from "../components/btn-group/btn-toggle-vertical-preview";
import { BtnVerticalPreview } from "../components/btn-group/btn-vertical-preview";
import { BtnVerticalTogglePreview } from "../components/btn-group/btn-vertical-toggle-preview";

const sections = [
  {
    id: "btn-group-1",
    title: "Modern button pair",
    description:
      "Use this modern look button group build using material ui only. ",
    codeString: btnGroupModernString,
    preview: <BtnGroupModernPreview />,
  },
  {
    id: "btn-group-2",
    title: "Button contained",
    description: "Contained button group has solid background color.",
    codeString: btnGroupContainedString,
    preview: <BtnGroupContainedPreview />,
  },
  {
    id: "btn-group-22",
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
  {
    id: "btn-group-11",
    title: "Vertical toggle button and checkbox ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnVerticalTogglePreview />,
  },
  {
    id: "btn-group-12",
    title: "Vertical toggle button and checkbox ",
    description: "A regular but elegant accordion with solid background color",
    codeString: "",
    preview: <BtnContainedIconPreview />,
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
