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
import { tabBasicString } from "../code-string/tab/tab-basic-string";
import { TabScrollableString } from "../code-string/tab/tab-scrollable-string";
import { tabWrappedString } from "../code-string/tab/tab-wrapped-string";
import { Tab1Preview } from "../components/tab/Tab-1-preview";
import { Tab10Preview } from "../components/tab/Tab-10-preview";
import { Tab11Preview } from "../components/tab/Tab-11-preview";
import { Tab12Preview } from "../components/tab/Tab-12-preview";
import Tab6Preview from "../components/tab/Tab-6-preview";
import Tab7Preview from "../components/tab/Tab-7-preview";
import { Tab8Preview } from "../components/tab/Tab-8-preview";
import { Tab9Preview } from "../components/tab/Tab-9-preview";
import TabBasicPreview from "../components/tab/tab-basic-preview";
import { TabIconPreview } from "../components/tab/tab-icon-preview";
import { TabScrollablePreview } from "../components/tab/tab-scrollable-preview";
import { TabWrappedPreview } from "../components/tab/tabs-wrapped-preview";
import { tabIconString } from "../code-string/tab/tab-icon-string";

const sections = [
  {
    id: "tab-1",
    title: "Basic Tabs",
    description: "You can use this basic tabs build with material ui.",
    codeString: tabBasicString,
    preview: <TabBasicPreview />,
  },
  {
    id: "tab-2",
    title: "Wrapped tabs",
    description: "Long labels will automatically wrap on tabs. ",
    codeString: tabWrappedString,
    preview: <TabWrappedPreview />,
  },
  {
    id: "tab-3",
    title: "Scrollable",
    description:
      "Based on width and total number of tabs, tabs will be scrollable automatically.",
    codeString: TabScrollableString,
    preview: <TabScrollablePreview />,
  },
  {
    id: "tab-4",
    title: "With icons",
    description: "This variant has icon along with each tab. ",
    codeString: tabIconString,
    preview: <TabIconPreview />,
  },
  {
    id: "tab-5",
    title: "",
    description: "",
    codeString: "",
    preview: <Tab1Preview />,
  },

  {
    id: "tab-6",
    title: "Custom badge",
    description: "",
    codeString: "",
    preview: <Tab6Preview />,
  },
  {
    id: "tab-7",
    title: "Scrollable",
    description: "",
    codeString: "",
    preview: <Tab7Preview />,
  },
  {
    id: "tab-8",
    title: "Custom colored",
    description: "",
    codeString: "",
    preview: <Tab8Preview />,
  },
  {
    id: "tab-9",
    title: "Tab with icon",
    description: "",
    codeString: "",
    preview: <Tab9Preview />,
  },
  {
    id: "tab-10",
    title: "Capsule tabs",
    description: "",
    codeString: "",
    preview: <Tab10Preview />,
  },
  {
    id: "tab-11",
    title: "Capsule tabs",
    description: "",
    codeString: "",
    preview: <Tab11Preview />,
  },
  {
    id: "tab-12",
    title: "Capsule tabs",
    description: "",
    codeString: "",
    preview: <Tab12Preview />,
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
          { label: "Tabs", path: "" },
        ]}
      />
      <PageTitle
        title="Tabs"
        description="Material UI core tabs with extended design, and functionality."
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
