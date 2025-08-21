"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { ProductShowcaseCard } from "../components/product-card/product-showcase-card";
import { GradientProductCard } from "../components/product-card/gradient-product-card";
import { HorizontalProductCard } from "../components/product-card/horizontal-product-card";
import { FullCoverProductCard } from "../components/product-card/full-cover-product-card";
import { SplitProductCard } from "../components/product-card/split-product-card";
import { GlassProductCard } from "../components/product-card/glass-product-card";
import { DiscountProductCard } from "../components/product-card/discount-product-card";
import { CoverBottomProductCard } from "../components/product-card/cover-bottom-product-card";
import { productShowCaseCardString } from "../code-string/product-card/product-showcase-card-string";
import { gradientProductCardString } from "../code-string/product-card/gradient-product-card-string";
import { horizontalProductCardString } from "../code-string/product-card/horizontal-product-card-string";
import { fullCoverProductCardString } from "../code-string/product-card/full-cover-product-card-string";
import { splitProductCardString } from "../code-string/product-card/split-product-card-string";
import { glassProductCardString } from "../code-string/product-card/glass-product-card-string";
import { discountProductCardString } from "../code-string/product-card/discount-product-card-string";
import { coverBottomProductCardString } from "../code-string/product-card/cover-bottom-product-card-string";

const sections = [
  {
    id: "product-card-1",
    title: "Basic Product Card",
    description: "A clean product card with image, name, price, and button",
    codeString: productShowCaseCardString,
    preview: <ProductShowcaseCard />,
  },
  {
    id: "product-card-2",
    title: "Gradient Product Card",
    description: "Glassmorphism overlay with modern blur effect",
    codeString: gradientProductCardString,
    preview: <GradientProductCard />,
  },
  {
    id: "product-card-3",
    title: "Side Image Product Card",
    description: "Left side product image with full details on the right side",
    codeString: horizontalProductCardString,
    preview: <HorizontalProductCard />,
  },
  {
    id: "product-card-4",
    title: "Full Cover Product Card",
    description: "Full cover image card with details inside overlay",
    codeString: fullCoverProductCardString,
    preview: <FullCoverProductCard />,
  },
  {
    id: "product-card-5",
    title: "Side Image Product Card",
    description: "Left side product image with full details on the right side",
    codeString: splitProductCardString,
    preview: <SplitProductCard />,
  },
  {
    id: "product-card-6",
    title: "Glass Overlay Product Card",
    description: "Glassmorphism overlay with details inside cover card",
    codeString: glassProductCardString,
    preview: <GlassProductCard />,
  },
  {
    id: "product-card-7",
    title: "Discount Badge Card",
    description: "Cover card with discount badge on the top right corner",
    codeString: discountProductCardString,
    preview: <DiscountProductCard />,
  },
  {
    id: "product-card-8",
    title: "Bottom Cover Card",
    description:
      "Product image covers 67% of the card height with details displayed in the remaining 33%.",
    codeString: coverBottomProductCardString,
    preview: <CoverBottomProductCard />,
  },
];

export const ProductCard = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.PRODUCT_CARD },
          { label: "Product card", path: "" },
        ]}
      />
      <PageTitle
        title="Product Cards"
        description="Showcase products with modern, responsive Material UI card designs featuring price, badges, and actions."
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
