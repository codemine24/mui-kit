"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { AppBarBasicPreview } from "../components/app-bar/app-bar-basic-preview";

const sections = [
  {
    id: "app-bar-1",
    title: "Basic App bar",
    description: "Most basic app bar with logo, navigation and simple button.",
    codeString: "",
    preview: <AppBarBasicPreview />,
  },
];

export const AppBarView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "App bar", path: "" },
        ]}
      />
      <PageTitle
        title="App bar"
        description="App bar or header navigation is one of the most commonly used section in website. All these app bar designed with purely material ui and nothing else. "
      />

      <Divider sx={{ my: 4 }} />
      {/* Carousel Section */}
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
