"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Alert, Box, Divider } from "@mui/material";
import React from "react";
import { button1CodeString } from "../../blocks/code-string/button-code-string";
import {
  buttonAnimatedString,
  buttonContainedString,
  buttonDisabledString,
  ButtonEcommerceCodeString,
  buttonFullWidthString,
  buttonGradientString,
  buttonIconString,
  buttonLabelString,
  buttonLoaderString,
  buttonNeonString,
  buttonOutlinedString,
  buttonPaymentString,
  buttonShapeString,
  buttonSizeString,
  buttonSocialIconString,
  buttonSocialLoginString,
  buttonSoftBgString,
  buttonSoftWithBorderString,
} from "../code-string/button";
import {
  ButtonAnimatedPreview,
  ButtonContainedPreview,
  ButtonDisabledPreview,
  ButtonEcommercePreview,
  ButtonFullWidthPreview,
  ButtonGradientPreview,
  ButtonIconPreview,
  ButtonLabelPreview,
  ButtonLoaderPreview,
  ButtonNeonPreview,
  ButtonOutlinedPreview,
  ButtonPaymentPreview,
  ButtonShapePreview,
  ButtonSizePreview,
  ButtonSocialIconPreview,
  ButtonSocialLoginPreview,
  ButtonSoftBgPreview,
  ButtonSoftWithBorderPreview,
} from "../components/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const sections = [
  {
    id: "button-contained",
    title: "Contained",
    description: "A regular but elegant accordion with solid background color",
    codeString: buttonContainedString,
    preview: <ButtonContainedPreview />,
  },
  {
    id: "button-outlined",
    title: "Outlined",
    description: "Outlined accordion with custom mui icon",
    codeString: buttonOutlinedString,
    preview: <ButtonOutlinedPreview />,
  },
  {
    id: "button-text",
    title: "Text",
    description: "Outlined accordion with custom mui icon",
    codeString: button1CodeString,
    preview: <ButtonAnimatedPreview />,
  },
  {
    id: "button-sizes",
    title: "Sizes",
    description:
      "Use this beautiful accordion if you are looking for an accordion with box shadow.",
    codeString: buttonSizeString,
    preview: <ButtonSizePreview />,
  },
  {
    id: "button-different-shape",
    title: "Different Shape",
    description: "Each section has a different color",
    codeString: buttonShapeString,
    preview: <ButtonShapePreview />,
  },
  {
    id: "button-icons",
    title: "Icons",
    description: "Icon position is different from traditional accordions",
    codeString: buttonIconString,
    preview: <ButtonIconPreview />,
  },
  {
    id: "button-soft",
    title: "Soft",
    description: "Each section has a vertical line to separate them",
    codeString: buttonSoftBgString,
    preview: <ButtonSoftBgPreview />,
  },
  {
    id: "button-soft-with-border",
    title: "Soft with Border",
    description: "Each section has a different color",
    codeString: buttonSoftWithBorderString,
    preview: <ButtonSoftWithBorderPreview />,
  },
  {
    id: "button-animated",
    title: "Animated",
    description: "Each section has a different color",
    codeString: buttonAnimatedString,
    preview: <ButtonAnimatedPreview />,
  },
  {
    id: "button-disabled",
    title: "Disabled",
    description: "Each section has a different color",
    codeString: buttonDisabledString,
    preview: <ButtonDisabledPreview />,
  },
  {
    id: "button-gradient",
    title: "Gradient",
    description: "Each section has a different color",
    codeString: buttonGradientString,
    preview: <ButtonGradientPreview />,
  },
  {
    id: "button-social-login",
    title: "Social Login",
    description: "Each section has a different color",
    codeString: buttonSocialLoginString,
    preview: <ButtonSocialLoginPreview />,
  },
  {
    id: "button-loader",
    title: "Loader",
    description: "Each section has a different color",
    codeString: buttonLoaderString,
    preview: <ButtonLoaderPreview />,
  },
  {
    id: "button-label",
    title: "Label",
    description: "Each section has a different color",
    codeString: buttonLabelString,
    preview: <ButtonLabelPreview />,
  },
  {
    id: "button-neon",
    title: "Neon",
    description: "Each section has a different color",
    codeString: buttonNeonString,
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
    codeString: buttonPaymentString,
    preview: <ButtonPaymentPreview />,
  },
  {
    id: "button-full-width",
    title: "Full Width",
    description: "Each section has a different color",
    codeString: buttonFullWidthString,
    preview: <ButtonFullWidthPreview />,
  },
  {
    id: "button-social-icon",
    title: "Social Icon",
    description: "Each section has a different color",
    codeString: buttonSocialIconString,
    preview: <ButtonSocialIconPreview />,
  },
];

export const ButtonView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
  }, [setSections]);

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
      <Alert
        severity="warning"
        icon={<Icon icon="typcn:info-outline" width={24} height={24} />}
        sx={{
          // borderRadius: "50px",
          // width: "fit-content",
          padding: "0 1rem",
          mb: 2,
        }}
      >
        Some components may use an external package `Iconify` You may install it
        or remove it from the code.
      </Alert>
      {/* Button - 1 */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          {" "}
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
