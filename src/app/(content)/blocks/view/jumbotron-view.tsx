"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { jumbotronBasicString } from "../code-string/jumbotron/jumbotron-basic-string";
import { jumbotronTwoString } from "../code-string/jumbotron/jumbotron-two-string";
import { JumbotronBasicPreview } from "../components/jumbotron/jumbotron-basic-preview";
import { JumbotronImageBgPreview } from "../components/jumbotron/jumbotron-image-bg-preview";
import { JumbotronInputPreview } from "../components/jumbotron/jumbotron-input-preview";
import { JumbotronTwoPreview } from "../components/jumbotron/jumbotron-two-preview";

const sections = [
  {
    id: "jumbotron-1",
    title: "Basic Jumbotron",
    description:
      "Use this center aligned to show minimal marketing content with action buttons. ",
    codeString: jumbotronBasicString,
    preview: <JumbotronBasicPreview />,
  },
  {
    id: "jumbotron-2",
    title: "Left aligned Jumbotron",
    description:
      "Use this simple left aligned jumbotron build with material ui only.",
    codeString: jumbotronTwoString,
    preview: <JumbotronTwoPreview />,
  },
  {
    id: "jumbotron-3",
    title: "Jumbotron with background image",
    description: "use this jumbotron section if you need background image. ",
    codeString: jumbotronBasicString,
    preview: <JumbotronImageBgPreview />,
  },
  {
    id: "jumbotron-4",
    title: "With input field",
    description:
      "Material Ui jumbotron with an input field to collect user info if needed",
    codeString: jumbotronBasicString,
    preview: <JumbotronInputPreview />,
  },
];

export const JumbotronView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Jumbotron", path: "" },
        ]}
      />
      <PageTitle
        title="Jumbotron"
        description="Use Jumbotron section to show marketing message to your users based on a headline and image inside of a card box based on Material Ui"
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
