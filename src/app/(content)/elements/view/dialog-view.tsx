"use client";

import React from "react";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";

import {
    DialogCustomBackdropPreview,
    DialogPlacementPreview,
    DialogSizesPreview,
    DialogStaticPreview,
    DialogConfirmation1Preview,
    DialogConfirmation2Preview,
    DialogMultiStepPreview,
    DialogScrollablePreview,
    DialogFullScreenPreview,
    DialogAnimationPreview,
    DialogHeaderFooterPreview,
    DialogImageViewPreview,
} from "../components/dialog";
import {
    dialogCustomBackdropString,
    dialogPlacementString,
    dialogSizesString,
    dialogStaticString,
    dialogConfirmation1String,
    dialogConfirmation2String,
    dialogMultiStepString,
    dialogScrollableString,
    dialogFullScreenString,
    dialogAnimationString,
    dialogHeaderFooterString,
    dialogImageViewPreviewString,
} from "../code-string/dialog";

const sections = [
    {
        id: "dialog-sizes",
        title: "Sizes",
        description: "Native material ui dialog with solid background",
        codeString: dialogSizesString,
        preview: <DialogSizesPreview />,
    },
    {
        id: "dialog-placement",
        title: "Placement",
        description: "Native material ui dialog with solid background",
        codeString: dialogPlacementString,
        preview: <DialogPlacementPreview />,
    },
    {
        id: "dialog-static",
        title: "Static",
        description: "Native material ui dialog with solid background",
        codeString: dialogStaticString,
        preview: <DialogStaticPreview />,
    },
    {
        id: "dialog-custom-backdrop",
        title: "Custom Backdrop",
        description: "Native material ui dialog with solid background",
        codeString: dialogCustomBackdropString,
        preview: <DialogCustomBackdropPreview />,
    },
    {
        id: "dialog-confirmation",
        title: "Confirmation",
        description: "Native material ui dialog with solid background",
        codeString: dialogConfirmation1String,
        preview: <DialogConfirmation1Preview />,
    },
    {
        id: "dialog-confirmation-2",
        title: "Confirmation 2",
        description: "Native material ui dialog with solid background",
        codeString: dialogConfirmation2String,
        preview: <DialogConfirmation2Preview />,
    },
    {
        id: "dialog-multi-step",
        title: "Multi Step",
        description: "Native material ui dialog with solid background",
        codeString: dialogMultiStepString,
        preview: <DialogMultiStepPreview />,
    },
    {
        id: "dialog-scrollable",
        title: "Scrollable",
        description: "Native material ui dialog with solid background",
        codeString: dialogScrollableString,
        preview: <DialogScrollablePreview />,
    },
    {
        id: "dialog-full-screen",
        title: "Full Screen",
        description: "Native material ui dialog with solid background",
        codeString: dialogFullScreenString,
        preview: <DialogFullScreenPreview />,
    },
    {
        id: "dialog-animation",
        title: "Animation",
        description: "Native material ui dialog with solid background",
        codeString: dialogAnimationString,
        preview: <DialogAnimationPreview />,
    },
    {
        id: "dialog-header-footer",
        title: "Header Footer",
        description: "Native material ui dialog with solid background",
        codeString: dialogHeaderFooterString,
        preview: <DialogHeaderFooterPreview />,
    },
    {
        id: "dialog-image-view",
        title: "Image View",
        description: "Native material ui dialog with solid background",
        codeString: dialogImageViewPreviewString,
        preview: <DialogImageViewPreview />,
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