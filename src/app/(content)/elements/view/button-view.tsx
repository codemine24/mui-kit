"use client";

import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";

import {
  ButtonContainedCodeString,
  ButtonOutlinedCodeString,
  ButtonTextCodeString,
  ButtonSizesCodeString,
  ButtonIconsCodeString,
  ButtonSoftCodeString,
  ButtonSoftWithBorderCodeString,
  ButtonDisabledCodeString,
  ButtonAnimatedCodeString,
  ButtonDifferentShapeCodeString,
  ButtonGradientCodeString,
} from "../code-string/button";

import {
  ButtonAnimatedPreview,
  ButtonContainedPreview,
  ButtonOutlinedPreview,
  ButtonSoftPreview,
  ButtonSoftWithBorderPreview,
  ButtonTextPreview,
  ButtonIconsPreview,
  ButtonSizesPreview,
  ButtonDisabledPreview,
  ButtonDifferentShapePreview,
  ButtonGradientPreview,
} from "../components/button";

const sections = [
  {
    id: "button-contained",
    title: "Button Contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: ButtonContainedCodeString,
    preview: <ButtonContainedPreview />,
  },
  {
    id: "button-outlined",
    title: "Button Outlined",
    description: "Outlined accordion with custom mui icon",
    codeString: ButtonOutlinedCodeString,
    preview: <ButtonOutlinedPreview />,
  },
  {
    id: "button-text",
    title: "Button Text",
    description: "Outlined accordion with custom mui icon",
    codeString: ButtonTextCodeString,
    preview: <ButtonTextPreview />,
  },
  {
    id: "button-sizes",
    title: "Button Sizes",
    description:
      "Use this beautiful accordion if you are looking for an accordion with box shadow.",
    codeString: ButtonSizesCodeString,
    preview: <ButtonSizesPreview />,
  },
  {
    id: "button-different-shape",
    title: "Button Different Shape",
    description: "Each section has a different color",
    codeString: ButtonDifferentShapeCodeString,
    preview: <ButtonDifferentShapePreview />,
  },
  {
    id: "button-icons",
    title: "Button Icons",
    description: "Icon position is different from traditional accordions",
    codeString: ButtonIconsCodeString,
    preview: <ButtonIconsPreview />,
  },
  {
    id: "button-soft",
    title: "Button Soft",
    description: "Each section has a vertical line to separate them",
    codeString: ButtonSoftCodeString,
    preview: <ButtonSoftPreview />,
  },
  {
    id: "button-soft-with-border",
    title: "Button Soft with Border",
    description: "Each section has a different color",
    codeString: ButtonSoftWithBorderCodeString,
    preview: <ButtonSoftWithBorderPreview />,
  },
  {
    id: "button-animated",
    title: "Button Animated",
    description: "Each section has a different color",
    codeString: ButtonAnimatedCodeString,
    preview: <ButtonAnimatedPreview />,
  },
  {
    id: "button-disabled",
    title: "Button Disabled",
    description: "Each section has a different color",
    codeString: ButtonDisabledCodeString,
    preview: <ButtonDisabledPreview />,
  },
  {
    id: "button-gradient",
    title: "Button Gradient",
    description: "Each section has a different color",
    codeString: ButtonGradientCodeString,
    preview: <ButtonGradientPreview />,
  },
];

export const ButtonView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
  }, []);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Button", path: "" },
        ]}
      />
      <PageTitle
        title="Button"
        description="Material UI core button with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Button - 1 */}
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
