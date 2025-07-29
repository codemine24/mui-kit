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
import { ChipSoftBgPreview } from "../components/chip/chip-soft-bg-preview";
import { ChipSoftBgOutlinedPreview } from "../components/chip/chip-soft-bg-outlined-preview";
import { ChipCustomSizePreview } from "../components/chip/chip-custom-size-preview";
import { ChipGradientBgPreview } from "../components/chip/chip-gradient-bg-preview";
import { ChipPillBadgePreview } from "../components/chip/chip-pill-badge-preview";

const sections = [
  {
    id: "chip-4",
    title: "Chip with soft background",
    description: "",
    codeString: "",
    preview: <ChipSoftBgPreview />,
  },
  {
    id: "chip-5",
    title: "Chip with soft background and outlined",
    description: "",
    codeString: "",
    preview: <ChipSoftBgOutlinedPreview />,
  },
  {
    id: "chip-6",
    title: "Chip with custom size",
    description: "",
    codeString: "",
    preview: <ChipCustomSizePreview />,
  },
  {
    id: "chip-7",
    title: "Chip with gradient background",
    description: "",
    codeString: "",
    preview: <ChipGradientBgPreview />,
  },
  {
    id: "chip-8",
    title: "Chip with pill badge",
    description: "",
    codeString: "",
    preview: <ChipPillBadgePreview />,
  },
];

export const ChipView = () => {
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
