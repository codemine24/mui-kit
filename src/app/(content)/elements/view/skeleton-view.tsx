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
import { skeletonAnimationString } from "../code-string/skeleton/skeleton-animation-string";
import { skeletonBasicString } from "../code-string/skeleton/skeleton-basic-string";
import { skeletonSquareBlockString } from "../code-string/skeleton/skeleton-square-block-string";
import {
    SkeletonAnimationPreview,
    SkeletonBasicPreview,
    SkeletonCardActionButtonPreview,
    SkeletonCardPreview,
    SkeletonListPreview,
    SkeletonSocialPostPreview,
    SkeletonSquareBlockPreview,
    SkeletonTestimonialPreview,
    SkeletonVerticalPreview,
    SkeletonWithoutContent,
} from "../components/skeleton";

const sections = [
  {
    id: "skeleton-1",
    title: "Basic MUI skeleton",
    description:
      "Basic customizable skeleton component built with material ui.",
    codeString: skeletonBasicString,
    preview: <SkeletonBasicPreview />,
  },
  {
    id: "skeleton-2",
    title: "Animation MUI skeleton",
    description: "Basic horizontal skeleton with animation. ",
    codeString: skeletonAnimationString,
    preview: <SkeletonAnimationPreview />,
  },
  {
    id: "skeleton-3",
    title: "Square block MUI skeleton",
    description: "Material ui skeleton square blocks.",
    codeString: skeletonSquareBlockString,
    preview: <SkeletonSquareBlockPreview />,
  },
  {
    id: "skeleton-4",
    title: "Social Post MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonSocialPostPreview />,
  },
  {
    id: "skeleton-5",
    title: "Without Content MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonWithoutContent />,
  },
  {
    id: "skeleton-6",
    title: "Card MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonCardPreview />,
  },
  {
    id: "skeleton-7",
    title: "Vertical MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonVerticalPreview />,
  },
  {
    id: "skeleton-8",
    title: "List MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonListPreview />,
  },
  {
    id: "skeleton-9",
    title: "Testimonial MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonTestimonialPreview />,
  },
  {
    id: "skeleton-10",
    title: "Card Action Button MUI Skeleton",
    description: "",
    codeString: "",
    preview: <SkeletonCardActionButtonPreview />,
  },
];

export const SkeletonView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.SKELETON },
          { label: "Skeleton", path: "" },
        ]}
      />
      <PageTitle
        title="Skeleton"
        description="Material UI provides a base skeleton component, but we’ve extended it with multiple advanced use-cases like emoji labels, text feedback, precision control, animated interactions, and icon customizations."
      />

      <Divider sx={{ my: 4 }} />

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
