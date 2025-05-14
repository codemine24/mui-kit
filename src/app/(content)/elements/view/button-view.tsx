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
  ButtonSocialLoginCodeString,
  ButtonLoaderCodeString,
  ButtonLabelCodeString,
  ButtonNeonCodeString,
  ButtonEcommerceCodeString,
  ButtonPaymentCodeString,
  ButtonFullWidthCodeString,
  ButtonSocialIconCodeString,
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
  ButtonSocialLoginPreview,
  ButtonLoaderPreview,
  ButtonLabelPreview,
  ButtonNeonPreview,
  ButtonEcommercePreview,
  ButtonPaymentPreview,
  ButtonFullWidthPreview,
  ButtonSocialIconPreview,
} from "../components/button";

const sections = [
  {
    id: "button-contained",
    title: "Contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: ButtonContainedCodeString,
    preview: <ButtonContainedPreview />,
  },
  {
    id: "button-outlined",
    title: "Outlined",
    description: "Outlined accordion with custom mui icon",
    codeString: ButtonOutlinedCodeString,
    preview: <ButtonOutlinedPreview />,
  },
  {
    id: "button-text",
    title: "Text",
    description: "Outlined accordion with custom mui icon",
    codeString: ButtonTextCodeString,
    preview: <ButtonTextPreview />,
  },
  {
    id: "button-sizes",
    title: "Sizes",
    description:
      "Use this beautiful accordion if you are looking for an accordion with box shadow.",
    codeString: ButtonSizesCodeString,
    preview: <ButtonSizesPreview />,
  },
  {
    id: "button-different-shape",
    title: "Different Shape",
    description: "Each section has a different color",
    codeString: ButtonDifferentShapeCodeString,
    preview: <ButtonDifferentShapePreview />,
  },
  {
    id: "button-icons",
    title: "Icons",
    description: "Icon position is different from traditional accordions",
    codeString: ButtonIconsCodeString,
    preview: <ButtonIconsPreview />,
  },
  {
    id: "button-soft",
    title: "Soft",
    description: "Each section has a vertical line to separate them",
    codeString: ButtonSoftCodeString,
    preview: <ButtonSoftPreview />,
  },
  {
    id: "button-soft-with-border",
    title: "Soft with Border",
    description: "Each section has a different color",
    codeString: ButtonSoftWithBorderCodeString,
    preview: <ButtonSoftWithBorderPreview />,
  },
  {
    id: "button-animated",
    title: "Animated",
    description: "Each section has a different color",
    codeString: ButtonAnimatedCodeString,
    preview: <ButtonAnimatedPreview />,
  },
  {
    id: "button-disabled",
    title: "Disabled",
    description: "Each section has a different color",
    codeString: ButtonDisabledCodeString,
    preview: <ButtonDisabledPreview />,
  },
  {
    id: "button-gradient",
    title: "Gradient",
    description: "Each section has a different color",
    codeString: ButtonGradientCodeString,
    preview: <ButtonGradientPreview />,
  },
  {
    id: "button-social-login",
    title: "Social Login",
    description: "Each section has a different color",
    codeString: ButtonSocialLoginCodeString,
    preview: <ButtonSocialLoginPreview />,
  },
  {
    id: "button-loader",
    title: "Loader",
    description: "Each section has a different color",
    codeString: ButtonLoaderCodeString,
    preview: <ButtonLoaderPreview />,
  },
  {
    id: "button-label",
    title: "Label",
    description: "Each section has a different color",
    codeString: ButtonLabelCodeString,
    preview: <ButtonLabelPreview />,
  },
  {
    id: "button-neon",
    title: "Neon",
    description: "Each section has a different color",
    codeString: ButtonNeonCodeString,
    preview: <ButtonNeonPreview />,
  },
  {
    id: "button-ecommerce",
    title: "Ecommerce",
    description: "Each section has a different color",
    codeString: ButtonEcommerceCodeString,
    preview: <ButtonEcommercePreview />,
  },
  {
    id: "button-payment",
    title: "Payment",
    description: "Each section has a different color",
    codeString: ButtonPaymentCodeString,
    preview: <ButtonPaymentPreview />,
  },
  {
    id: "button-full-width",
    title: "Full Width",
    description: "Each section has a different color",
    codeString: ButtonFullWidthCodeString,
    preview: <ButtonFullWidthPreview />,
  },
  {
    id: "button-social-icon",
    title: "Social Icon",
    description: "Each section has a different color",
    codeString: ButtonSocialIconCodeString,
    preview: <ButtonSocialIconPreview />,
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
