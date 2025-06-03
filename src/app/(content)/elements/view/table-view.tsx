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
      "Use Material UI dense table with extended design. No extra package required.",
    codeString: denseTableString,
    preview: <DenseTablePreview />,
  },
  {
    id: "table-4",
    title: "Sorting",
    description:
      "Use Material UI sorting table with extended design. No extra package required.",
    codeString: sortingTableString,
    preview: <SortingTablePreview />,
  },
  {
    id: "table-5",
    title: "Sticky Header",
    description:
      "Use Material UI sticky header table with extended design. No extra package required.",
    codeString: stickyHeaderTableString,
    preview: <StickyHeadTablePreview />,
  },
  {
    id: "table-6",
    title: "Collapsible",
    description:
      "Use Material UI collapsible table with extended design. No extra package required.",
    codeString: collapsibleTableString,
    preview: <CollapsibleTablePreview />,
  },
  {
    id: "table-7",
    title: "User",
    description:
      "Use Material UI user table with extended design. No extra package required.",
    codeString: userTableString,
    preview: <UserTablePreview />,
  },
  {
    id: "table-8",
    title: "Product",
    description:
      "Use Material UI product table with extended design. No extra package required.",
    codeString: productTableString,
    preview: <ProductTablePreview />,
  },
  {
    id: "table-9",
    title: "Shopping Cart",
    description:
      "Use Material UI shopping cart table with extended design. No extra package required.",
    codeString: shoppingCartTableString,
    preview: <ShoppingCartTablePreview />,
  },
  {
    id: "table-10",
    title: "Comparison",
    description:
      "Use Material UI comparison table with extended design. No extra package required.",
    codeString: comparisonTableString,
    preview: <ComparisonTablePreview />,
  },
  {
    id: "table-11",
    title: "Stripped",
    description:
      "Use Material UI stripped table with extended design. No extra package required.",
    codeString: strippedColumnTableString,
    preview: <StripedColumnTablePreview />,
  },
  {
    id: "table-12",
    title: "Stripped Row",
    description:
      "Use Material UI stripped row table with extended design. No extra package required.",
    codeString: strippedRowTableString,
    preview: <StripedRowTablePreview />,
  },
  {
    id: "table-13",
    title: "Hover",
    description:
      "Use Material UI hover table with extended design. No extra package required.",
    codeString: hoverTableString,
    preview: <HoverTablePreview />,
  },
  {
    id: "table-14",
    title: "Headless",
    description:
      "Use Material UI headless table with extended design. No extra package required.",
    codeString: headlessTableString,
    preview: <HeadlessTablePreview />,
  },
  {
    id: "table-15",
    title: "Custom Pagination",
    description:
      "Use Material UI custom pagination table with extended design. No extra package required.",
    codeString: customPaginationTableString,
    preview: <CustomPaginationTablePreview />,
  },
  {
    id: "table-16",
    title: "Highlighted Field",
    description:
      "Use Material UI highlighted field table with extended design. No extra package required.",
    codeString: highlightTableString,
    preview: <HighlightedFieldTablePreview />,
  },
  {
    id: "table-17",
    title: "Transaction",
    description:
      "Use Material UI transaction table with extended design. No extra package required.",
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
        description="Material ui table with extended design and variants. Simply copy and paste the code."
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
