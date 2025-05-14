"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { avatarGroupString } from "../code-string/avatar/avatar-group-string";
import { avatarIconString } from "../code-string/avatar/avatar-icon-string";
import { avatarLetterString } from "../code-string/avatar/avatar-letter-string";
import { avatarSizeString } from "../code-string/avatar/avatar-size-string";
import { avatarStatusString } from "../code-string/avatar/avatar-status-string";
import { avatarShapeString } from "../code-string/avatar/avatart-shape-string";
import AvatarGroupPreview from "../components/avatar/avatar-group-preview";
import AvatarIconPreview from "../components/avatar/avatar-icon-preview";
import AvatarLetterPreview from "../components/avatar/avatar-letter-preview";
import AvatarShapePreview from "../components/avatar/avatar-shape-preview";
import AvatarSizePreview from "../components/avatar/avatar-size-preview";
import AvatarStatusPreview from "../components/avatar/avatar-status-preview";

const sections = [
  {
    id: "avatar-1",
    title: "Different Shape",
    description: "This variants contain avatars with different shapes.",
    codeString: avatarShapeString,
    preview: <AvatarShapePreview />,
  },
  {
    id: "avatar-2",
    title: "Different Size",
    description: "Avatars with different sizes.",
    codeString: avatarSizeString,
    preview: <AvatarSizePreview />,
  },
  {
    id: "avatar-3",
    title: "Icon Avatars",
    description:
      "If your project requires avatars with no image, you can use icon instead. ",
    codeString: avatarIconString,
    preview: <AvatarIconPreview />,
  },
  {
    id: "avatar-4",
    title: "Letter Avatars",
    description: "Letter avatars designed with material ui only. ",
    codeString: avatarLetterString,
    preview: <AvatarLetterPreview />,
  },
  {
    id: "avatar-5",
    title: "Active Status",
    description:
      "If you need active status with the avatar, you can use this variant.",
    codeString: avatarStatusString,
    preview: <AvatarStatusPreview />,
  },
  {
    id: "avatar-6",
    title: "Avatar Group",
    description:
      "If you need more than one one, you can go with Material ui avatar group.",
    codeString: avatarGroupString,
    preview: <AvatarGroupPreview />,
  },
];

export const AvatarView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Avatar", path: "" },
        ]}
      />
      <PageTitle
        title="Avatar"
        description="Material UI core avatar with extended design, and functionality."
      />

      <Divider sx={{ my: 4 }} />

      {/* Avatar Sections */}
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
