"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import {
    UploadSingleImagePreview,
    UploadAvatarPreview,
    UploadSimplePreview,
    UploadMultipleImagePreview,
    UploadSingleFileInputPreview
} from "../components/uploader";

const sections = [
    {
        id: "uploader-1",
        title: "Simple Image Upload",
        description:
            "Use Material UI uploader with extended design. No extra package required.",
        codeString: '',
        preview: <UploadSimplePreview />,
    },
    {
        id: "uploader-2",
        title: "Single Image Upload",
        description:
            "Use Material UI uploader with extended design. No extra package required.",
        codeString: '',
        preview: <UploadSingleImagePreview />,
    },
    {
        id: "uploader-3",
        title: "Multiple Image Upload",
        description:
            "Use Material UI uploader with extended design. No extra package required.",
        codeString: '',
        preview: <UploadMultipleImagePreview />,
    },
    {
        id: "uploader-4",
        title: "Avatar Upload",
        description:
            "Use Material UI uploader with extended design. No extra package required.",
        codeString: '',
        preview: <UploadAvatarPreview />,
    },
    {
        id: "uploader-5",
        title: "Single File Input Upload",
        description:
            "Use Material UI uploader with extended design. No extra package required.",
        codeString: '',
        preview: <UploadSingleFileInputPreview />,
    }
];

export const UploaderView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
                    { label: "Uploader", path: "" },
                ]}
            />
            <PageTitle
                title="Uploader"
                description="Material UI core uploader with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Uploader Section */}
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
