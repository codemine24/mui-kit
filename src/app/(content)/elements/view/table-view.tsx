"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";

import {
  BasicTablePreview,
  CollapsibleTablePreview,
  ComparisonTablePreview,
  CustomPaginationTablePreview,
  DataTablePreview,
  DenseTablePreview,
  HeadlessTablePreview,
  HighlightedFieldTablePreview,
  HoverTablePreview,
  ProductTablePreview,
  ShoppingCartTablePreview,
  SortingTablePreview,
  StickyHeadTablePreview,
  StripedColumnTablePreview,
  StripedRowTablePreview,
  TransactionTablePreview,
  UserTablePreview,
} from "../components/table";

import { PATHS } from "@/router/paths";
import {
  basicTableString,
  collapsibleTableString,
  comparisonTableString,
  customPaginationTableString,
  dataTableString,
  denseTableString,
  headlessTableString,
  highlightTableString,
  hoverTableString,
  productTableString,
  shoppingCartTableString,
  sortingTableString,
  stickyHeaderTableString,
  strippedColumnTableString,
  strippedRowTableString,
  transactionTableString,
  userTableString,
} from "../code-string/table";

const sections = [
  {
    id: "table-1",
    title: "Basic",
    description:
      "Very basic material ui table. If you need very simple table without any extra functionality, use this.",
    codeString: basicTableString,
    preview: <BasicTablePreview />,
  },
  {
    id: "table-2",
    title: "Data table",
    description:
      "Default material ui table with sorting, selection, filter and pagination functionality.",
    codeString: dataTableString,
    preview: <DataTablePreview />,
  },
  {
    id: "table-3",
    title: "Dense",
    description:
      "Mui table with dense padding (narrow rows). If you like compact table, use this.",
    codeString: denseTableString,
    preview: <DenseTablePreview />,
  },
  {
    id: "table-4",
    title: "Sorting & selecting",
    description:
      "Mui default table. If you need custom selection and sorting button, use this. ",
    codeString: sortingTableString,
    preview: <SortingTablePreview />,
  },
  {
    id: "table-5",
    title: "Sticky header",
    description: "Material ui default sticky header table component.",
    codeString: stickyHeaderTableString,
    preview: <StickyHeadTablePreview />,
  },
  {
    id: "table-6",
    title: "Collapsible",
    description: "Material ui table with collapsible rows.",
    codeString: collapsibleTableString,
    preview: <CollapsibleTablePreview />,
  },
  {
    id: "table-7",
    title: "User table",
    description:
      "User table, one of the most common table used in any application.",
    codeString: userTableString,
    preview: <UserTablePreview />,
  },
  {
    id: "table-8",
    title: "Product",
    description: "Product table for e-commerce website.",
    codeString: productTableString,
    preview: <ProductTablePreview />,
  },
  {
    id: "table-9",
    title: "Shopping cart",
    description:
      "Shopping cart table for e-commerce website with custom design.",
    codeString: shoppingCartTableString,
    preview: <ShoppingCartTablePreview />,
  },
  {
    id: "table-10",
    title: "Comparison",
    description:
      "Use this feature comparison table built with material ui only. ",
    codeString: comparisonTableString,
    preview: <ComparisonTablePreview />,
  },
  {
    id: "table-11",
    title: "Stripped column",
    description:
      "Stripped column table. You can change the color based on your requirement.",
    codeString: strippedColumnTableString,
    preview: <StripedColumnTablePreview />,
  },
  {
    id: "table-12",
    title: "Stripped row",
    description: "Stripped row table. ",
    codeString: strippedRowTableString,
    preview: <StripedRowTablePreview />,
  },
  {
    id: "table-13",
    title: "Hover",
    description: "Mui table with hover effect. ",
    codeString: hoverTableString,
    preview: <HoverTablePreview />,
  },
  {
    id: "table-14",
    title: "Headless",
    description: "Material ui table without any header or footer.",
    codeString: headlessTableString,
    preview: <HeadlessTablePreview />,
  },
  {
    id: "table-15",
    title: "Custom pagination",
    description:
      "Skip default table pagination and use your custom pagination. The pagination is fully customizable.",
    codeString: customPaginationTableString,
    preview: <CustomPaginationTablePreview />,
  },
  {
    id: "table-16",
    title: "Highlighted field",
    description: "Highlight important fields in a table. ",
    codeString: highlightTableString,
    preview: <HighlightedFieldTablePreview />,
  },
  {
    id: "table-17",
    title: "Transaction table",
    description:
      "Transaction table sample using material ui. You can customize it based on your requirement.  ",
    codeString: transactionTableString,
    preview: <TransactionTablePreview />,
  },
];

export const TableView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Table", path: "" },
        ]}
      />
      <PageTitle
        title="Table"
        description="Table is one of the most useful components that mui has. We've added more variants for you to use."
      />

      <Divider sx={{ my: 4 }} />

      {/* Table Section */}
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
