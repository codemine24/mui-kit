"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";

import { ExternalPackageAlert } from "@/components/external-package-alert";
import { PATHS } from "@/router/paths";
import {
  timelineActionButtonString,
  timelineAvatarString,
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
import { timelineHorizontalCenterString } from "../code-string/timeline/timeline-horizontal-center-string";
import {
  TimelineActionButtonPreview,
  TimelineAvatarPreview,
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
import { TimelineHorizontalCenterPreview } from "../components/timeline/timeline-horizontal-center-preview";

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
    title: "With date",
    description: "Timeline with date along with title and description.",
    codeString: timelineWithDateString,
    preview: <TimelineWithDatePreview />,
  },
  {
    id: "timeline-3",
    title: "Date in one side",
    description:
      "Timeline with date but in one side along with title and description.",
    codeString: timelineOneSidedString,
    preview: <TimelineOneSidedPreview />,
  },
  {
    id: "timeline-4",
    title: "Custom icon",
    description: "You can add custom icon in timeline. ",
    codeString: timelineCustomIconString,
    preview: <TimelineCustomIconPreview />,
  },
  {
    id: "timeline-5",
    title: "Avatar",
    description: "Instead of icon you can add avatar in timeline.",
    codeString: timelineAvatarString,
    preview: <TimelineAvatarPreview />,
  },
  {
    id: "timeline-6",
    title: "Horizontal timeline",
    description:
      "Horizontal timeline if you want to show timeline in horizontal layout. Completely designed with material ui and nothing else.",
    codeString: timelineHorizontalString,
    preview: <TimelineHorizontalPreview />,
  },
  {
    id: "timeline-7",
    title: "Horizontal centred timeline",
    description: "Horizontal content in center timeline.",
    codeString: timelineHorizontalCenterString,
    preview: <TimelineHorizontalCenterPreview />,
  },
  {
    id: "timeline-8",
    title: "Action button",
    description:
      "Timeline with actionable buttons. Add custom url in action button. ",
    codeString: timelineActionButtonString,
    preview: <TimelineActionButtonPreview />,
  },
  {
    id: "timeline-9",
    title: "Projects",
    description:
      "Simple project timeline with custom icons and background color. ",
    codeString: timelineProjectsString,
    preview: <TimelineProjectsPreview />,
  },
  {
    id: "timeline-10",
    title: "Change log",
    description:
      "Change log time to display your application changes over the time. ",
    codeString: timelineChangeLogString,
    preview: <TimelineChangeLogPreview />,
  },
  {
    id: "timeline-11",
    title: " Milestone",
    description:
      "Milestone timeline perfect for showing the accomplishment over the time.",
    codeString: timelineCompanyMilestoneString,
    preview: <TimelineCompanyMilestonePreview />,
  },
  {
    id: "timeline-12",
    title: "Tourist spot",
    description:
      "Another ready to use material ui timeline. You can customize and use it for multiple purposes.",
    codeString: timelineTouristSpotString,
    preview: <TimelineTouristSpotPreview />,
  },
  {
    id: "timeline-13",
    title: "Social",
    description:
      "Ready to use mui timeline. You can customize and use it for multiple purposes.",
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
      <ExternalPackageAlert
        packages={[
          {
            name: "@iconify/react",
            url: "https://www.npmjs.com/package/@iconify/react",
          },
        ]}
      />
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
