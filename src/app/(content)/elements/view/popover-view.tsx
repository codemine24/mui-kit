"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";

import { BasicPopoverPreview, PopoverHoverPreview, PopoverMultiLayerPreview, PopoverExpandPreview, PopoverMenuPreview, PopoverPositionPreview, PopoverPosition2Preview, PopoverPosition3Preview } from "../components/popover";
import { popoverBasicString, popoverHoverString, popoverMultiLayerString, popoverExpandString, popoverMenuString, popoverPositionString, popoverPosition2String, popoverPosition3String } from "../code-string/popover";


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
        title: "Position",
        description: "Position popover with extended design",
        codeString: popoverPositionString,
        preview: <PopoverPositionPreview />,
    },
    {
        id: "popover-4",
        title: "Position 2",
        description: "Position popover with extended design",
        codeString: popoverPosition2String,
        preview: <PopoverPosition2Preview />,
    },
    {
        id: "popover-4",
        title: "Position 3",
        description: "Position popover with extended design",
        codeString: popoverPosition3String,
        preview: <PopoverPosition3Preview />,
    },
    {
        id: "popover-5",
        title: "Menu",
        description: "Menu popover with extended design",
        codeString: popoverMenuString,
        preview: <PopoverMenuPreview />,
    },
    {
        id: "popover-6",
        title: "Multi Layer",
        description: "Multi layer popover with extended design",
        codeString: popoverMultiLayerString,
        preview: <PopoverMultiLayerPreview />,
    },
    {
        id: "popover-7",
        title: "Expand Menu",
        description: "Expand popover with extended design",
        codeString: popoverExpandString,
        preview: <PopoverExpandPreview />,
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
