"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";

import {
    StepperStaticPreview,
    StepperResponsivePreview,
    StepperLinerPreview,
    StepperDotPreview,
    StepperWithoutLabelPreview,
    StepperDynamicPreview,
    StepperClickablePreview,
    StepperSkippedPreview,
    StepperArrowPreview,
} from "../components/stepper";

import {
    stepperStaticString,
    stepperResponsiveString,
    stepperLinerString,
    stepperDotString,
    stepperWithoutLabelString,
    stepperDynamicString,
    stepperClickableString,
    stepperSkippedString,
    stepperArrowString,
} from "../code-string/stepper";

const sections = [
    {
        id: "stepper-1",
        title: "Static",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperStaticString,
        preview: <StepperStaticPreview />,
    },
    {
        id: "stepper-2",
        title: "Responsive",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperResponsiveString,
        preview: <StepperResponsivePreview />,
    },
    {
        id: "stepper-3",
        title: "Liner",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperLinerString,
        preview: <StepperLinerPreview />,
    },
    {
        id: "stepper-4",
        title: "Dot",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperDotString,
        preview: <StepperDotPreview />,
    },
    {
        id: "stepper-5",
        title: "Without Label",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperWithoutLabelString,
        preview: <StepperWithoutLabelPreview />,
    },
    {
        id: "stepper-6",
        title: "Dynamic",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperDynamicString,
        preview: <StepperDynamicPreview />,
    },
    {
        id: "stepper-7",
        title: "Clickable",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperClickableString,
        preview: <StepperClickablePreview />,
    },
    {
        id: "stepper-8",
        title: "Skipped",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperSkippedString,
        preview: <StepperSkippedPreview />,
    },
    {
        id: "stepper-9",
        title: "Arrow",
        description:
            "Use this simple stepper that will adjust with most of the website layout. No extra package required.",
        codeString: stepperArrowString,
        preview: <StepperArrowPreview />,
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
