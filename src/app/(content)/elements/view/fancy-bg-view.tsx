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
import { fancyBgGeometric1String } from "../code-string/fancy-background/fancy-bg-geometric-1-string";
import { fancyBgGeometric2String } from "../code-string/fancy-background/fancy-bg-geometric-2-string";
import { fancyBgGeometric3String } from "../code-string/fancy-background/fancy-bg-geometric-3-string";
import { fancyBgGeometric4String } from "../code-string/fancy-background/fancy-bg-geometric-4-string";
import { fancyBgGradient1String } from "../code-string/fancy-background/fancy-bg-gradient-1-string";
import { fancyBgGradient2String } from "../code-string/fancy-background/fancy-bg-gradient-2-string";
import { fancyBgGradient3String } from "../code-string/fancy-background/fancy-bg-gradient-3-string";
import { fancyBgGradient4String } from "../code-string/fancy-background/fancy-bg-gradient-4-string";
import { FancyBgDecorative1Preview } from "../components/fancy-background/fancy-bg-decorative-1-preview";
import { FancyBgDecorative2Preview } from "../components/fancy-background/fancy-bg-decorative-2-preview";
import { FancyBgDecorative3Preview } from "../components/fancy-background/fancy-bg-decorative-3-preview";
import { FancyBgGeometric1Preview } from "../components/fancy-background/fancy-bg-geometric-1-preview";
import { FancyBgGeometric2Preview } from "../components/fancy-background/fancy-bg-geometric-2-preview";
import { FancyBgGeometric3Preview } from "../components/fancy-background/fancy-bg-geometric-3-preview";
import { FancyBgGeometric4Preview } from "../components/fancy-background/fancy-bg-geometric-4-preview";
import { FancyBgGradient1Preview } from "../components/fancy-background/fancy-bg-gradient-1-preview";
import { FancyBgGradient2Preview } from "../components/fancy-background/fancy-bg-gradient-2-preview";
import { FancyBgGradient3Preview } from "../components/fancy-background/fancy-bg-gradient-3-preview";
import { FancyBgGradient4Preview } from "../components/fancy-background/fancy-bg-gradient-4-preview";

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
    title: "Dark radial fancy background",
    description: "Use this radial gradient fancy background with dark color. ",
    codeString: fancyBgGradient1String,
    preview: <FancyBgGradient1Preview />,
  },
  {
    id: "fancy-bg-5",
    title: "Blue radial glow",
    description:
      "Use this radial gradient fancy background with blue color shades.",
    codeString: fancyBgGradient2String,
    preview: <FancyBgGradient2Preview />,
  },
  {
    id: "fancy-bg-6",
    title: "Crimson radial gradient",
    description:
      "Use this radial gradient fancy background with crimson color shades.",
    codeString: fancyBgGradient3String,
    preview: <FancyBgGradient3Preview />,
  },
  {
    id: "fancy-bg-7",
    title: "Emerald radial gradient",
    description:
      "Use this radial gradient fancy background with Emerald color shades.",
    codeString: fancyBgGradient4String,
    preview: <FancyBgGradient4Preview />,
  },
  {
    id: "fancy-bg-8",
    title: "Single gradient grid",
    description:
      "This grid section has one single color gradient design with material ui.",
    codeString: fancyBgGeometric1String,
    preview: <FancyBgGeometric1Preview />,
  },
  {
    id: "fancy-bg-9",
    title: "Dual gradient grid",
    description:
      "Use this section if you need grid effect with dual gradient color.",
    codeString: fancyBgGeometric2String,
    preview: <FancyBgGeometric2Preview />,
  },
  {
    id: "fancy-bg-10",
    title: "Top fade grid",
    description:
      "Use this faded grid variant to make your section look better.",
    codeString: fancyBgGeometric3String,
    preview: <FancyBgGeometric3Preview />,
  },
  {
    id: "fancy-bg-11",
    title: "Diagonal fade grid left",
    description:
      "Use this left aligned diagonal fade grid designed with material ui and pure css.",
    codeString: fancyBgGeometric4String,
    preview: <FancyBgGeometric4Preview />,
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

      {/* Fancy background Section */}
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
