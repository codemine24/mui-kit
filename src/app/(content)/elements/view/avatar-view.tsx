"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import ShapeVariants from "../components/avatar/shape-variants";
import IconVariants from "../components/avatar/icon-variants";
import LetterVariants from "../components/avatar/letter-variants";
import StatusVariants from "../components/avatar/status-variants";
import { ShapeVariantsCodeString } from "../code-string/avatar/shape-variants";
import { IconVariantsCodeString } from "../code-string/avatar/icon-variants";
import { LetterVariantsCodeString } from "../code-string/avatar/letter-variants";
import { StatusVariantsCodeString } from "../code-string/avatar/status-variants";
import GroupVariants from "../components/avatar/group-variants";
import { GroupVariantsCodeString } from "../code-string/avatar/group-variants";
import SizeVariants from "../components/avatar/size-variants";

const sections = [
  {
    id: "avatar-1",
    title: "Different Shape",
    description: "This variants contain avatars with different shapes.",
    codeString: ShapeVariantsCodeString,
    preview: <ShapeVariants />,
  },
  {
    id: "avatar-2",
    title: "Different Size",
    description: "Avatars with different sizes.",
    codeString: ShapeVariantsCodeString,
    preview: <SizeVariants />,
  },
  {
    id: "avatar-3",
    title: "Icon Avatars",
    description:
      "If your project requires avatars with no image, you can use icon instead. ",
    codeString: IconVariantsCodeString,
    preview: <IconVariants />,
  },
  {
    id: "avatar-4",
    title: "Letter Avatars",
    description: "Letter avatars designed with material ui only. ",
    codeString: LetterVariantsCodeString,
    preview: <LetterVariants />,
  },
  {
    id: "avatar-5",
    title: "Active Status",
    description:
      "If you need active status with the avatar, you can use this variant.",
    codeString: StatusVariantsCodeString,
    preview: <StatusVariants />,
  },
  {
    id: "avatar-6",
    title: "Avatar Group",
    description:
      "If you need more than one one, you can go with Material ui avatar group.",
    codeString: GroupVariantsCodeString,
    preview: <GroupVariants />,
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
