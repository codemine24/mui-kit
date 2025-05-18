"use client";

import React from "react";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";

import { DialogSizesPreview, DialogStaticPreview } from "../components/dialog";
import { dialogSizesString, dialogStaticString } from "../code-string/dialog";

const sections = [
    {
        id: "dialog-sizes",
        title: "Sizes",
        description: "Native material ui dialog with solid background",
        codeString: dialogSizesString,
        preview: <DialogSizesPreview />,
    },
    {
        id: "dialog-static",
        title: "Static",
        description: "Native material ui dialog with solid background",
        codeString: dialogStaticString,
        preview: <DialogStaticPreview />,
    },
]


export const DialogView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections);
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: "/elements" },
                    { label: "Dialog", path: "" },
                ]}
            />
            <PageTitle
                title="Dialog"
                description="Material UI core dialog with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Dialog - 1 */}
            {sections.map((section) => (
                <Box key={section.id} sx={{ mb: 4 }}>
                    {" "}
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