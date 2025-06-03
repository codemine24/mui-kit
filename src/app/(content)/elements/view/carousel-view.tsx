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
    }
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
