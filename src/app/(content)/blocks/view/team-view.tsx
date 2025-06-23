"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { TeamCirclePreview } from "../components/team/team-circle-preview";
import { TeamCardPreview } from "../components/team/team-card-preview";
import { TeamPolaroidPreview } from "../components/team/team-polaroid-preview";
import { TeamOrganicPreview } from "../components/team/team-organic-preview";
import { teamCardString } from "../code-string/team/team-card-string";
import { teamCircleString } from "../code-string/team/team-circle-string";
import { teamPolaroidString } from "../code-string/team/team-polaroid.string";
import { teamOrganicString } from "../code-string/team/team-organic-string";

const sections = [
  {
    id: "team-card",
    title: "Team Card",
    description:
      "A clean and professional team section with card-based layout, featuring team member photos, roles, bios, and social contact information with hover effects.",
    codeString: teamCardString,
    preview: <TeamCardPreview />,
  },
  {
    id: "team-circle",
    title: "Team Circle",
    description:
      "An innovative circular team layout with a central leader surrounded by team members in a connected, visually engaging arrangement with interactive hover effects.",
    codeString: teamCircleString,
    preview: <TeamCirclePreview />,
  },
  {
    id: "team-polaroid",
    title: "Team Polaroid",
    description:
      "A nostalgic polaroid-style team section with vintage aesthetics, featuring tilted photo frames, handwritten typography, and tape effects for a unique presentation.",
    codeString: teamPolaroidString,
    preview: <TeamPolaroidPreview />,
  },
  {
    id: "team-organic",
    title: "Team Organic",
    description:
      "A modern organic team layout with fluid shapes, gradient backgrounds, and smooth animations that create a natural, flowing presentation of team members.",
    codeString: teamOrganicString,
    preview: <TeamOrganicPreview />,
  },
];

export const TeamView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Team", path: "" },
        ]}
      />
      <PageTitle
        title="Team"
        description="Explore a collection of modern team sections to showcase your team."
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
