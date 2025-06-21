"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { featureProductMinimalAnimationString } from "../code-string/feature-products/feature-product-minimal-animation-string";
import { featureProductSimpleString } from "../code-string/feature-products/feature-product-simple-string";
import { featureProductWithCarouselString } from "../code-string/feature-products/feature-product-with-carousel-string";
import { FeatureProductSimplePreview } from "../components/feature-product/feature-product-simple-preview";
import { FeatureProductWithCarouselPreview } from "../components/feature-product/feature-product-with-carousel-preview";
import { FeaturedProductMinimalAnimationPreview } from "../components/feature-product/featured-product-minimal-animation-preview";
import { NewsletterSubscriptionHorizontal } from "../components/newsletter-subscription/newsletter-subscription-horizontal-preview";

const sections = [
  {
    id: "newsletter-subscription-1",
    title: "Simple newsletter subscription",
    description:
      "Simple newsletter subscription section with email input and subscribe button.",
    codeString: featureProductSimpleString,
    preview: <NewsletterSubscriptionHorizontal />,
  },
//   {
//     id: "feature-product-2",
//     title: "Product with carousel",
//     description:
//       "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
//     codeString: featureProductWithCarouselString,
//     preview: <FeatureProductWithCarouselPreview />,
//   },
//   {
//     id: "feature-product-3",
//     title: "Featured product with minimal animation",
//     description:
//       "Add minimal hover animation to your featured product section.",
//     codeString: featureProductMinimalAnimationString,
//     preview: <FeaturedProductMinimalAnimationPreview />,
//   },
];

export const NewsletterSubscriptionView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Newsletter Subscription", path: "" },
        ]}
      />
      <PageTitle
        title="Newsletter Subscription"
        description="Showcase your newsletter subscription section with email input and subscribe button."
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
