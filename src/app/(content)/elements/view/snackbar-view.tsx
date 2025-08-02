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
    SnackbarBasicPreview,
    SnackbarSimpleMessagePreview,
    SnackbarUndoButtonPreview,
    SnackbarNotificationPreview,
    SnackbarInteractivePreview,
} from "../components/snackbar";

const sections = [
    {
        id: "snackbar-1",
        title: "Basic MUI snackbar",
        description:
            "Basic customizable snackbar component built with material ui.",
        codeString: "",
        preview: <SnackbarBasicPreview />,
    },
    {
        id: "snackbar-2",
        title: "Simple message snackbar",
        description:
            "Simple message snackbar component built with material ui.",
        codeString: "",
        preview: <SnackbarSimpleMessagePreview />,
    },
    {
        id: "snackbar-3",
        title: "Undo button snackbar",
        description:
            "Undo button snackbar component built with material ui.",
        codeString: "",
        preview: <SnackbarUndoButtonPreview />,
    },
    {
        id: "snackbar-4",
        title: "Notification snackbar",
        description:
            "Notification snackbar component built with material ui.",
        codeString: "",
        preview: <SnackbarNotificationPreview />,
    },
    {
        id: "snackbar-5",
        title: "Interactive snackbar",
        description:
            "Interactive snackbar component built with material ui.",
        codeString: "",
        preview: <SnackbarInteractivePreview />,
    },
];

export const SnackbarView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
                    { label: "Snackbar", path: "" },
                ]}
            />
            <PageTitle
                title="Snackbar"
                description="Snackbar is one of the most commonly used for any website. All these snackbar designed with purely material ui and fully customizable. "
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
