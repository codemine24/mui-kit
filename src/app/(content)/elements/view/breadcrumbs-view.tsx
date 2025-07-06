"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import {
  BreadcrumbBasicPreview,
  BreadcrumbCustomSeparatorPreview,
  BreadcrumbCollapsedPreview,
  BreadcrumbChipPreview,
  BreadcrumbBackgroundPreview,
  BreadcrumbIconPreview,
  BreadcrumbShapePreview
} from "../components/breadcrumb";
import {
  breadcrumbCollapsedString,
  breadcrumbChipString,
  breadcrumbCustomSeparatorString,
  breadcrumbIconString,
  breadcrumbShapeString,
  breadcrumbBackgroundString,
  breadcrumbBasicString
} from "../code-string/breadcrumb";
import { PATHS } from "@/router/paths";

const sections = [
  {
    id: "breadcrumbs-1",
    title: "Regular",
    description:
      "Use this simple breadcrumbs that will adjust with most of the website layout. No extra package required.",
    codeString: breadcrumbBasicString,
    preview: <BreadcrumbBasicPreview />
  },
  {
    id: "breadcrumbs-2",
    title: "Custom separator",
    description: "Use these variants if you need custom separator.",
    codeString: breadcrumbCustomSeparatorString,
    preview: <BreadcrumbCustomSeparatorPreview />
  },
  {
    id: "breadcrumbs-3",
    title: "With icon",
    description: "You can use custom icons along with the labels. ",
    codeString: breadcrumbIconString,
    preview: <BreadcrumbIconPreview />
  },
  {
    id: "breadcrumbs-4",
    title: "With Chip",
    description: "Chip breadcrumbs perfect for you, if you like chip style. ",
    codeString: breadcrumbChipString,
    preview: <BreadcrumbChipPreview />
  },
  {
    id: "breadcrumbs-5",
    title: "With background",
    description:
      "A huge collection of breadcrumbs with different background color. Choose your desire one from this collection.",
    codeString: breadcrumbBackgroundString,
    preview: <BreadcrumbBackgroundPreview />
  },
  {
    id: "breadcrumbs-6",
    title: "Collapsed",
    description: "If breadcrumbs are too long, you can collapse them.",
    codeString: breadcrumbCollapsedString,
    preview: <BreadcrumbCollapsedPreview />
  },
  {
    id: "breadcrumbs-7",
    title: "Custom shape",
    description: "You can customize the shape using clip-path css property. Here is an example.",
    codeString: breadcrumbShapeString,
    preview: <BreadcrumbShapePreview />
  }
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
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Breadcrumbs", path: "" }
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

          <CodePreviewCopyWrapper codeString={section.codeString} preview={section.preview} />
        </Box>
      ))}
    </Box>
  );
};
