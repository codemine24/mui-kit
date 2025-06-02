"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";

import {
    timelineSimpleString,
    timelineWithDateString,
    timelineOneSidedString,
    timelineCustomIconString,
    timelineAvaterString,
    timelineHorizontalString,
    timelineActionButtonString,
    timelineProjectsString,
    timelineChangeLogString,
    timelineCompanyMilestoneString,
    timelineTouristSpotString,
    timelineSocialString,
} from "../code-string/timeline";
import {
    TimelineSimplePreview,
    TimelineWithDatePreview,
    TimelineOneSidedPreview,
    TimelineCustomIconPreview,
    TimelineAvaterPreview,
    TimelineHorizontalPreview,
    TimelineActionButtonPreview,
    TimelineProjectsPreview,
    TimelineChangeLogPreview,
    TimelineCompanyMilestonePreview,
    TimelineTouristSpotPreview,
    TimelineSocialPreview,
} from "../components/timeline";
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
    {
        id: "timeline-one-sided",
        title: "One Sided",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineOneSidedString,
        preview: <TimelineOneSidedPreview />,
    },
    {
        id: "timeline-custom-icon",
        title: "Custom Icon",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineCustomIconString,
        preview: <TimelineCustomIconPreview />,
    },
    {
        id: "timeline-avater",
        title: "Avater",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineAvaterString,
        preview: <TimelineAvaterPreview />,
    },
    {
        id: "timeline-horizontal",
        title: "Horizontal",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineHorizontalString,
        preview: <TimelineHorizontalPreview />,
    },
    {
        id: "timeline-action-button",
        title: "Action Button",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineActionButtonString,
        preview: <TimelineActionButtonPreview />,
    },
    {
        id: "timeline-projects",
        title: "Projects",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineProjectsString,
        preview: <TimelineProjectsPreview />,
    },
    {
        id: "timeline-change-log",
        title: "Change Log",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineChangeLogString,
        preview: <TimelineChangeLogPreview />,
    },
    {
        id: "timeline-company-milestone",
        title: "Company Milestone",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineCompanyMilestoneString,
        preview: <TimelineCompanyMilestonePreview />,
    },
    {
        id: "timeline-tourist-spot",
        title: "Tourist Spot",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineTouristSpotString,
        preview: <TimelineTouristSpotPreview />,
    },
    {
        id: "timeline-social",
        title: "Social",
        description: "Material UI core timeline with extended design, and functionality.",
        codeString: timelineSocialString,
        preview: <TimelineSocialPreview />,
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
