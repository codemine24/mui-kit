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
import { btnGroupContainedString } from "../code-string/btn-group/btn-group-contained-string";
import { btnGroupDifferentSizeContainedString } from "../code-string/btn-group/btn-group-different-size-contained-string";
import { btnGroupDifferentSizeString } from "../code-string/btn-group/btn-group-different-size-string";
import { btnGroupHorizontalToggleString } from "../code-string/btn-group/btn-group-horizontal-toggle-string";
import { btnGroupModernString } from "../code-string/btn-group/btn-group-modern-string";
import { btnGroupOutlineString } from "../code-string/btn-group/btn-group-outline-string";
import { btnGroupSoftBgString } from "../code-string/btn-group/btn-group-soft-bg-string";
import { btnGroupTextString } from "../code-string/btn-group/btn-group-text-string";
import { btnGroupVerticalString } from "../code-string/btn-group/btn-group-vertical-string";
import { btnGroupVerticalToggleString } from "../code-string/btn-group/btn-group-vertical-toggle-string copy";
import { BtnCheckBoxPreview } from "../components/btn-group/btn-check-box-preview";
import { BtnContainedIconPreview } from "../components/btn-group/btn-contained-icon-preview";
import { BtnGroupContainedPreview } from "../components/btn-group/btn-group-contained-preview";
import { BtnGroupDifferentSizeContainedPreview } from "../components/btn-group/btn-group-different-size-contained-preview";
import { BtnGroupDifferentSizePreview } from "../components/btn-group/btn-group-different-size-preview";
import { BtnGroupHorizontalTogglePreview } from "../components/btn-group/btn-group-Horizontal-toggle-preview";
import { BtnGroupModernPreview } from "../components/btn-group/btn-group-modern-preview";
import { BtnGroupOutlinePreview } from "../components/btn-group/btn-group-outline-preview";
import { BtnGroupSoftBgPreview } from "../components/btn-group/btn-group-soft-bg-preview";
import { BtnGroupTextPreview } from "../components/btn-group/btn-group-text-preview";
import { BtnGroupVerticalPreview } from "../components/btn-group/btn-group-vertical-preview";
import { BtnGroupVerticalTogglePreview } from "../components/btn-group/btn-group-vertical-toggle-preview";
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
    id: "btn-group-3",
    title: "Button outline",
    description:
      "Use this outlined button group build using material ui only. ",
    codeString: btnGroupOutlineString,
    preview: <BtnGroupOutlinePreview />,
  },
  {
    id: "btn-group-4",
    title: "Button group text",
    description: "mui button group with text buttons.",
    codeString: btnGroupTextString,
    preview: <BtnGroupTextPreview />,
  },
  {
    id: "btn-group-5",
    title: "Button soft background",
    description: "This material ui button group has soft background color.",
    codeString: btnGroupSoftBgString,
    preview: <BtnGroupSoftBgPreview />,
  },
  {
    id: "btn-group-6",
    title: "Button different size outlined",
    description:
      "material ui button group with different size and outlined border.",
    codeString: btnGroupDifferentSizeString,
    preview: <BtnGroupDifferentSizePreview />,
  },
  {
    id: "btn-group-7",
    title: "Button different size contained",
    description:
      "Use this material ui custom button group with different size and solid background color.",
    codeString: btnGroupDifferentSizeContainedString,
    preview: <BtnGroupDifferentSizeContainedPreview />,
  },
  {
    id: "btn-group-8",
    title: "Vertical button group",
    description:
      "Regular vertical button group designed with material ui only.",
    codeString: btnGroupVerticalString,
    preview: <BtnGroupVerticalPreview />,
  },
  {
    id: "btn-group-9",
    title: "Vertical toggle button ",
    description: "Another vertical button group with toggle functionality.",
    codeString: btnGroupVerticalToggleString,
    preview: <BtnGroupVerticalTogglePreview />,
  },
  {
    id: "btn-group-10",
    title: "Horizontal Toggle button ",
    description:
      "Horizontal button group variant but this one has toggle functionality.",
    codeString: btnGroupHorizontalToggleString,
    preview: <BtnGroupHorizontalTogglePreview />,
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
