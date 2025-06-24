"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { OTPBasicCodeString } from "../code-string/otp/otp-basic";
import OTPBasic from "../components/otp/otp-basic";
import OTPCustomStyled from "../components/otp/otp-custom-styled";
import OTPFilled from "../components/otp/otp-filled";
import OTPFraction from "../components/otp/otp-fraction";
import OTPPasteable from "../components/otp/otp-pasteable";
import OTPTextSupported from "../components/otp/otp-text-supported";
import OTPUnderlined from "../components/otp/otp-underlined";
import OTPWithTimerAndResend from "../components/otp/otp-with-timer-and-resend";

const sections = [
  {
    id: "otp-1",
    title: "Basic",
    description:
      "Standard outlined otp fields with auto-focus navigation. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPBasic />,
  },
  {
    id: "otp-2",
    title: "Filled",
    description:
      "Filled input style with hover and focus effects. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPFilled />,
  },
  {
    id: "otp-3",
    title: "Underlined",
    description:
      "Underlined input style with hover and focus effects. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPUnderlined />,
  },
  {
    id: "otp-4",
    title: "Custom styled",
    description:
      "Custom styled and animated otp fields. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPCustomStyled />,
  },
  {
    id: "otp-5",
    title: "Pasteable",
    description:
      "Supports pasting full OTP codes in one go. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPPasteable />,
  },
  {
    id: "otp-6",
    title: "With timer and resend",
    description:
      "Complete verification flow with countdown timer and resend functionality. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPWithTimerAndResend />,
  },
  {
    id: "otp-7",
    title: "Text supported",
    description: "Supports text input. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPTextSupported />,
  },
  {
    id: "otp-8",
    title: "Fractional",
    description:
      "Two groups of digits separated by a dash, with smart navigation between groups. No extra package required.",
    codeString: OTPBasicCodeString,
    preview: <OTPFraction />,
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
        description="OTP field with extended design, and functionality. "
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
