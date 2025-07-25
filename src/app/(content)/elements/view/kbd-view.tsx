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
import { Kbd1Preview } from "../components/kbd/kbd-1-preview";
import { Kbd2Preview } from "../components/kbd/kbd-2-preview";
import { Kbd3Preview } from "../components/kbd/kbd-3-preview";
import { Kbd4Preview } from "../components/kbd/kbd-4-preview";
import { Kbd5Preview } from "../components/kbd/kbd-5-preview";
import { Kbd6Preview } from "../components/kbd/kbd-6-preview";
import { Kbd7Preview } from "../components/kbd/kbd-7-preview";

const sections = [
  {
    id: "kbd-1",
    title: "Keyboard crtl",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd1Preview />,
  },
  {
    id: "kbd-2",
    title: "Keyboard icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd2Preview />,
  },
  {
    id: "kbd-3",
    title: "Arrow icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd3Preview />,
  },
  {
    id: "kbd-4",
    title: "Arrow Outline icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd4Preview />,
  },
  {
    id: "kbd-5",
    title: "Number",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd5Preview />,
  },
  {
    id: "kbd-6",
    title: "Letter",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd6Preview />,
  },
  {
    id: "kbd-7",
    title: "Letter",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <Kbd7Preview />,
  },
];

export const KbdView = () => {
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
