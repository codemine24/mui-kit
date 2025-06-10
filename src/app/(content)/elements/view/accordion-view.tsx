"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
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
  {
    id: "accordion-1",
    title: "Solid background",
    description: "A regular but elegant accordion with solid background color",
    codeString: Accordion1CodeString,
    preview: <Accordion1 />,
  },
  {
    id: "accordion-2",
    title: "Outlined",
    description: "Outlined accordion with custom mui icon",
    codeString: Accordion2CodeString,
    preview: <Accordion2 />,
  },
  {
    id: "accordion-3",
    title: "Box shadow",
    description:
      "Use this beautiful accordion if you are looking for an accordion with box shadow.",
    codeString: Accordion3CodeString,
    preview: <Accordion3 />,
  },
  {
    id: "accordion-4",
    title: "Icon left aligned",
    description: "Icon position is different from traditional accordions",
    codeString: Accordion4CodeString,
    preview: <Accordion4 />,
  },
  {
    id: "accordion-5",
    title: "MUI accordion with vertical line",
    description: "Each section has a vertical line to separate them",
    codeString: Accordion5CodeString,
    preview: <Accordion5 />,
  },
  {
    id: "accordion-6",
    title: "Multi colored accordion",
    description: "Each section has a different color",
    codeString: Accordion6CodeString,
    preview: <Accordion6 />,
  },
  {
    id: "accordion-7",
    title: "Two Columns",
    description: "Two column combination.",
    codeString: Accordion7CodeString,
    preview: <Accordion7 />,
  },
  {
    id: "accordion-8",
    title: "Multiple openable accordion",
    description:
      "In this Material UI accordion variant you can open multiple accordion children at the same time.",
    codeString: Accordion8CodeString,
    preview: <Accordion8 />,
  },
];

export const AccordionView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Accordion", path: "" },
        ]}
      />
      <PageTitle
        title="Accordion"
        description="Use material ui accordion with different styles to show your FAQ's and other info."
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
