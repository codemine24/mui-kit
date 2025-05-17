"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { BasicCard1CodeString, BasicCard2CodeString, BasicCard3CodeString, BasicCard4CodeString, BasicCardCodeString, GridCard1CodeString, CardWithImage1CodeString, CardWithImageString2, ListCardCodeString, PricingCardCodeString } from "../code-string/card";
import { BasicCard1Preview, BasicCard2Preview, BasicCard3Preview, BasicCard4Preview, BasicCardPreview, GridCardPreview1, CardWithImage1Preview, ListCardPreview, PricingCardPreview } from "../components/card";
import CardWithImage2Preview from "../components/card/card-with-image-preview-2";

const sections = [
  {
    id: "basic-card",
    title: "Basic Card",
    description: "A regular but elegant card with solid background color",
    codeString: BasicCardCodeString,
    preview: <BasicCardPreview />,
  },
  {
    id: "basic-card-1",
    title: "Basic Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: BasicCard1CodeString,
    preview: <BasicCard1Preview />,
  },
  {
    id: "basic-card-2",
    title: "Basic Card 2",
    description: "A regular but elegant card with solid background color",
    codeString: BasicCard2CodeString,
    preview: <BasicCard2Preview />,
  },
  {
    id: "basic-card-3",
    title: "Basic Card 3",
    description: "A regular but elegant card with solid background color",
    codeString: BasicCard3CodeString,
    preview: <BasicCard3Preview />,
  },
  {
    id: "basic-card-4",
    title: "Basic Card 4",
    description: "A regular but elegant card with solid background color",
    codeString: BasicCard4CodeString,
    preview: <BasicCard4Preview />,
  },
  {
    id: "card-with-image-1",
    title: "Card With Image 1",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImage1CodeString,
    preview: <CardWithImage1Preview />,
  },
  {
    id: "card-with-image-2",
    title: "Card With Image 2",
    description: "A regular but elegant card with solid background color",
    codeString: CardWithImageString2,
    preview: <CardWithImage2Preview />,
  },
  {
    id: "grid-card-1",
    title: "Grid Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: GridCard1CodeString,
    preview: <GridCardPreview1 />,
  },
  {
    id: "list-card-1",
    title: "List Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: ListCardCodeString,
    preview: <ListCardPreview />,
  },
  {
    id: "pricing-card-1",
    title: "Pricing Card 1",
    description: "A regular but elegant card with solid background color",
    codeString: PricingCardCodeString,
    preview: <PricingCardPreview />,
  },
]


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
