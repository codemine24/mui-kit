"use client";

import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { CarouselAlignPreview } from "../components/carousel/preview/carousel-align-preview";
import { CarouselProgressPreview } from "../components/carousel/preview/carousel-progress-preview";
import { CarouselOpacityPreview } from "../components/carousel/preview/carousel-opacity-preview";
import { CarouselScalePreview } from "../components/carousel/preview/carousel-scale-preview";
import { CarouselFade } from "../components/carousel/preview/carousel-fade-preview";
import { CarouselParallax } from "../components/carousel/preview/carousel-parallax-preview";
import { CarouselAutoplayPreview } from "../components/carousel/preview/carousel-auto-play-preview";
import { CarouselAutoScrollPreview } from "../components/carousel/preview/carousel-auto-scroll-preview";
import { CarouselThumbsXPreview } from "../components/carousel/preview/carousel-thumbs-x-preview";
import { CarouselThumbsYPreview } from "../components/carousel/preview/carousel-thumbs-y-preview";
import { CarouselVariableWidthsPreview } from "../components/carousel/preview/carousel-variable-width-preview";
import { CarouselAutoHeight } from "../components/carousel/preview/carousel-auto-height-preview";
import { CarouselYaxisPreview } from "../components/carousel/preview/carousel-yaxis-preview";
import { CarouselDotsNumberPreview } from "../components/carousel/preview/carousel-dots-number-preview";
import { CarouselCustoms } from "../components/carousel/preview/carousel-custom-preview";

const sections = [
    {
        id: "carousel-1",
        title: "Align",
        description: "Carousel align description",
        codeString: "",
        preview: <CarouselAlignPreview />,
    },
    {
        id: "carousel-2",
        title: "Progress",
        description: "Carousel progress description",
        codeString: "",
        preview: <CarouselProgressPreview />,
    },
    {
        id: "carousel-3",
        title: "Opacity",
        description: "Carousel opacity description",
        codeString: "",
        preview: <CarouselOpacityPreview />,
    },
    {
        id: "carousel-4",
        title: "Scale",
        description: "Carousel scale description",
        codeString: "",
        preview: <CarouselScalePreview />,
    },
    {
        id: "carousel-5",
        title: "Fade",
        description: "Carousel fade description",
        codeString: "",
        preview: <CarouselFade />,
    },
    {
        id: "carousel-6",
        title: "Parallax",
        description: "Carousel parallax description",
        codeString: "",
        preview: <CarouselParallax />,
    },
    {
        id: "carousel-7",
        title: "Auto Play",
        description: "Carousel auto play description",
        codeString: "",
        preview: <CarouselAutoplayPreview />,
    },
    {
        id: "carousel-8",
        title: "Auto Scroll",
        description: "Carousel auto scroll description",
        codeString: "",
        preview: <CarouselAutoScrollPreview />,
    },
    {
        id: "carousel-9",
        title: "Thumbs X",
        description: "Carousel thumbs x description",
        codeString: "",
        preview: <CarouselThumbsXPreview />,
    },
    {
        id: "carousel-10",
        title: "Thumbs Y",
        description: "Carousel thumbs y description",
        codeString: "",
        preview: <CarouselThumbsYPreview />,
    },
    {
        id: "carousel-11",
        title: "Variable Width",
        description: "Carousel variable width description",
        codeString: "",
        preview: <CarouselVariableWidthsPreview />,
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
                description="Material UI core carousel with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

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
