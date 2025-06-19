"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { SortableGridPreview } from "../components/dnd/preview/sortable-grid-preview";
import { SortableGridDragOverlayPreview } from "../components/dnd/preview/sortable-grid-drag-overlay-preview";

const sections = [
    {
        id: "dnd-1",
        title: "Sortable Grid",
        description:
            "A simple sortable grid design with dummy content. You can replace the content with almost anything.",
        codeString: "",
        preview: <SortableGridPreview />,
    },
    {
        id: "dnd-2",
        title: "Sortable Grid Drag Overlay",
        description:
            "A simple sortable grid design with dummy content. You can replace the content with almost anything.",
        codeString: "",
        preview: <SortableGridDragOverlayPreview />,
    },
];

export const DndView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
                    { label: "Drag and Drop", path: "" },
                ]}
            />
            <PageTitle
                title="Drag and Drop"
                description="Material UI core drag and drop with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Drag and Drop Section */}
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
