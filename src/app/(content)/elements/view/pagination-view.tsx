"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { paginationOutlinedString, paginationSolidString } from "../code-string/pagination";
import { PaginationOutlinedPreview, PaginationSolidPreview } from "../components/pagination";
const sections = [
    {
        id: "pagination-solid",
        title: "Solid",
        description: "Material UI core pagination with extended design, and functionality.",
        codeString: paginationSolidString,
        preview: <PaginationSolidPreview />,
    },
    {
        id: "pagination-outlined",
        title: "Outlined",
        description: "Material UI core pagination with extended design, and functionality.",
        codeString: paginationOutlinedString,
        preview: <PaginationOutlinedPreview />,
    }
];

export const PaginationView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: "/elements" },
                    { label: "Pagination", path: "" },
                ]}
            />
            <PageTitle
                title="Pagination"
                description="Material UI core pagination with extended design, and functionality."
            />

            <Divider sx={{ my: 4 }} />

            {/* Pagination Sections */}
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
