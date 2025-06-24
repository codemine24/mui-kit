"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { OTPBasicString } from "../code-string/otp/otp-basic-string";
import { OTPCustomStyledString } from "../code-string/otp/otp-custom-styled-string";
import { OTPFilledString } from "../code-string/otp/otp-filled-string";
import { OTPFractionCodeString } from "../code-string/otp/otp-fraction";
import { OTPPasteableString } from "../code-string/otp/otp-pasteable-string";
import { OTPTextSupportedCodeString } from "../code-string/otp/otp-text-supported";
import { OTPUnderlinedString } from "../code-string/otp/otp-underlined-string";
import { OTPWithPredefinedFieldCodeString } from "../code-string/otp/otp-with-predefined-field";
import { OTPWithTimerAndResendCodeString } from "../code-string/otp/otp-with-timer-and-resend";
import { OTPBasicPreview } from "../components/otp/otp-basic-preview";
import { OTPCustomStyledPreview } from "../components/otp/otp-custom-styled-preview";
import { OTPFilledPreview } from "../components/otp/otp-filled-preview";
import OTPFraction from "../components/otp/otp-fraction";
import { OTPPasteablePreview } from "../components/otp/otp-pasteable-preview";
import OTPTextSupported from "../components/otp/otp-text-supported";
import { OTPUnderlinedPreview } from "../components/otp/otp-underlined-preview";
import OTPWithPredefinedField from "../components/otp/otp-with-predefined-field";
import OTPWithTimerAndResend from "../components/otp/otp-with-timer-and-resend";

const sections = [
  {
    id: "otp-1",
    title: "Basic",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: OTPBasicString,
    preview: <OTPBasicPreview />,
  },
  {
    id: "otp-2",
    title: "Filled",
    description: "OTP filled with solid background.",
    codeString: OTPFilledString,
    preview: <OTPFilledPreview />,
  },
  {
    id: "otp-3",
    title: "Underlined",
    description: "Underlined OTP fields. Perfect if you like outlined stuff. ",
    codeString: OTPUnderlinedString,
    preview: <OTPUnderlinedPreview />,
  },
  {
    id: "otp-4",
    title: "Custom styled",
    description:
      "Border radius, hover effect, active color, everything is customized. If you want to control the style more deeply, this OTP variant is for you. ",
    codeString: OTPCustomStyledString,
    preview: <OTPCustomStyledPreview />,
  },
  {
    id: "otp-5",
    title: "Pasteable",
    description:
      "You can paste entire OTP at once instead of one by one. Try pasting this code 123456",
    codeString: OTPPasteableString,
    preview: <OTPPasteablePreview />,
  },
  {
    id: "otp-6",
    title: "With timer and resend",
    description:
      "Complete verification flow with countdown timer and resend functionality. No extra package required.",
    codeString: OTPWithTimerAndResendCodeString,
    preview: <OTPWithTimerAndResend />,
  },
  {
    id: "otp-7",
    title: "Text supported",
    description: "Supports text input. No extra package required.",
    codeString: OTPTextSupportedCodeString,
    preview: <OTPTextSupported />,
  },
  {
    id: "otp-8",
    title: "Fractional",
    description:
      "Two groups of digits separated by a dash, with smart navigation between groups. No extra package required.",
    codeString: OTPFractionCodeString,
    preview: <OTPFraction />,
  },
  {
    id: "otp-9",
    title: "With predefined field",
    description:
      "OTP fields can be fixed/predefined while others are editable. Fixed fields have dashed borders. No extra package required.",
    codeString: OTPWithPredefinedFieldCodeString,
    preview: <OTPWithPredefinedField />,
  },
];

export const OTPView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "OTP", path: "" },
        ]}
      />
      <PageTitle
        title="OTP"
        description="Functional OTP fields fully compatible with Material UI. No extra packages required. "
      />

      <Divider sx={{ my: 4 }} />

      {/* OTP Section */}
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
