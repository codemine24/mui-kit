"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";

import { BasicPopoverPreview, PopoverHoverPreview, PopoverMultiLayerPreview } from "../components/popover";
import { popoverBasicString, popoverHoverString, popoverMultiLayerString } from "../code-string/popover";


const sections = [
    {
        id: "popover-1",
        title: "Basic",
        description: "Basic popover with extended design",
        codeString: popoverBasicString,
        preview: <BasicPopoverPreview />,
    },
    {
        id: "popover-2",
        title: "Hover",
        description: "Hover popover with extended design",
        codeString: popoverHoverString,
        preview: <PopoverHoverPreview />,
    },
    {
        id: "popover-3",
        title: "Multi Layer",
        description: "Multi layer popover with extended design",
        codeString: popoverMultiLayerString,
        preview: <PopoverMultiLayerPreview />,
    },
];

export const PopoverView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: "/elements" },
                    { label: "Popover", path: "" },
                ]}
            />
            <PageTitle
                title="Popover"
                description="Material UI core popover with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Popover Section */}
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
