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
import {
    ProgressbarAllVariantPreview,
    ProgressbarDifferentHeightPreview,
    ProgressbarNoBorderRadiusPreview,
    ProgressbarWithLabelPreview,
    ProgressbarTitleLabelPreview,
    ProgressbarCustomPreview,
    ProgressbarCustomWithLabelPreview,
    ProgressbarFloatingLabelPreview,
    ProgressbarVerticalPreview,
    ProgressbarStepsPreview,
    ProgressbarCircularBasicPreview
} from "../components/progressbar";


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
    {
        id: "progressbar-3",
        title: "Without border radius",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarNoBorderRadiusPreview />,
    },
    {
        id: "progressbar-4",
        title: "With label",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarWithLabelPreview />,
    },
    {
        id: "progressbar-5",
        title: "With title & label",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarTitleLabelPreview />,
    },
    {
        id: "progressbar-6",
        title: "Custom",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarCustomPreview />,
    },
    {
        id: "progressbar-7",
        title: "Custom progressbar with label",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarCustomWithLabelPreview />,
    },
    {
        id: "progressbar-8",
        title: "Progressbar with floating label",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarFloatingLabelPreview />,
    },
    {
        id: "progressbar-9",
        title: "Progressbar vertical",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarVerticalPreview />,
    },
    {
        id: "progressbar-10",
        title: "Progressbar steps",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarStepsPreview />,
    },
    {
        id: "progressbar-11",
        title: "Progressbar circular basic",
        description:
            "A basic customizable progressbar component built with Material UI.",
        codeString: '',
        preview: <ProgressbarCircularBasicPreview />,
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
