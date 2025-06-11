"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { ExternalPackageAlert } from "@/components/external-package-alert";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { FeatureProductWithCarousel } from "../components/feature-product/feature-product-with-carousel-preview";
import { featureProductWithCarouselString } from "../code-string/feature-products/feature-product-with-carousel-string";
import { FeatureProductHero } from "../components/feature-product/feature-product-hero-preview";
import { featureProductHeroString } from "../code-string/feature-products/feature-product-hero-string";
import { FeatureProductSimple } from "../components/feature-product/feature-product-simple-preview";
import { featureProductSimpleString } from "../code-string/feature-products/feature-product-simple-string";
import FeaturedProductMinimalAnimationSection from "../components/feature-product/featured-product-minimal-animation-preview";
import { featureProductMinimalAnimationString } from "../code-string/feature-products/feature-product-minimal-animation-string";




const sections = [
  {
    id: "feature-product-1",
    title: "Product with Carousel",
    description: "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    codeString: featureProductWithCarouselString,
    preview: <FeatureProductWithCarousel />,
  },
    //   {
    //     id: "feature-product-2",
    //     title: "Product with Hero",
    //     description: "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
    //     codeString: featureProductHeroString,
    //     preview: <FeatureProductHero />,
    //   },
    {
        id: "feature-product-2",
        title: "Product with Simple",
        description: "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
        codeString: featureProductSimpleString,
        preview: <FeatureProductSimple />,
      },
      {
        id: "feature-product-2",
        title: "Product with Simple",
        description: "Featured product section with customer feedback carousel. Includes product image, description, ratings, and testimonials.",
        codeString: featureProductMinimalAnimationString,
        preview: <FeaturedProductMinimalAnimationSection />,
      },
];

export const FeatureProductView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Feature Products", path: "" },
        ]}
      />
      <PageTitle
        title="Feature Products"
        description="Showcase your featured products with customer testimonials and ratings."
      />

      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        packages={[
          {
            name: "@mui/material",
            url: "https://www.npmjs.com/package/@mui/material",
          },
          {
            name: "@mui/icons-material",
            url: "https://www.npmjs.com/package/@mui/icons-material",
          },
        ]}
      />
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
