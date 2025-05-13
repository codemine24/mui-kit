"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import ShapeVariants from "../components/avatar/shape-variants";
import IconVariants from "../components/avatar/icon-variants";
import LetterVariants from "../components/avatar/letter-variants";
import StatusVariants from "../components/avatar/status-variants";
import { ShapeVariantsCodeString } from "../code-string/avatar/shape-variants";
import { IconVariantsCodeString } from "../code-string/avatar/icon-variants";
import { LetterVariantsCodeString } from "../code-string/avatar/letter-variants";
import { StatusVariantsCodeString } from "../code-string/avatar/status-variants";

const sections = [
  {
    id: "avatar-1",
    title: "Shape",
    description:
      "Use Material UI avatar with extended design. No extra package required.",
    codeString: ShapeVariantsCodeString,
    preview: <ShapeVariants />,
  },
  {
    id: "avatar-2",
    title: "Icon",
    description:
      "Use Material UI avatar with extended design. No extra package required.",
    codeString: IconVariantsCodeString,
    preview: <IconVariants />,
  },
  {
    id: "avatar-3",
    title: "Letter",
    description:
      "Use Material UI avatar with extended design. No extra package required.",
    codeString: LetterVariantsCodeString,
    preview: <LetterVariants />,
  },
  {
    id: "avatar-4",
    title: "Status",
    description:
      "Use Material UI avatar with extended design. No extra package required.",
    codeString: StatusVariantsCodeString,
    preview: <StatusVariants />,
  },
];

export const AvatarView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Avatar", path: "" },
        ]}
      />
      <PageTitle
        title="Avatar"
        description="Material UI core avatar with extended design, and functionality."
      />

      <Divider sx={{ my: 4 }} />

      {/* Avatar Sections */}
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
