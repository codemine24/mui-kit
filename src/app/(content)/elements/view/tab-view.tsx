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
import { tabBadgeString } from "../code-string/tab/tab-badge-string";
import { tabBasicString } from "../code-string/tab/tab-basic-string";
import { tabButtonIconString } from "../code-string/tab/tab-button-icon-string";
import { tabButtonString } from "../code-string/tab/tab-button-string";
import { tabCapsuleString } from "../code-string/tab/tab-capsule-string";
import { tabCustomColoredString } from "../code-string/tab/tab-custom-colored-string";
import { tabIconString } from "../code-string/tab/tab-icon-string";
import { tabScrollableIconString } from "../code-string/tab/tab-scrollable-icon-string";
import { TabScrollableString } from "../code-string/tab/tab-scrollable-string";
import { tabVerticalString } from "../code-string/tab/tab-vertical-string";
import { tabWrappedString } from "../code-string/tab/tab-wrapped-string";
import { TabBadgePreview } from "../components/tab/tab-badge-preview";
import TabBasicPreview from "../components/tab/tab-basic-preview";
import { TabButtonIconPreview } from "../components/tab/tab-button-icon-preview";
import { TabButtonPreview } from "../components/tab/tab-button-preview";
import { TabCapsulePreview } from "../components/tab/tab-capsule-preview";
import { TabCustomColoredPreview } from "../components/tab/tab-custom-colored-preview";
import { TabIconPreview } from "../components/tab/tab-icon-preview";
import { TabScrollableIconPreview } from "../components/tab/tab-scrollable-icon-preview";
import { TabScrollablePreview } from "../components/tab/tab-scrollable-preview";
import { TabVerticalPreview } from "../components/tab/tab-vertical-preview";
import { TabWrappedPreview } from "../components/tab/tabs-wrapped-preview";

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
    title: "Custom badge",
    description:
      "This variant has badge along with each tab. You can customize the badge style.",
    codeString: tabBadgeString,
    preview: <TabBadgePreview />,
  },
  {
    id: "tab-6",
    title: "Scrollable tab icons",
    description: "This scrollable variant has icon along with each tab.",
    codeString: tabScrollableIconString,
    preview: <TabScrollableIconPreview />,
  },
  {
    id: "tab-7",
    title: "Custom colored",
    description: "This variant has fully customizable tab color. ",
    codeString: tabCustomColoredString,
    preview: <TabCustomColoredPreview />,
  },
  {
    id: "tab-8",
    title: "Tab button variant",
    description: "Basic tab variant with custom icon.",
    codeString: tabButtonString,
    preview: <TabButtonPreview />,
  },
  {
    id: "tab-9",
    title: "Button with icon",
    description: "This variant has icon along with each tab.",
    codeString: tabButtonIconString,
    preview: <TabButtonIconPreview />,
  },
  {
    id: "tab-10",
    title: "Capsule tabs",
    description: "Instead of boring text, you can use capsule tabs.",
    codeString: tabCapsuleString,
    preview: <TabCapsulePreview />,
  },
  {
    id: "tab-11",
    title: "Vertical tabs",
    description:
      "Vertical tab variant designed using raw material ui and nothing else. ",
    codeString: tabVerticalString,
    preview: <TabVerticalPreview />,
  },
  // {
  //   id: "tab-12",
  //   title: "Vertical tabs with icon",
  //   description: "",
  //   codeString: "",
  //   preview: <Tab12Preview />,
  // },
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
