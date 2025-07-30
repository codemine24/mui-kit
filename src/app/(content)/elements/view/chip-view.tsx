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
import { ChipCustomAvatarPreview } from "../components/chip/chip-custom-avatar-preview";
import { ChipIconPreview } from "../components/chip/chip-icon-preview";
import { ChipCustomNumberPreview } from "../components/chip/chip-custom-number-preview";
import { ChipDeletableIconPreview } from "../components/chip/chip-deletable-icon-preview";
import { ChipStatusPreview } from "../components/chip/chip-status-preview";
import { ChipOnlyIconPreview } from "../components/chip/chip-only-icon";
import { ChipActionClickablePreview } from "../components/chip/chip-action-clickable-preview";
import { ChipActionDeletablePreview } from "../components/chip/chip-action-deletable-preview";
import { ChipActionClickableDeletablePreview } from "../components/chip/chip-action-clickable-deletable-preview";
import { ChipCheckboxPreview } from "../components/chip/chip-checkbox-preview";

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
  {
    id: "chip-9",
    title: "Chip with icon",
    description: "",
    codeString: "",
    preview: <ChipIconPreview />,
  },
  {
    id: "chip-10",
    title: "Chip with avatar",
    description: "",
    codeString: "",
    preview: <ChipCustomAvatarPreview />,
  },
  {
    id: "chip-11",
    title: "Chip with avatar",
    description: "",
    codeString: "",
    preview: <ChipCustomNumberPreview />,
  },
  {
    id: "chip-12",
    title: "Chip with avatar",
    description: "",
    codeString: "",
    preview: <ChipDeletableIconPreview />,
  },
  {
    id: "chip-13",
    title: "Chip with avatar",
    description: "",
    codeString: "",
    preview: <ChipStatusPreview />,
  },
  {
    id: "chip-14",
    title: "Chip with only icon",
    description: "",
    codeString: "",
    preview: <ChipOnlyIconPreview />,
  },
  {
    id: "chip-15",
    title: "Chip with clickable",
    description: "",
    codeString: "",
    preview: <ChipActionClickablePreview />,
  },
  {
    id: "chip-16",
    title: "Chip with deletable",
    description: "",
    codeString: "",
    preview: <ChipActionDeletablePreview />,
  },
  {
    id: "chip-17",
    title: "Chip with clickable deletable",
    description: "",
    codeString: "",
    preview: <ChipActionClickableDeletablePreview />,
  },
  {
    id: "chip-17",
    title: "Chip with checkbox",
    description: "",
    codeString: "",
    preview: <ChipCheckboxPreview />,
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
