"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";

import {
  BasicPopoverPreview,
  PopoverHoverPreview,
  PopoverMultiLayerPreview,
  PopoverExpandPreview,
  PopoverMenuPreview,
  PopoverPositionPreview,
  PopoverPosition2Preview,
  PopoverPosition3Preview,
  PopoverInfoPreview,
} from "../components/popover";
import {
  popoverBasicString,
  popoverHoverString,
  popoverMultiLayerString,
  popoverExpandString,
  popoverMenuString,
  popoverPositionString,
  popoverPosition2String,
  popoverPosition3String,
  popoverInfoString,
} from "../code-string/popover";

const sections = [
  {
    id: "popover-1",
    title: "Simple popover",
    description:
      "A simple popover design with dummy content. You can replace the content with almost anything.",
    codeString: popoverBasicString,
    preview: <BasicPopoverPreview />,
  },
  {
    id: "popover-2",
    title: "Hover popover",
    description: "Hover on your target element to show the popover.",
    codeString: popoverHoverString,
    preview: <PopoverHoverPreview />,
  },
  {
    id: "popover-3",
    title: "Display top",
    description: "Popover will display on top of your target element.",
    codeString: popoverPositionString,
    preview: <PopoverPositionPreview />,
  },
  {
    id: "popover-4",
    title: "Display center",
    description: "Popover will display on center of your target element.",
    codeString: popoverPosition2String,
    preview: <PopoverPosition2Preview />,
  },
  {
    id: "popover-5",
    title: "Display bottom",
    description: "Popover will display on bottom of your target element.",
    codeString: popoverPosition3String,
    preview: <PopoverPosition3Preview />,
  },
  {
    id: "popover-6",
    title: "Info popovers",
    description:
      "If you want to display quick info, you can go with one of these popovers.",
    codeString: popoverInfoString,
    preview: <PopoverInfoPreview />,
  },
  {
    id: "popover-7",
    title: "Menu popup",
    description:
      "A popover with built in menu items. Ready to use in your application. ",
    codeString: popoverMenuString,
    preview: <PopoverMenuPreview />,
  },
  {
    id: "popover-8",
    title: "Multi Layer",
    description: "You can hover over and see multiple layers of popovers.",
    codeString: popoverMultiLayerString,
    preview: <PopoverMultiLayerPreview />,
  },
  {
    id: "popover-9",
    title: "Expand Menu",
    description:
      "You can use toggle items inside popover use it as multi layer popover.",
    codeString: popoverExpandString,
    preview: <PopoverExpandPreview />,
  },
];

export const PopoverView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Components", path: "/elements" },
          { label: "Popover", path: "" },
        ]}
      />
      <PageTitle
        title="Popover"
        description="Material UI core popover with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Popover Section */}
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
