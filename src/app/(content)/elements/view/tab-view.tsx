"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import Tab1Preview from "../components/tab/Tab-1-preview";
import Tab2Preview from "../components/tab/Tab-2-preview";
import Tab3Preview from "../components/tab/Tab-3-preview";
import Tab4Preview from "../components/tab/Tab-4-preview";
import Tab5Preview from "../components/tab/Tab-5-preview";

const sections = [
  {
    id: "tab-1",
    title: "",
    description: "",
    codeString: "",
    preview: <Tab1Preview />,
  },
  {
    id: "tab-2",
    title: "",
    description: "",
    codeString: "",
    preview: <Tab2Preview />,
  },
  {
    id: "tab-3",
    title: "",
    description: "",
    codeString: "",
    preview: <Tab3Preview />,
  },
  {
    id: "tab-4",
    title: "",
    description: "",
    codeString: "",
    preview: <Tab4Preview />,
  },
  {
    id: "tab-5",
    title: "Scrollable",
    description: "",
    codeString: "",
    preview: <Tab5Preview />,
  },
];

export const TabView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Accordion", path: "" },
        ]}
      />
      <PageTitle
        title="Accordion"
        description="Use material ui accordion with different styles to show your FAQ's and other info."
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
