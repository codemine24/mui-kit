"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import BasicBreadcrumbs from "../components/breadcrumb/basic-breadcrumb";
import CustomSeparatorBreadcrumbs from "../components/breadcrumb/custom-separator-breadcrumb";
import IconBreadcrumbs from "../components/breadcrumb/icon-breadcrumb";
import CollapsedBreadcrumbs from "../components/breadcrumb/collapsed-breadcrumb";
import ChipBreadcrumbs from "../components/breadcrumb/chip-breadcrumb";
import BackgroundBreadcrumbs from "../components/breadcrumb/background-breadcrumb";

const sections = [
  {
    id: "breadcrumbs-1",
    title: "Basic",
    description:
      "Use Material UI basic breadcrumbs with extended design. No extra package required.",
    codeString: "",
    preview: <BasicBreadcrumbs />,
  },
  {
    id: "breadcrumbs-2",
    title: "Custom Separator",
    description:
      "Use Material UI custom separator breadcrumbs with extended design. No extra package required.",
    codeString: "",
    preview: <CustomSeparatorBreadcrumbs />,
  },
  {
    id: "breadcrumbs-3",
    title: "With Icon",
    description:
      "Use Material UI breadcrumbs with icon with extended design. No extra package required.",
    codeString: "",
    preview: <IconBreadcrumbs />,
  },
  {
    id: "breadcrumbs-4",
    title: "With Chip",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: "",
    preview: <ChipBreadcrumbs />,
  },
  {
    id: "breadcrumbs-5",
    title: "With Background",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: "",
    preview: <BackgroundBreadcrumbs />,
  },
  {
    id: "breadcrumbs-6",
    title: "Collapsed",
    description:
      "Use Material UI collapsed breadcrumbs with extended design. No extra package required.",
    codeString: "",
    preview: <CollapsedBreadcrumbs />,
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
