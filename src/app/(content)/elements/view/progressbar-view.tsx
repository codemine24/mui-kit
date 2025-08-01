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
import { progressbarBasicString } from "../code-string/progressbar/progressbar-basic-string";
import { progressbarCustomString } from "../code-string/progressbar/progressbar-custom-string";
import { progressbarCustomWithLabelString } from "../code-string/progressbar/progressbar-custom-with-label-string";
import { progressbarDifferentHeightString } from "../code-string/progressbar/progressbar-different-height-string";
import { ProgressbarFloatingLabelString } from "../code-string/progressbar/progressbar-floating-label-string";
import { progressbarNoBorderRadiusString } from "../code-string/progressbar/progressbar-no-border-radius-string";
import { progressbarTitleLabelString } from "../code-string/progressbar/progressbar-title-label-string";
import { progressbarVerticalString } from "../code-string/progressbar/progressbar-vertical-string";
import { progressbarWithLabelString } from "../code-string/progressbar/progressbar-with-label-string";
import {
  ProgressbarBasicPreview,
  ProgressbarCircularBasicPreview,
  ProgressbarCustomPreview,
  ProgressbarCustomWithLabelPreview,
  ProgressbarDifferentHeightPreview,
  ProgressbarFloatingLabelPreview,
  ProgressbarNoBorderRadiusPreview,
  ProgressbarSemiCircularProgressPreview,
  ProgressbarStepsPreview,
  ProgressbarTitleLabelPreview,
  ProgressbarVerticalPreview,
  ProgressbarWithLabelPreview,
} from "../components/progressbar";

const sections = [
  {
    id: "progressbar-1",
    title: "Basic MUI Progressbar",
    description: "Basic material ui progressbar with different colors. ",
    codeString: progressbarBasicString,
    preview: <ProgressbarBasicPreview />,
  },
  {
    id: "progressbar-2",
    title: "Different height",
    description:
      "You can use custom height for progressbar designed with material ui. ",
    codeString: progressbarDifferentHeightString,
    preview: <ProgressbarDifferentHeightPreview />,
  },
  {
    id: "progressbar-3",
    title: "Without border radius",
    description: "This progressbar variant doesn't have any border radius.",
    codeString: progressbarNoBorderRadiusString,
    preview: <ProgressbarNoBorderRadiusPreview />,
  },
  {
    id: "progressbar-4",
    title: "With label",
    description:
      "This progressbar has label. You can use text or icon as label.",
    codeString: progressbarWithLabelString,
    preview: <ProgressbarWithLabelPreview />,
  },
  {
    id: "progressbar-5",
    title: "With title & label",
    description: "Material ui progressbar with title and label. ",
    codeString: progressbarTitleLabelString,
    preview: <ProgressbarTitleLabelPreview />,
  },
  {
    id: "progressbar-6",
    title: "Custom design",
    description:
      "If you don't want to use Material ui native progressbar component, you can use this variant. We designed it with other raw components. ",
    codeString: progressbarCustomString,
    preview: <ProgressbarCustomPreview />,
  },
  {
    id: "progressbar-7",
    title: "Custom progressbar with label",
    description:
      "This variant build without native mui progressbar. It also has title and label. If you want to avoid native progressbar component, you can go with this one.",
    codeString: progressbarCustomWithLabelString,
    preview: <ProgressbarCustomWithLabelPreview />,
  },
  {
    id: "progressbar-8",
    title: "Progressbar with floating label",
    description:
      "Mui progressbar with floating label. If you want to give your progressbar a modern look, go with this variant. ",
    codeString: ProgressbarFloatingLabelString,
    preview: <ProgressbarFloatingLabelPreview />,
  },
  {
    id: "progressbar-9",
    title: "Progressbar vertical",
    description:
      "Use vertical material ui progressbar. Raw material ui and nothing else. ",
    codeString: progressbarVerticalString,
    preview: <ProgressbarVerticalPreview />,
  },
  {
    id: "progressbar-10",
    title: "Progressbar steps",
    description:
      "A basic customizable progressbar component built with Material UI.",
    codeString: "",
    preview: <ProgressbarStepsPreview />,
  },
  {
    id: "progressbar-11",
    title: "Progressbar circular basic",
    description:
      "A basic customizable progressbar component built with Material UI.",
    codeString: "",
    preview: <ProgressbarCircularBasicPreview />,
  },
  {
    id: "progressbar-12",
    title: "Progressbar semi circular",
    description:
      "A basic customizable progressbar component built with Material UI.",
    codeString: "",
    preview: <ProgressbarSemiCircularProgressPreview />,
  },
];

export const ProgressbarView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.PROGRESSBAR },
          { label: "Progressbar", path: "" },
        ]}
      />
      <PageTitle
        title="Progressbar"
        description="Material UI provides a base progressbar component, but we’ve extended it with multiple advanced use-cases like emoji labels, text feedback, precision control, animated interactions, and icon customizations."
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
