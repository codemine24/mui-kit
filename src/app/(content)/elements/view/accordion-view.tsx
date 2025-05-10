"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import Accordion1 from "../components/accordion/accordion-1";
import Accordion2 from "../components/accordion/accordion-2";
import Accordion3 from "../components/accordion/accordion-3";
import Accordion4 from "../components/accordion/accordion-4";
import Accordion5 from "../components/accordion/accordion-5";
import Accordion6 from "../components/accordion/accordion-6";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import React from "react";

export const AccordionView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

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

      {/* Accordion - 1 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion1 />}
        />
      </Box>

      {/* Accordion - 2 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion2 />}
        />
      </Box>
      {/* Accordion - 3 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion3 />}
        />
      </Box>
      {/* Accordion - 4 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion4 />}
        />
      </Box>
      {/* Accordion - 5 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion5 />}
        />
      </Box>

      {/* Accordion - 6 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Regular" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={button1CodeString}
          preview={<Accordion6 />}
        />
      </Box>
    </Box>
  );
};
