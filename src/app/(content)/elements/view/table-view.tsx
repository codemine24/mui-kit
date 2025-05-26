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
