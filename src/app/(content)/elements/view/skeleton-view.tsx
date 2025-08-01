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
import { skeletonCardActionButtonString } from "../code-string/skeleton/skeleton-card-action-button-string";
import { skeletonCardString } from "../code-string/skeleton/skeleton-card-string";
import { skeletonListString } from "../code-string/skeleton/skeleton-list-string";
import { skeletonSocialPostString } from "../code-string/skeleton/skeleton-social-post-string";
import { skeletonSquareBlockString } from "../code-string/skeleton/skeleton-square-block-string";
import { skeletonTestimonialString } from "../code-string/skeleton/skeleton-testimonial-string";
import { skeletonVerticalString } from "../code-string/skeleton/skeleton-vertical-string";
import { skeletonWithoutContentString } from "../code-string/skeleton/skeleton-without-content-string";
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
    title: "Social post skeleton",
    description: "Use this social card skeleton for multiple purposes.",
    codeString: skeletonSocialPostString,
    preview: <SkeletonSocialPostPreview />,
  },
  {
    id: "skeleton-5",
    title: "Social card without content",
    description: "This social post content skeleton doesn't have content.",
    codeString: skeletonWithoutContentString,
    preview: <SkeletonWithoutContent />,
  },
  {
    id: "skeleton-6",
    title: "Card skeleton",
    description:
      "Use this card skeleton for multiple purposes. Build with material ui only. ",
    codeString: skeletonCardString,
    preview: <SkeletonCardPreview />,
  },
  {
    id: "skeleton-7",
    title: "Vertical Skeleton",
    description: "Use this vertical material ui skeleton.",
    codeString: skeletonVerticalString,
    preview: <SkeletonVerticalPreview />,
  },
  {
    id: "skeleton-8",
    title: "List Skeleton",
    description: "If you need list skeleton, use this.",
    codeString: skeletonListString,
    preview: <SkeletonListPreview />,
  },
  {
    id: "skeleton-9",
    title: "Testimonial skeleton",
    description:
      "This skeleton is perfect for client testimonial section designed with material ui.",
    codeString: skeletonTestimonialString,
    preview: <SkeletonTestimonialPreview />,
  },
  {
    id: "skeleton-10",
    title: "Card action button skeleton",
    description: "Use this card action button skeleton. ",
    codeString: skeletonCardActionButtonString,
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
        description="Skeleton is one of the most commonly used for any website. All these skeleton designed with purely material ui and fully customizable. "
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
