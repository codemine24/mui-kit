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
import { carouselAlignString } from "../code-string/carousel";
import { carouselAutoScrollString } from "../code-string/carousel/carousel-auto-scroll";
import { carouselAutoPlayString } from "../code-string/carousel/carousel-autoplay-string";
import {
  carouselArrowButtonsString,
  carouselDotButtonsString,
  carouselOptionsString,
  carouselProgressBarString,
  carouselString,
  carouselThumbsString,
  carouselThumbString,
  indexLabelString,
  playButtonString,
  useCarouselArrowString,
  useCarouselAutoplayString,
  useCarouselAutoScrollString,
  useCarouselDotsString,
  useCarouseProgressString,
  useParallaxString,
  useThumbsString,
} from "../code-string/carousel/carousel-common";
import { carouselFadeString } from "../code-string/carousel/carousel-fade-preview";
import { carouselOpacityString } from "../code-string/carousel/carousel-opacity-string";
import { carouselParallaxString } from "../code-string/carousel/carousel-parallax-preview";
import { carouselProgressString } from "../code-string/carousel/carousel-progress-string";
import { carouselScaleString } from "../code-string/carousel/carousel-scale-string";
import { CarouselThumbsXString } from "../code-string/carousel/carousel-thumbs-x-string";
import { carouselThumbsYString } from "../code-string/carousel/carousel-thumbs-y-string";
import { carouselVariableWidthString } from "../code-string/carousel/carousel-variable-width-string";
import { CarouselAlignPreview } from "../components/carousel/preview/carousel-align-preview";
import { CarouselAutoHeight } from "../components/carousel/preview/carousel-auto-height-preview";
import { CarouselAutoplayPreview } from "../components/carousel/preview/carousel-auto-play-preview";
import { CarouselAutoScrollPreview } from "../components/carousel/preview/carousel-auto-scroll-preview";
import { CarouselCustoms } from "../components/carousel/preview/carousel-custom-preview";
import { CarouselDotsNumberPreview } from "../components/carousel/preview/carousel-dots-number-preview";
import { CarouselFade } from "../components/carousel/preview/carousel-fade-preview";
import { CarouselOpacityPreview } from "../components/carousel/preview/carousel-opacity-preview";
import { CarouselParallaxPreview } from "../components/carousel/preview/carousel-parallax-preview";
import { CarouselProgressPreview } from "../components/carousel/preview/carousel-progress-preview";
import { CarouselScalePreview } from "../components/carousel/preview/carousel-scale-preview";
import { CarouselThumbsXPreview } from "../components/carousel/preview/carousel-thumbs-x-preview";
import { CarouselThumbsYPreview } from "../components/carousel/preview/carousel-thumbs-y-preview";
import { CarouselVariableWidthPreview } from "../components/carousel/preview/carousel-variable-width-preview";
import { CarouselYaxisPreview } from "../components/carousel/preview/carousel-yaxis-preview";

const sections = [
  {
    id: "carousel-1",
    title: "Align",
    description:
      "Initial carousel align is little different from regular ones. You can customize the alignment position.",
    codeString: [
      { name: "carouselAlign.tsx", code: carouselAlignString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
    ],
    preview: <CarouselAlignPreview />,
  },
  {
    id: "carousel-2",
    title: "Progress",
    description: "You can display carousel progress with this variant. ",
    codeString: [
      { name: "carouselProgress.tsx", code: carouselProgressString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
    ],
    preview: <CarouselProgressPreview />,
  },
  {
    id: "carousel-3",
    title: "Opacity",
    description: "Different opacity for active and inactive items.",
    codeString: [
      { name: "carouselOpacity.tsx", code: carouselOpacityString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
    ],
    preview: <CarouselOpacityPreview />,
  },
  {
    id: "carousel-4",
    title: "Scale",
    description: "Different scale for active slide.",
    codeString: [
      { name: "carouselScale.tsx", code: carouselScaleString },
      { name: "Carousel.tsx", code: carouselString },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselScalePreview />,
  },
  {
    id: "carousel-5",
    title: "Fade",
    description: "Fade animation effect on changing slides.",
    codeString: [
      { name: "carouselFade.tsx", code: carouselFadeString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselFade />,
  },
  {
    id: "carousel-6",
    title: "Parallax",
    description: "Parallax animation effect on changing slides.",
    codeString: [
      { name: "CarouselParallax.tsx", code: carouselParallaxString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "useParallax.ts", code: useParallaxString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselParallaxPreview />,
  },
  {
    id: "carousel-7",
    title: "Auto play",
    description: "Make your slider auto play with this variant.",
    codeString: [
      { name: "CarouselAutoplay.tsx", code: carouselAutoPlayString },
      { name: "Carousel.tsx", code: carouselString },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "PlayButton.tsx", code: playButtonString },
      { name: "useCarouselAutoPlay.ts", code: useCarouselAutoplayString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
    ],
    preview: <CarouselAutoplayPreview />,
  },
  {
    id: "carousel-8",
    title: "Auto scroll",
    description: "Continuous horizontal scrolling effect.",
    codeString: [
      { name: "CarouselAutoScroll.tsx", code: carouselAutoScrollString },
      { name: "Carousel.tsx", code: carouselString },
      { name: "CarouselProgressBar.tsx", code: carouselProgressBarString },
      { name: "IndexLabel.tsx", code: indexLabelString },
      { name: "PlayButton.tsx", code: playButtonString },
      { name: "useCarouselAutoScroll.ts", code: useCarouselAutoScrollString },
      { name: "useCarouselProgress.ts", code: useCarouseProgressString },
    ],
    preview: <CarouselAutoScrollPreview />,
  },
  {
    id: "carousel-9",
    title: "Thumbs X",
    description: "Horizontal Mini map for the slide items. ",
    codeString: [
      { name: "CarouselThumbsX.tsx", code: CarouselThumbsXString },
      { name: "Carousel.tsx", code: carouselString },
      { name: "CarouselThumb.tsx", code: carouselThumbString },
      { name: "CarouselThumbs.tsx", code: carouselThumbsString },
      { name: "IndexLabel.tsx", code: indexLabelString },

      { name: "useThumbs.ts", code: useThumbsString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselThumbsXPreview />,
  },
  {
    id: "carousel-10",
    title: "Thumbs Y",
    description: "Vertical Mini map for the slide items. ",
    codeString: [
      { name: "CarouselThumbsY.tsx", code: carouselThumbsYString },
      { name: "Carousel.tsx", code: carouselString },
      { name: "CarouselThumb.tsx", code: carouselThumbString },
      { name: "CarouselThumbs.tsx", code: carouselThumbsString },
      { name: "IndexLabel.tsx", code: indexLabelString },

      { name: "useThumbs.ts", code: useThumbsString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselThumbsYPreview />,
  },
  {
    id: "carousel-11",
    title: "Variable width",
    description: "Custom width for each slide.",
    codeString: [
      { name: "CarouselVariableWidth.tsx", code: carouselVariableWidthString },
      { name: "Carousel.tsx", code: carouselString },
      {
        name: "CarouselArrowBasicButtons.tsx",
        code: carouselArrowButtonsString,
      },
      { name: "CarouselDotButtons.tsx", code: carouselDotButtonsString },
      { name: "IndexLabel.tsx", code: indexLabelString },

      { name: "useCarouselArrows.ts", code: useCarouselArrowString },
      { name: "useCarouselDots.ts", code: useCarouselDotsString },
      { name: "CarouselOptions.ts", code: carouselOptionsString },
    ],
    preview: <CarouselVariableWidthPreview />,
  },
  {
    id: "carousel-12",
    title: "Auto Height",
    description: "Carousel auto height description",
    codeString: "",
    preview: <CarouselAutoHeight />,
  },
  {
    id: "carousel-13",
    title: "Y Axis",
    description: "Carousel y axis description",
    codeString: "",
    preview: <CarouselYaxisPreview />,
  },
  {
    id: "carousel-14",
    title: "Dots Number",
    description: "Carousel dots number description",
    codeString: "",
    preview: <CarouselDotsNumberPreview />,
  },
  {
    id: "carousel-15",
    title: "Custom",
    description: "Carousel custom description",
    codeString: "",
    preview: <CarouselCustoms />,
  },
];

export const CarouselView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Carousel", path: "" },
        ]}
      />
      <PageTitle
        title="Carousel"
        description="Material ui is missing carousel. So we've added it using embla-carousel along with mui. Each carousel separated into different components to make it easy to maintain."
      />

      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        packages={[
          {
            name: "embla-carousel",
            url: "https://www.npmjs.com/package/embla-carousel",
          },
        ]}
      />
      {/* Carousel Section */}
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
