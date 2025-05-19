"use client";

import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import {
  drawerBasicString,
  drawerBackdropString,
  drawerShoppingCartString,
  drawerFiltersPanelString,
  drawerNotificationsString,
  drawerCustomWidthString,
  drawerFullWidthString,
} from "../code-string/drawer";

import {
  DrawerBasicPreview,
  DrawerBackdropPreview,
  DrawerShoppingCartPreview,
  DrawerFiltersPanelPreview,
  DrawerNotificationsPreview,
  DrawerCustomWidthPreview,
  DrawerFullWidthPreview,
} from "../components/drawer";

const sections = [
  {
    id: "drawer-1",
    title: "Basic drawer",
    description: "Default mui drawers with custom mui icon.",
    codeString: drawerBasicString,
    preview: <DrawerBasicPreview />,
  },
  {
    id: "drawer-2",
    title: "Custom Width",
    description:
      "You can change the drawer with by pixel value or percentage. Use this variant if you need a custom width drawer.",
    codeString: drawerCustomWidthString,
    preview: <DrawerCustomWidthPreview />,
  },
  {
    id: "drawer-3",
    title: "Full Width",
    description:
      "We have 3 different option for drawer backdrop. None, blur and custom color backdrop. Use which one you like. ",
    codeString: drawerFullWidthString,
    preview: <DrawerFullWidthPreview />,
  },
  {
    id: "drawer-4",
    title: "Backdrop",
    description: "Backdrop drawer with custom mui icon",
    codeString: drawerBackdropString,
    preview: <DrawerBackdropPreview />,
  },
  {
    id: "drawer-5",
    title: "Shopping Cart",
    description: "Shopping cart drawer with custom mui icon",
    codeString: drawerShoppingCartString,
    preview: <DrawerShoppingCartPreview />,
  },
  {
    id: "drawer-6",
    title: "Filters Panel",
    description: "Filters panel drawer with custom mui icon",
    codeString: drawerFiltersPanelString,
    preview: <DrawerFiltersPanelPreview />,
  },
  {
    id: "drawer-7",
    title: "Notifications",
    description: "Notifications drawer with custom mui icon",
    codeString: drawerNotificationsString,
    preview: <DrawerNotificationsPreview />,
  },
];

export const DrawerView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Drawer", path: "" },
        ]}
      />
      <PageTitle
        title="Drawer"
        description="Material UI core drawer with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Drawer - 1 */}
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
