"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import Accordion1 from "../components/accordion/accordion-1";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import React from "react";

export const AccordionView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections([]);
  }, []);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Accordion", path: "" },
        ]}
      />
      <PageTitle
        title="Accordion"
        description="Material UI core accordion with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* contained buttons */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion1 />}
        />
      </Box>
    </Box>
  );
};
