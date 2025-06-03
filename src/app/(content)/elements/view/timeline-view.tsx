"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";

import { PATHS } from "@/router/paths";
import {
  timelineActionButtonString,
  timelineAvaterString,
  timelineChangeLogString,
  timelineClassicString,
  timelineCompanyMilestoneString,
  timelineCustomIconString,
  timelineHorizontalString,
  timelineOneSidedString,
  timelineProjectsString,
  timelineSocialString,
  timelineTouristSpotString,
  timelineWithDateString,
} from "../code-string/timeline";
import {
  TimelineActionButtonPreview,
  TimelineAvaterPreview,
  TimelineChangeLogPreview,
  TimelineClassicPreview,
  TimelineCompanyMilestonePreview,
  TimelineCustomIconPreview,
  TimelineHorizontalPreview,
  TimelineOneSidedPreview,
  TimelineProjectsPreview,
  TimelineSocialPreview,
  TimelineTouristSpotPreview,
  TimelineWithDatePreview,
} from "../components/timeline";

const sections = [
  {
    id: "timeline-1",
    title: "Classic",
    description:
      "More simple timeline with slick design and basic functionality.",
    codeString: timelineClassicString,
    preview: <TimelineClassicPreview />,
  },
  {
    id: "timeline-2",
    title: "With Date",
    description: "Timeline with date along with title and description.",
    codeString: timelineWithDateString,
    preview: <TimelineWithDatePreview />,
  },
  {
    id: "timeline-3",
    title: "One Sided",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineOneSidedString,
    preview: <TimelineOneSidedPreview />,
  },
  {
    id: "timeline-4",
    title: "Custom Icon",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineCustomIconString,
    preview: <TimelineCustomIconPreview />,
  },
  {
    id: "timeline-5",
    title: "Avatar",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineAvaterString,
    preview: <TimelineAvaterPreview />,
  },
  {
    id: "timeline-6",
    title: "Horizontal",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineHorizontalString,
    preview: <TimelineHorizontalPreview />,
  },
  {
    id: "timeline-7",
    title: "Action Button",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineActionButtonString,
    preview: <TimelineActionButtonPreview />,
  },
  {
    id: "timeline-8",
    title: "Projects",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineProjectsString,
    preview: <TimelineProjectsPreview />,
  },
  {
    id: "timeline-9",
    title: "Change Log",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineChangeLogString,
    preview: <TimelineChangeLogPreview />,
  },
  {
    id: "timeline-10",
    title: "Company Milestone",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineCompanyMilestoneString,
    preview: <TimelineCompanyMilestonePreview />,
  },
  {
    id: "timeline-11",
    title: "Tourist Spot",
    description:
      "Material UI core timeline with extended design, and functionality.",
    codeString: timelineTouristSpotString,
    preview: <TimelineTouristSpotPreview />,
  },
  {
    id: "timeline-12",
    title: "Social",
    description:
      "Material UI core timeline with extended design, and functionality.",
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
