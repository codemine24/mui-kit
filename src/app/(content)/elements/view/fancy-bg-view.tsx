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
import { FancyBgGradientString } from "../code-string/fancy-background/fancy-backgroundString";
import { FancyBgGradientTwoPreview } from "../components/fancy-background/fancy-bg-gradient-2-preview";
import { FancyBgGradientPreview } from "../components/fancy-background/fancy-bg-gradient-preview";

const sections = [
  {
    id: "otp-1",
    title: "Basic",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradientString,
    preview: <FancyBgGradientPreview />,
  },
  {
    id: "fancy-bg-2",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradientString,
    preview: <FancyBgGradientTwoPreview />,
  },
];

export const FancyBgView = () => {
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
        title="Fancy Background"
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
