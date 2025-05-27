"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";

import { StepperStaticPreview, StepperResponsivePreview } from "../components/stepper";
import { stepperStaticString, stepperResponsiveString } from "../code-string/stepper";

const sections = [
    {
        id: "stepper-1",
        title: "Static Stepper",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperStaticString,
        preview: <StepperStaticPreview />,
    },
    {
        id: "stepper-2",
        title: "Responsive Stepper",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperResponsiveString,
        preview: <StepperResponsivePreview />,
    },
];

export const StepperView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={
                    [
                        { label: "Elements", path: "/elements" },
                        { label: "Stepper", path: "" },
                    ]}
            />
            <PageTitle
                title="Stepper"
                description="Material UI core stepper with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Stepper Section */}
            {
                sections.map((section) => (
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
