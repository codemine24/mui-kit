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
import { KbdCtrlPreview } from "../components/kbd/kbd-ctrl-preview";
import { KbdIconPreview } from "../components/kbd/kbd-icon-preview";
import { KbdArrowFilledPreview } from "../components/kbd/kbd-arrow-filled-preview";
import { KbdArrowOutlinePreview } from "../components/kbd/kbd-arrow-outline-preview";
import { KbdNumberPreview } from "../components/kbd/kbd-number-preview";
import { KbdLetterPreview } from "../components/kbd/kbd-letter-preview";
import { KbdGroupKeyPreview } from "../components/kbd/kbd-group-key-preview";

const sections = [
  {
    id: "kbd-1",
    title: "Keyboard ctrl key",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdCtrlPreview />,
  },
  {
    id: "kbd-2",
    title: "Keyboard icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdIconPreview />,
  },
  {
    id: "kbd-3",
    title: "Arrow icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdArrowFilledPreview />,
  },
  {
    id: "kbd-4",
    title: "Arrow Outline icon",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdArrowOutlinePreview />,
  },
  {
    id: "kbd-5",
    title: "Number",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdNumberPreview />,
  },
  {
    id: "kbd-6",
    title: "Letter",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdLetterPreview />,
  },
  {
    id: "kbd-7",
    title: "Letter",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: "",
    preview: <KbdGroupKeyPreview />,
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
