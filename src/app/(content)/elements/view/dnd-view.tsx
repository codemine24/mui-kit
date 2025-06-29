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
import { SortableHorizontalPreview } from "../components/dnd/preview/horizontal-preview";
import { SortableGridDragOverlayPreview } from "../components/dnd/preview/sortable-grid-drag-overlay-preview";
import { SortableGridPreview } from "../components/dnd/preview/sortable-grid-preview";
import { SwapGridPreview } from "../components/dnd/preview/swap-grid-preivew";
import { SortableVerticalPreview } from "../components/dnd/preview/vertical-preview";

import { ExternalPackageAlert } from "@/components/external-package-alert";
import { horizontalString } from "../code-string/dnd/horizontal-string";
import { sortableGridDragOverlayString } from "../code-string/dnd/sortable-grid-drag-overlay-string";
import { sortableGridString } from "../code-string/dnd/sortable-grid-string";
import { sortableItemString } from "../code-string/dnd/sortable-item-string";
import { swapGridString } from "../code-string/dnd/swap-grid-string";
import { verticalString } from "../code-string/dnd/vertical-string";

const sections = [
  {
    id: "dnd-1",
    title: "Sortable grid",
    description: "When you move the grid, other grids are also adjust their position. ",
    codeString: [
      { name: "SortableGrid", code: sortableGridString },
      { name: "ItemBase", code: sortableItemString }
    ],
    preview: <SortableGridPreview />
  },
  {
    id: "dnd-2",
    title: "Sortable grid with drag overlay",
    description: "Sortable grid with an overlay that follows the cursor. Try moving a grid item.",
    codeString: [
      { name: "SortableGridDragOverlay", code: sortableGridDragOverlayString },
      { name: "ItemBase", code: sortableItemString }
    ],
    preview: <SortableGridDragOverlayPreview />
  },
  {
    id: "dnd-3",
    title: "Swap grid",
    description: "Only two grid will swap their position and other grids are not affected.",
    codeString: [
      { name: "SwapGrid", code: swapGridString },
      { name: "ItemBase", code: sortableItemString }
    ],
    preview: <SwapGridPreview />
  },
  {
    id: "dnd-4",
    title: "Vertical grid",
    description: "Vertical draggable grid. You can change the grid position vertically.",
    codeString: [
      { name: "SortableVertical", code: verticalString },
      { name: "ItemBase", code: sortableItemString }
    ],
    preview: <SortableVerticalPreview />
  },
  {
    id: "dnd-5",
    title: "Horizontal grid",
    description: "Use this horizontal draggable grid variant with auto scroll. ",
    codeString: [
      { name: "SortableHorizontal", code: horizontalString },
      { name: "ItemBase", code: sortableItemString }
    ],
    preview: <SortableHorizontalPreview />
  }
];

export const DndView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Drag and Drop", path: "" }
        ]}
      />
      <PageTitle
        title="Drag and Drop"
        description="Material UI is missing drag and drop feature. So we've added it using a light weight package called @dnd-kit which is fully compatible with mui."
      />

      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        packages={[
          {
            name: "@dnd-kit/core",
            url: "https://www.npmjs.com/package/@dnd-kit/core"
          },
          {
            name: "@dnd-kit/sortable",
            url: "https://www.npmjs.com/package/@dnd-kit/sortable"
          },
          {
            name: "@dnd-kit/utilities",
            url: "https://www.npmjs.com/package/@dnd-kit/utilities"
          }
        ]}
      />
      {/* Drag and Drop Section */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />

          <CodePreviewCopyWrapper codeString={section.codeString} preview={section.preview} />
        </Box>
      ))}
    </Box>
  );
};
