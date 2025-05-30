"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import {
  cardBasic2String,
  cardBasic3String,
  cardBasic4String,
  cardBasic5String,
  cardBasicString,
  cardBlogString,
  cardBottomImageString,
  cardDownloadString,
  cardECommerceString,
  cardErrorString,
  cardGridString,
  cardHorizontalString,
  cardImage2String,
  cardImageBg2String,
  cardImageBg3String,
  cardImageBgString,
  cardImageString,
  cardListString,
  cardPricingString,
  cardProduct2String,
  cardProductString,
  cardProfile2String,
  cardProfile3String,
  cardProfileString,
  cardProperty2String,
  cardPropertyString,
  cardReviewString
} from "../code-string/card";
import { cardTestimonialString } from "../code-string/card/card-testimonial-string";
import {
  CardBasic2Preview,
  CardBasic3Preview,
  CardBasic4Preview,
  CardBasic5Preview,
  CardBasicPreview,
  CardBlogPreview,
  CardBottomImagePreview,
  CardDownloadPreview,
  CardECommercePreview,
  CardErrorPreview,
  CardGridPreview,
  CardHorizontalPreview,
  CardImage2Preview,
  CardImageBg2Preview,
  CardImageBg3Preview,
  CardImageBgPreview,
  CardImagePreview,
  CardListPreview,
  CardPricingPreview,
  CardProduct2Preview,
  CardProductPreview,
  CardProfile2Preview,
  CardProfile3Preview,
  CardProfilePreview,
  CardProperty2Preview,
  CardPropertyPreview,
  CardReviewPreview,
  CardTestimonialPreview
} from "../components/card";
import { PATHS } from "@/router/paths";

const sections = [
  {
    id: "basic-card-1",
    title: "Simple Card",
    description: "Very simple card without any distraction",
    codeString: cardBasicString,
    preview: <CardBasicPreview />,
  },
  {
    id: "basic-card-2",
    title: "Action button Card",
    description: "Use this simple card with a tiny action button",
    codeString: cardBasic2String,
    preview: <CardBasic2Preview />,
  },
  {
    id: "basic-card-3",
    title: "Button Card",
    description: "A solid card with simple button. ",
    codeString: cardBasic3String,
    preview: <CardBasic3Preview />,
  },
  {
    id: "basic-card-4",
    title: "Footer Card",
    description: "A simple card with elegant footer",
    codeString: cardBasic4String,
    preview: <CardBasic4Preview />,
  },
  {
    id: "basic-card-5",
    title: "Header Card",
    description: "Basic card with simple header",
    codeString: cardBasic5String,
    preview: <CardBasic5Preview />,
  },

  {
    id: "vertical-card-1",
    title: "Vertical Image Card",
    description:
      "Simple vertical card with image. Mostly used for product card",
    codeString: cardImageString,
    preview: <CardImagePreview />,
  },
  {
    id: "horizontal-card",
    title: "Horizontal Image Card",
    description:
      "Horizontal image with left image and right text designed with material ui only. ",
    codeString: cardHorizontalString,
    preview: <CardHorizontalPreview />,
  },
  {
    id: "card-image-2",
    title: "Horizontal Image Card",
    description: "Simple horizontal card with image and perfect for blog card",
    codeString: cardImage2String,
    preview: <CardImage2Preview />,
  },
  {
    id: "grid-card",
    title: "Multi-grid Card",
    description:
      "Card with multiple grid layout perfect to display your service or product overview.",
    codeString: cardGridString,
    preview: <CardGridPreview />,
  },
  {
    id: "list-card-1",
    title: "List Card",
    description: "List card is perfect to display product or service preview. ",
    codeString: cardListString,
    preview: <CardListPreview />,
  },
  {
    id: "pricing-card-1",
    title: "Pricing Card",
    description:
      "Simple pricing card to display your product or service price designed with material ui only. ",
    codeString: cardPricingString,
    preview: <CardPricingPreview />,
  },
  {
    id: "profile-card-1",
    title: "Profile card with menu popover",
    description:
      "Use this profile menu popover card to display user profile info. ",
    codeString: cardProfileString,
    preview: <CardProfilePreview />,
  },

  {
    id: "profile-card-2",
    title: "Square profile card",
    description: "Another profile card variant with square shape image. ",
    codeString: cardProfile2String,
    preview: <CardProfile2Preview />,
  },
  {
    id: "profile-card-3",
    title: "Rounded Profile Card",
    description:
      "Profile card with rounded image perfect for simple design layout. ",
    codeString: cardProfile3String,
    preview: <CardProfile3Preview />,
  },
  {
    id: "download-card",
    title: "Download Card",
    description:
      "Use this simple download card to preview your app download links. ",
    codeString: cardDownloadString,
    preview: <CardDownloadPreview />,
  },
  {
    id: "property-card-1",
    title: "Simple property card",
    description:
      "Add this simple property card to display basic property info. ",
    codeString: cardPropertyString,
    preview: <CardPropertyPreview />,
  },
  {
    id: "property-card-2",
    title: "Property card with review",
    description:
      "Display property information more detailed with this property card designed with material ui. ",
    codeString: cardProperty2String,
    preview: <CardProperty2Preview />,
  },
  {
    id: "card-with-image-3",
    title: "Bottom Image Card",
    description:
      "Another simple card variant with bottom image. It's a little bit different but still useful for blog or product card.",
    codeString: cardBottomImageString,
    preview: <CardBottomImagePreview />,
  },
  {
    id: "error-card-1",
    title: "Error Card",
    description: "A simple material ui card with error alert on top.",
    codeString: cardErrorString,
    preview: <CardErrorPreview />,
  },
  {
    id: "e-commerce-card-1",
    title: "E-Commerce card",
    description:
      "Another simple product card with pricing chip. Perfect for e-commerce website uses. ",
    codeString: cardECommerceString,
    preview: <CardECommercePreview />,
  },
  {
    id: "product-card",
    title: "Product preview card",
    description:
      "Simple but powerful product preview card. Perfect for e-commerce/ digital product website.",
    codeString: cardProductString,
    preview: <CardProductPreview />,
  },
  {
    id: "product-card-2",
    title: "Product preview card v2",
    description:
      "Another version of product preview card with add to cart button.",
    codeString: cardProduct2String,
    preview: <CardProduct2Preview />,
  },
  {
    id: "review-card",
    title: "Review card",
    description:
      "Another review card with simple image and exiting bottom div.",
    codeString: cardReviewString,
    preview: <CardReviewPreview />,
  },

  {
    id: "blog-card",
    title: "Blog card",
    description: "Another blog archive card with simple image and basic info",
    codeString: cardBlogString,
    preview: <CardBlogPreview />,
  },
  {
    id: "card-testimonial",
    title: "Testimonial card",
    description:
      "Testimonial card to display customer review and feedback. Fully customizable and designed with material ui.",
    codeString: cardTestimonialString,
    preview: <CardTestimonialPreview />,
  },
  {
    id: "card-image-bg",
    title: "Image in background card",
    description:
      "This background image card is perfect for blog or product preview. ",
    codeString: cardImageBgString,
    preview: <CardImageBgPreview />,
  },
  {
    id: "card-image-bg-2",
    title: "Blog image card",
    description: "Unique blog card with image in background",
    codeString: cardImageBg2String,
    preview: <CardImageBg2Preview />,
  },
  {
    id: "card-image-bg-3",
    title: "Forest card",
    description: "Multipurpose card with image in background.",
    codeString: cardImageBg3String,
    preview: <CardImageBg3Preview />,
  },
];

export const CardView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Card", path: "" },
        ]}
      />
      <PageTitle
        title="Card"
        description="Material UI core card with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Card - 1 */}
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
