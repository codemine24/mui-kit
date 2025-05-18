"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import {
  CardWithImageString3,
  CardWithImageString4,
  CardWithImageString5,
  CardWithImageString6,
  CardWithImageString7,
  ECommerceCardString1,
  ErrorCardString,
  FooterCardString,
  ForestCardString,
  GridCard1CodeString,
  ProductCardString,
  ProductCardString2,
  ProfileCardString,
  ProfileCardString2,
  ProfileCardString3,
  PropertyCardString,
  ReviewCardString,
  ReviewCardString2,
  cardBasic1String,
  cardBasic2String,
  cardBasic3String,
  cardBasic4String,
  cardBasic5String,
  cardImage1String,
  cardImage2String,
  cardListString,
  cardPricingString,
  cardProfileString,
} from "../code-string/card";
import { ReviewCardString3 } from "../code-string/card/review-card-string-3";
import {
  CardBasic1Preview,
  CardBasic2Preview,
  CardBasic3Preview,
  CardBasic4Preview,
  CardBasic5Preview,
  CardImage1Preview,
  CardImage2Preview,
  CardListPreview,
  CardPricingPreview,
  CardProfilePreview,
  CardWithImagePreview3,
  CardWithImagePreview4,
  CardWithImagePreview5,
  CardWithImagePreview6,
  CardWithImagePreview7,
  ECommerceCardPreview1,
  ErrorCardPreview,
  FooterCardPreview,
  ForestCardPreview,
  GridCardPreview1,
  ProductCardPreview,
  ProductCardPreview2,
  ProfileCardPreview,
  ProfileCardPreview2,
  ProfileCardPreview3,
  PropertyPreviewCard,
  ReviewCardPreview,
  ReviewCardPreview2,
  ReviewCardPreview3,
} from "../components/card";

const sections = [
  {
    id: "basic-card-1",
    title: "Simple Card",
    description: "Very simple card without any distraction",
    codeString: cardBasic1String,
    preview: <CardBasic1Preview />,
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
    id: "card-image-1",
    title: "Vertical Image Card",
    description:
      "Simple vertical card with image. Mostly used for product card",
    codeString: cardImage1String,
    preview: <CardImage1Preview />,
  },
  {
    id: "card-image-2",
    title: "Horizontal Image Card",
    description: "Simple horizontal card with image and perfect for blog card",
    codeString: cardImage2String,
    preview: <CardImage2Preview />,
  },
  {
    id: "grid-card-1",
    title: "Multi-grid Card",
    description:
      "Card with multiple grid layout perfect to display your service or product overview.",
    codeString: GridCard1CodeString,
    preview: <GridCardPreview1 />,
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
    id: "footer-card-1",
    title: "Footer Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: FooterCardString,
    preview: <FooterCardPreview />,
  },
  {
    id: "property-card-1",
    title: "Property Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: PropertyCardString,
    preview: <PropertyPreviewCard />,
  },
  {
    id: "card-with-image-3",
    title: "Card With Image 3",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString3,
    preview: <CardWithImagePreview3 />,
  },
  {
    id: "error-card-1",
    title: "Error Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ErrorCardString,
    preview: <ErrorCardPreview />,
  },
  {
    id: "card-with-image-4",
    title: "Card With Image 4",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString4,
    preview: <CardWithImagePreview4 />,
  },
  {
    id: "e-commerce-card-1",
    title: "E-Commerce Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ECommerceCardString1,
    preview: <ECommerceCardPreview1 />,
  },
  {
    id: "card-with-image-5",
    title: "Card With Image 5",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString5,
    preview: <CardWithImagePreview5 />,
  },
  {
    id: "profile-card-2",
    title: "Profile Card 2",
    description: "A regular but elegant card with solid background color",
    codeString: ProfileCardString2,
    preview: <ProfileCardPreview2 />,
  },
  {
    id: "profile-card-3",
    title: "Profile Card 3",
    description: "A regular but elegant card with solid background color",
    codeString: ProfileCardString3,
    preview: <ProfileCardPreview3 />,
  },
  {
    id: "card-with-image-6",
    title: "Card With Image 6",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString6,
    preview: <CardWithImagePreview6 />,
  },
  {
    id: "review-card-1",
    title: "Review Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ReviewCardString,
    preview: <ReviewCardPreview />,
  },
  {
    id: "review-card-2",
    title: "Review Card 2",
    description: "A regular but elegant card with solid background color",
    codeString: ReviewCardString2,
    preview: <ReviewCardPreview2 />,
  },
  {
    id: "review-card-3",
    title: "Review Card 3",
    description: "A regular but elegant card with solid background color",
    codeString: ReviewCardString3,
    preview: <ReviewCardPreview3 />,
  },
  {
    id: "product-card-1",
    title: "Product Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ProductCardString,
    preview: <ProductCardPreview />,
  },
  {
    id: "product-card-2",
    title: "Product Card 2",
    description: "A regular but elegant card with solid background color",
    codeString: ProductCardString2,
    preview: <ProductCardPreview2 />,
  },
  {
    id: "card-with-image-7",
    title: "Card With Image 7",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString7,
    preview: <CardWithImagePreview7 />,
  },
  {
    id: "forest-card-1",
    title: "Forest Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ForestCardString,
    preview: <ForestCardPreview />,
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
          { label: "Elements", path: "/elements" },
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
