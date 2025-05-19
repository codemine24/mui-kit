"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { drawerBasicString, drawerBackdropString } from "../code-string/drawer";
import { DrawerBasicPreview, DrawerBackdropPreview } from "../components/drawer";

const sections = [
    {
        id: "drawer-1",
        title: "Basic Drawer",
        description: "Basic drawer with custom mui icon",
        codeString: drawerBasicString,
        preview: <DrawerBasicPreview />,
    },
    {
        id: "drawer-2",
        title: "Backdrop Drawer",
        description: "Backdrop drawer with custom mui icon",
        codeString: drawerBackdropString,
        preview: <DrawerBackdropPreview />,
    },
    // {
    //     id: "drawer-2",
    //     title: "Full Width Drawer",
    //     description: "Full width drawer with custom mui icon",
    //     codeString: drawerFullWidthString,
    //     preview: <DrawerFullWidthPreview />,
    // },
];

export const DrawerView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: "/elements" },
                    { label: "Drawer", path: "" },
                ]}
            />
            <PageTitle
                title="Drawer"
                description="Material UI core drawer with extended design, and functionality. "
            />

            <Divider sx={{ my: 4 }} />

            {/* Drawer - 1 */}
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
