"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import BasicTable from "../components/table/table-basic-preview";
import DataTable from "../components/table/table-data-preview";
import DenseTable from "../components/table/table-dense-preview";
import SortingTable from "../components/table/table-sorting-preview";
import StickyHeaderTable from "../components/table/table-sticky-header-preview";
import { CollapsibleTablePreview } from "../components/table/table-collapsible-preview";
import { UserTablePreview } from "../components/table/table-user-preview";
import { ProductTablePreview } from "../components/table/table-product-preview";
import { ShoppingCartTablePreview } from "../components/table/table-shopping-cart-preview";
import { ComparisonTablePreview } from "../components/table/table-comparison-preview";
import { StripedColumnTablePreview } from "../components/table/table-stripped-column-preview";
import { StripedRowTablePreview } from "../components/table/table-stripped-row-table";
import { HoverTablePreview } from "../components/table/table-hover-preview";
import { HeadlessTablePreview } from "../components/table/table-headless-preview";
import { CustomPaginationTablePreview } from "../components/table/table-custom-pagination-preview";
import { HighlightedFieldTablePreview } from "../components/table/table-highlight-preview";

const sections = [
  {
    id: "table-1",
    title: "Basic",
    description:
      "Use Material UI basic table with extended design. No extra package required.",
    codeString: "",
    preview: <BasicTable />,
  },
  {
    id: "table-2",
    title: "Data Table",
    description:
      "Use Material UI data table with extended design. No extra package required.",
    codeString: "",
    preview: <DataTable />,
  },
  {
    id: "table-3",
    title: "Dense",
    description:
      "Use Material UI dense table with extended design. No extra package required.",
    codeString: "",
    preview: <DenseTable />,
  },
  {
    id: "table-4",
    title: "Sorting",
    description:
      "Use Material UI sorting table with extended design. No extra package required.",
    codeString: "",
    preview: <SortingTable />,
  },
  {
    id: "table-5",
    title: "Sticky Header",
    description:
      "Use Material UI sticky header table with extended design. No extra package required.",
    codeString: "",
    preview: <StickyHeaderTable />,
  },
  {
    id: "table-6",
    title: "Collapsible",
    description:
      "Use Material UI collapsible table with extended design. No extra package required.",
    codeString: "",
    preview: <CollapsibleTablePreview />,
  },
  {
    id: "table-7",
    title: "User",
    description:
      "Use Material UI user table with extended design. No extra package required.",
    codeString: "",
    preview: <UserTablePreview />,
  },
  {
    id: "table-8",
    title: "Product",
    description:
      "Use Material UI product table with extended design. No extra package required.",
    codeString: "",
    preview: <ProductTablePreview />,
  },
  {
    id: "table-9",
    title: "Shopping Cart",
    description:
      "Use Material UI shopping cart table with extended design. No extra package required.",
    codeString: "",
    preview: <ShoppingCartTablePreview />,
  },
  {
    id: "table-10",
    title: "Comparison",
    description:
      "Use Material UI comparison table with extended design. No extra package required.",
    codeString: "",
    preview: <ComparisonTablePreview />,
  },
  {
    id: "table-11",
    title: "Stripped",
    description:
      "Use Material UI stripped table with extended design. No extra package required.",
    codeString: "",
    preview: <StripedColumnTablePreview />,
  },
  {
    id: "table-12",
    title: "Stripped Row",
    description:
      "Use Material UI stripped row table with extended design. No extra package required.",
    codeString: "",
    preview: <StripedRowTablePreview />,
  },
  {
    id: "table-13",
    title: "Hover",
    description:
      "Use Material UI hover table with extended design. No extra package required.",
    codeString: "",
    preview: <HoverTablePreview />,
  },
  {
    id: "table-14",
    title: "Headless",
    description:
      "Use Material UI headless table with extended design. No extra package required.",
    codeString: "",
    preview: <HeadlessTablePreview />,
  },
  {
    id: "table-15",
    title: "Custom Pagination",
    description:
      "Use Material UI custom pagination table with extended design. No extra package required.",
    codeString: "",
    preview: <CustomPaginationTablePreview />,
  },
  {
    id: "table-16",
    title: "Highlighted Field",
    description:
      "Use Material UI highlighted field table with extended design. No extra package required.",
    codeString: "",
    preview: <HighlightedFieldTablePreview />,
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
          { label: "Elements", path: "/elements" },
          { label: "Table", path: "" },
        ]}
      />
      <PageTitle
        title="Table"
        description="Material UI core table with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Alert Section */}
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
