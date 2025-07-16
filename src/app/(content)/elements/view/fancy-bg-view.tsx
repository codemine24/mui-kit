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
import { fancyBgDecorative1String } from "../code-string/fancy-background/fancy-bg-decorative-1-string";
import { fancyBgDecorative2String } from "../code-string/fancy-background/fancy-bg-decorative-2-string";
import { fancyBgDecorative3String } from "../code-string/fancy-background/fancy-bg-decorative-3-string";
import { FancyBgGeometric1String } from "../code-string/fancy-background/fancy-bg-geometric-1-string";
import { FancyBgGeometric2String } from "../code-string/fancy-background/fancy-bg-geometric-2-string";
import { FancyBgGeometric3String } from "../code-string/fancy-background/fancy-bg-geometric-3-string";
import { FancyBgGeometric4String } from "../code-string/fancy-background/fancy-bg-geometric-4-string";
import { FancyBgGradient1String } from "../code-string/fancy-background/fancy-bg-gradient-1-string";
import { FancyBgGradient2String } from "../code-string/fancy-background/fancy-bg-gradient-2-string";
import { FancyBgGradient3String } from "../code-string/fancy-background/fancy-bg-gradient-3-string";
import { FancyBgGradient4String } from "../code-string/fancy-background/fancy-bg-gradient-4-string";
import { FancyBgDecorative1Preview } from "../components/fancy-background/fancy-bg-decorative-1-preview";
import { FancyBgDecorative2Preview } from "../components/fancy-background/fancy-bg-decorative-2-preview";
import { FancyBgDecorative3Preview } from "../components/fancy-background/fancy-bg-decorative-3-preview";
import { FancyBgGeometricPreview } from "../components/fancy-background/fancy-bg-geometric-1-preview";
import { FancyBgGeometricTwoPreview } from "../components/fancy-background/fancy-bg-geometric-2-preview";
import { FancyBgGeometricThreePreview } from "../components/fancy-background/fancy-bg-geometric-3-preview";
import { FancyBgGeometricFourPreview } from "../components/fancy-background/fancy-bg-geometric-4-preview";
import { FancyBgGradientPreview } from "../components/fancy-background/fancy-bg-gradient-1-preview";
import { FancyBgGradientTwoPreview } from "../components/fancy-background/fancy-bg-gradient-2-preview";
import { FancyBgGradientThreePreview } from "../components/fancy-background/fancy-bg-gradient-3-preview";
import { FancyBgGradientFourPreview } from "../components/fancy-background/fancy-bg-gradient-4-preview";

const sections = [
  {
    id: "fancy-bg-1",
    title: "Decorative top radial",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: fancyBgDecorative1String,
    preview: <FancyBgDecorative1Preview />,
  },
  {
    id: "fancy-bg-2",
    title: "Decorative top radial v2",
    description:
      "This variant is similar to previous one but with different color.",
    codeString: fancyBgDecorative2String,
    preview: <FancyBgDecorative2Preview />,
  },
  {
    id: "fancy-bg-3",
    title: "Decorative bottom radial",
    description:
      "Decorative bottom radial fancy background perfect for Hero section.",
    codeString: fancyBgDecorative3String,
    preview: <FancyBgDecorative3Preview />,
  },
  {
    id: "fancy-bg-4",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradient1String,
    preview: <FancyBgGradientPreview />,
  },
  {
    id: "fancy-bg-5",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradient2String,
    preview: <FancyBgGradientTwoPreview />,
  },
  {
    id: "fancy-bg-6",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradient3String,
    preview: <FancyBgGradientThreePreview />,
  },
  {
    id: "fancy-bg-7",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGradient4String,
    preview: <FancyBgGradientFourPreview />,
  },
  {
    id: "fancy-bg-8",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGeometric1String,
    preview: <FancyBgGeometricPreview />,
  },
  {
    id: "fancy-bg-9",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGeometric2String,
    preview: <FancyBgGeometricTwoPreview />,
  },
  {
    id: "fancy-bg-10",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGeometric3String,
    preview: <FancyBgGeometricThreePreview />,
  },
  {
    id: "fancy-bg-11",
    title: "Fancy background bottom gradient radial",
    description: "Standard outlined otp fields with auto-focus navigation.",
    codeString: FancyBgGeometric4String,
    preview: <FancyBgGeometricFourPreview />,
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
          { label: "Fancy Background", path: "" },
        ]}
      />
      <PageTitle
        title="Fancy Background"
        description="Use modern section background with different styles. Each section build with material ui and pure css."
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
