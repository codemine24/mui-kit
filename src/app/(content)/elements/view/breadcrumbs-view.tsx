"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import {
  BreadcrumbBasicPreview,
  BreadcrumbCustomSeparatorPreview,
  BreadcrumbCollapsedPreview,
  BreadcrumbChipPreview,
  BreadcrumbBackgroundPreview,
  BreadcrumbIconPreview,
  BreadcrumbShapePreview,
} from "../components/breadcrumb";
import {
  breadcrumbCollapsedString,
  breadcrumbChipString,
  breadcrumbCustomSeparatorString,
  breadcrumbIconString,
  breadcrumbShapeString,
  breadcrumbBackgroundString,
  breadcrumbBasicString,
} from "../code-string/breadcrumb";

const sections = [
  {
    id: "breadcrumbs-1",
    title: "Basic",
    description:
      "Use Material UI basic breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbBasicString,
    preview: <BreadcrumbBasicPreview />,
  },
  {
    id: "breadcrumbs-2",
    title: "Custom Separator",
    description:
      "Use Material UI custom separator breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbCustomSeparatorString,
    preview: <BreadcrumbCustomSeparatorPreview />,
  },
  {
    id: "breadcrumbs-3",
    title: "With Icon",
    description:
      "Use Material UI breadcrumbs with icon with extended design. No extra package required.",
    codeString: breadcrumbIconString,
    preview: <BreadcrumbIconPreview />,
  },
  {
    id: "breadcrumbs-4",
    title: "With Chip",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbChipString,
    preview: <BreadcrumbChipPreview />,
  },
  {
    id: "breadcrumbs-5",
    title: "With Background",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbBackgroundString,
    preview: <BreadcrumbBackgroundPreview />,
  },
  {
    id: "breadcrumbs-6",
    title: "Collapsed",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbCollapsedString,
    preview: <BreadcrumbCollapsedPreview />,
  },
  {
    id: "breadcrumbs-7",
    title: "With Shape",
    description:
      "Use Material UI shape breadcrumbs with extended design. No extra package required.",
    codeString: breadcrumbShapeString,
    preview: <BreadcrumbShapePreview />,
  },
];

export const BreadcrumbsView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Breadcrumbs", path: "" },
        ]}
      />
      <PageTitle
        title="Breadcrumbs"
        description="Material UI core breadcrumbs with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Breadcrumbs Section */}
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
