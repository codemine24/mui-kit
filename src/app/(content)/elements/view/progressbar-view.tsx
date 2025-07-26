"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import { ProgressbarAllVariantPreview, ProgressbarDifferentHeightPreview } from "../components/progressbar";


const sections = [
    {
        id: "progressbar-1",
        title: "Basic MUI Progressbar",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarAllVariantPreview />,
    },
    {
        id: "progressbar-2",
        title: "Different height",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarDifferentHeightPreview />,
    },
];

export const ProgressbarView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: PATHS.ELEMENTS.PROGRESSBAR },
                    { label: "Progressbar", path: "" },
                ]}
            />
            <PageTitle
                title="Progressbar"
                description="Material UI provides a base progressbar component, but we’ve extended it with multiple advanced use-cases like emoji labels, text feedback, precision control, animated interactions, and icon customizations."
            />

            <Divider sx={{ my: 4 }} />

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
