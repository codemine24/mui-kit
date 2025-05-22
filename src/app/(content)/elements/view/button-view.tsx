"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { ExternalPackageAlert } from "@/components/external-package-alert";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
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
  buttonTextString,
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
  ButtonTextPreview,
} from "../components/button";

const sections = [
  {
    id: "button-contained",
    title: "Contained",
    description: "Native material ui button with solid background",
    codeString: buttonContainedString,
    preview: <ButtonContainedPreview />,
  },
  {
    id: "button-outlined",
    title: "Outlined",
    description: "MUI outlined button perfect for modern design",
    codeString: buttonOutlinedString,
    preview: <ButtonOutlinedPreview />,
  },
  {
    id: "button-text",
    title: "Text",
    description: "Text button purely build with material ui only",
    codeString: buttonTextString,
    preview: <ButtonTextPreview />,
  },
  {
    id: "button-sizes",
    title: "Sizes",
    description: "Each section has a different color and different size. ",
    codeString: buttonSizeString,
    preview: <ButtonSizePreview />,
  },
  {
    id: "button-different-shape",
    title: "Different Shape",
    description:
      "If you need button with different shape, these material ui buttons are for you",
    codeString: buttonShapeString,
    preview: <ButtonShapePreview />,
  },
  {
    id: "button-icons",
    title: "Icons",
    description:
      "A huge collection of material ui icon buttons. Choose your favorite",
    codeString: buttonIconString,
    preview: <ButtonIconPreview />,
  },
  {
    id: "button-soft",
    title: "Soft",
    description: "Soft background button perfect for modern design",
    codeString: buttonSoftBgString,
    preview: <ButtonSoftBgPreview />,
  },
  {
    id: "button-soft-with-border",
    title: "Soft with Border",
    description: "Soft background with border. Make it more stylish",
    codeString: buttonSoftWithBorderString,
    preview: <ButtonSoftWithBorderPreview />,
  },
  {
    id: "button-animated",
    title: "Animated",
    description: "Animated button to make your website more interactive",
    codeString: buttonAnimatedString,
    preview: <ButtonAnimatedPreview />,
  },
  {
    id: "button-disabled",
    title: "Disabled",
    description: "Disabled buttons with custom background color. ",
    codeString: buttonDisabledString,
    preview: <ButtonDisabledPreview />,
  },
  {
    id: "button-gradient",
    title: "Gradient",
    description:
      "you can choose gradient buttons from single color gradient or duotone gradient",
    codeString: buttonGradientString,
    preview: <ButtonGradientPreview />,
  },
  {
    id: "button-social-login",
    title: "Social Login",
    description:
      "Ready to use social login buttons that adjust any kind of use case.",
    codeString: buttonSocialLoginString,
    preview: <ButtonSocialLoginPreview />,
  },
  {
    id: "button-loader",
    title: "Loader",
    description: "Built-in loader button",
    codeString: buttonLoaderString,
    preview: <ButtonLoaderPreview />,
  },
  {
    id: "button-label",
    title: "Label",
    description: "Button with custom label",
    codeString: buttonLabelString,
    preview: <ButtonLabelPreview />,
  },
  {
    id: "button-neon",
    title: "Neon",
    description: "Neon button will make your website glow",
    codeString: buttonNeonString,
    preview: <ButtonNeonPreview />,
  },
  {
    id: "button-ecommerce",
    title: "Ecommerce",
    description: "Ecommerce buttons that fits any kind of use case.",
    codeString: ButtonEcommerceCodeString,
    preview: <ButtonEcommercePreview />,
  },
  {
    id: "button-payment",
    title: "Payment",
    description: "Payment buttons build with material ui only. ",
    codeString: buttonPaymentString,
    preview: <ButtonPaymentPreview />,
  },
  {
    id: "button-full-width",
    title: "Full Width",
    description: "Full with button with different variants",
    codeString: buttonFullWidthString,
    preview: <ButtonFullWidthPreview />,
  },
  {
    id: "button-social-icon",
    title: "Social Icon",
    description: "Social follow buttons ",
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
          { label: "Components", path: "/elements" },
          { label: "Button", path: "" },
        ]}
      />
      <PageTitle
        title="Button"
        description="Material UI core button with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      <ExternalPackageAlert
        packages={[
          {
            name: "@iconify/react",
            url: "https://www.npmjs.com/package/@iconify/react",
          },
        ]}
      />

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
