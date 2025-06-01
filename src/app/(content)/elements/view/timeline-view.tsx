"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";

import { timelineSimpleString, timelineWithDateString } from "../code-string/timeline";
import { TimelineSimplePreview, TimelineWithDatePreview } from "../components/timeline";
import { PATHS } from "@/router/paths";

const sections = [
    {
        id: "timeline-simple",
        title: "Simple",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineSimpleString,
        preview: <TimelineSimplePreview />,
    },
    {
        id: "timeline-with-date",
        title: "With Date",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineWithDateString,
        preview: <TimelineWithDatePreview />,
    },
];

export const TimelineView = () => {
    const { setSections } = useOnThisPage();

    React.useEffect(() => {
        setSections(sections.map((s) => ({ title: s.title, id: s.id })));
    }, [setSections]);

    return (
        <Box>
            <CustomBreadCrumbs
                pathArr={[
                    { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
                    { label: "Timeline", path: "" },
                ]}
            />
            <PageTitle
                title="Timeline"
                description="Material UI core timeline with extended design, and functionality."
            />

            <Divider sx={{ my: 4 }} />

            {/* Timeline Sections */}
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
