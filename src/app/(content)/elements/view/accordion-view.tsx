"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { Accordion1CodeString } from "../code-string/accordion/accordion-1";
import { Accordion2CodeString } from "../code-string/accordion/accordion-2";
import { Accordion3CodeString } from "../code-string/accordion/accordion-3";
import { Accordion4CodeString } from "../code-string/accordion/accordion-4";
import { Accordion5CodeString } from "../code-string/accordion/accordion-5";
import { Accordion6CodeString } from "../code-string/accordion/accordion-6";
import { Accordion7CodeString } from "../code-string/accordion/accordion-7";
import { Accordion8CodeString } from "../code-string/accordion/accordion-8";
import Accordion1 from "../components/accordion/accordion-1";
import Accordion2 from "../components/accordion/accordion-2";
import Accordion3 from "../components/accordion/accordion-3";
import Accordion4 from "../components/accordion/accordion-4";
import Accordion5 from "../components/accordion/accordion-5";
import Accordion6 from "../components/accordion/accordion-6";
import Accordion7 from "../components/accordion/accordion-7";
import Accordion8 from "../components/accordion/accordion-8";

const sections = [
  { title: "Solid Background Accordion", id: "accordion-1" },
  { title: "Outlined Accordion", id: "accordion-2" },
  { title: "Box Shadow Accordion", id: "accordion-3" },
  { title: "Icon Left Aligned", id: "accordion-4" },
  { title: "MUI Accordion with vertical line", id: "accordion-5" },
  { title: "Multi colored Accordion", id: "accordion-6" },
  { title: "Multiple openable Accordion", id: "accordion-7" },
  { title: "Two Column Accordion", id: "accordion-8" },
];

export const AccordionView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
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
        <SectionTitle
          title="Solid Background Accordion"
          description="A regular but elegant accordion with solid background color"
          id="accordion-1"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion1CodeString}
          preview={<Accordion1 />}
        />
      </Box>

      {/* Accordion - 2 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Outlined Accordion"
          description="Outlined accordion with custom mui icon"
          id="accordion-2"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion2CodeString}
          preview={<Accordion2 />}
        />
      </Box>
      {/* Accordion - 3 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Box Shadow Accordion"
          description="Use this beautiful accordion if you are looking for an accordion with box shadow. "
          id="accordion-3"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion3CodeString}
          preview={<Accordion3 />}
        />
      </Box>
      {/* Accordion - 4 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Icon Left Aligned"
          description="Icon position is different from traditional accordions"
          id="accordion-4"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion4CodeString}
          preview={<Accordion4 />}
        />
      </Box>
      {/* Accordion - 5 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="MUI Accordion with vertical line"
          description="Each section has a vertical line to separate them"
          id="accordion-5"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion5CodeString}
          preview={<Accordion5 />}
        />
      </Box>

      {/* Accordion - 6 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Multi colored Accordion"
          description="Each section has a different color"
          id="accordion-6"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion6CodeString}
          preview={<Accordion6 />}
        />
      </Box>
      {/* Accordion - 7 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Multiple openable Accordion"
          description="In this Material UI accordion variant you can open multiple accordion children at the same time. "
          id="accordion-7"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion8CodeString}
          preview={<Accordion8 />}
        />
      </Box>

      {/* Accordion - 8 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle
          title="Two Column Accordion"
          description="Two column combination"
          id="accordion-7"
        />

        <CodePreviewCopyWrapper
          codeString={Accordion7CodeString}
          preview={<Accordion7 />}
        />
      </Box>
    </Box>
  );
};
