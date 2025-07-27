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
import { kbdArrowFilledString } from "../code-string/kbd/kbd-arrow-filled-string";
import { kbdArrowOutlineString } from "../code-string/kbd/kbd-arrow-outline-string";
import { kbdCtrlString } from "../code-string/kbd/kbd-ctrl-string";
import { kbdGroupKeyString } from "../code-string/kbd/kbd-group-key-string";
import { kbdIconString } from "../code-string/kbd/kbd-icon-string";
import { kbdInputString } from "../code-string/kbd/kbd-input-string";
import { kbdLetterString } from "../code-string/kbd/kbd-letter-string";
import { kbdNumberString } from "../code-string/kbd/kbd-number-string";
import { KbdArrowFilledPreview } from "../components/kbd/kbd-arrow-filled-preview";
import { KbdArrowOutlinePreview } from "../components/kbd/kbd-arrow-outline-preview";
import { KbdCtrlPreview } from "../components/kbd/kbd-ctrl-preview";
import { KbdGroupKeyPreview } from "../components/kbd/kbd-group-key-preview";
import { KbdIconPreview } from "../components/kbd/kbd-icon-preview";
import { KbdInputPreview } from "../components/kbd/kbd-input-preview";
import { KbdLetterPreview } from "../components/kbd/kbd-letter-preview";
import { KbdNumberPreview } from "../components/kbd/kbd-number-preview";

const sections = [
  {
    id: "kbd-1",
    title: "Keyboard ctrl key",
    description:
      "Control keys with different sizes. Build with material ui, nothing else.",
    codeString: kbdCtrlString,
    preview: <KbdCtrlPreview />,
  },
  {
    id: "kbd-2",
    title: "Keyboard icon",
    description: "Fully customizable keyboard icons. ",
    codeString: kbdIconString,
    preview: <KbdIconPreview />,
  },
  {
    id: "kbd-3",
    title: "Arrow icon",
    description: "Keyboard arrow icon with different sizes. ",
    codeString: kbdArrowFilledString,
    preview: <KbdArrowFilledPreview />,
  },
  {
    id: "kbd-4",
    title: "Arrow Outline icon",
    description: "Keyboard arrow outline icon with different sizes. ",
    codeString: kbdArrowOutlineString,
    preview: <KbdArrowOutlinePreview />,
  },
  {
    id: "kbd-5",
    title: "Number",
    description:
      "Use this decorative top radial fancy background for modern look. ",
    codeString: kbdNumberString,
    preview: <KbdNumberPreview />,
  },
  {
    id: "kbd-6",
    title: "Letter",
    description: "Keyboard letter icon that fit with any project.",
    codeString: kbdLetterString,
    preview: <KbdLetterPreview />,
  },
  {
    id: "kbd-7",
    title: "Kbd input preview",
    description: "This variant has builtin search input and keyboard shortcut.",
    codeString: kbdInputString,
    preview: <KbdInputPreview />,
  },
  {
    id: "kbd-8",
    title: "Input group",
    description: "Kbd group with text and key icons.",
    codeString: kbdGroupKeyString,
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
          { label: "KBD", path: "" },
        ]}
      />
      <PageTitle
        title="KBD"
        description="This keyboard shortcut key component has different size icon buttons built with material ui."
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
