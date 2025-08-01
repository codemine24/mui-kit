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
import { chipActionClickableDeletableString } from "../code-string/chip/chip-action-clickable-deletable-string";
import { chipActionClickableString } from "../code-string/chip/chip-action-clickable-string";
import { chipActionDeletableString } from "../code-string/chip/chip-action-deletable-string";
import { chipCheckboxString } from "../code-string/chip/chip-checkbox-string";
import { chipCustomAvatarString } from "../code-string/chip/chip-custom-avatar-string";
import { chipCustomNumberString } from "../code-string/chip/chip-custom-number-string";
import { chipCustomSizeString } from "../code-string/chip/chip-custom-size-string";
import { chipDeletableIconString } from "../code-string/chip/chip-deletable-icon-string";
import { chipGradientBgString } from "../code-string/chip/chip-gradient-bg-string";
import { chipIconString } from "../code-string/chip/chip-icon-string";
import { chipOnlyIconString } from "../code-string/chip/chip-only-icon-string";
import { chipOutlinedString } from "../code-string/chip/chip-outlined-string";
import { chipPillBadgeString } from "../code-string/chip/chip-pill-badge-string";
import { chipSoftBgOutlinedString } from "../code-string/chip/chip-soft-bg-outlined-string";
import { chipSoftBgString } from "../code-string/chip/chip-soft-bg-string";
import { chipSolidBgString } from "../code-string/chip/chip-solid-bg-string";
import { chipStatusString } from "../code-string/chip/chip-status-string";
import { ChipActionClickableDeletablePreview } from "../components/chip/chip-action-clickable-deletable-preview";
import { ChipActionClickablePreview } from "../components/chip/chip-action-clickable-preview";
import { ChipActionDeletablePreview } from "../components/chip/chip-action-deletable-preview";
import { ChipCheckboxPreview } from "../components/chip/chip-checkbox-preview";
import { ChipCustomAvatarPreview } from "../components/chip/chip-custom-avatar-preview";
import { ChipCustomNumberPreview } from "../components/chip/chip-custom-number-preview";
import { ChipCustomSizePreview } from "../components/chip/chip-custom-size-preview";
import { ChipDeletableIconPreview } from "../components/chip/chip-deletable-icon-preview";
import { ChipGradientBgPreview } from "../components/chip/chip-gradient-bg-preview";
import { ChipIconPreview } from "../components/chip/chip-icon-preview";
import { ChipOnlyIconPreview } from "../components/chip/chip-only-icon-preview";
import { ChipOutlinedPreview } from "../components/chip/chip-outlined-preview";
import { ChipPillBadgePreview } from "../components/chip/chip-pill-badge-preview";
import { ChipSoftBgOutlinedPreview } from "../components/chip/chip-soft-bg-outlined-preview";
import { ChipSoftBgPreview } from "../components/chip/chip-soft-bg-preview";
import { ChipSolidBgPreview } from "../components/chip/chip-solid-bg-preview";
import { ChipStatusPreview } from "../components/chip/chip-status-preview";

const sections = [
  {
    id: "chip-1",
    title: "Solid background",
    description: "Regular chip with solid background color.",
    codeString: chipSolidBgString,
    preview: <ChipSolidBgPreview />,
  },
  {
    id: "chip-2",
    title: "Chip with outlined",
    description:
      "Regular chip with outlined style. If you need simple material ui chip, use this.",
    codeString: chipOutlinedString,
    preview: <ChipOutlinedPreview />,
  },
  {
    id: "chip-3",
    title: "Soft background mui chip",
    description:
      "This chip variant has soft background. Designed with material ui, noting else. ",
    codeString: chipSoftBgString,
    preview: <ChipSoftBgPreview />,
  },
  {
    id: "chip-4",
    title: "Outlined soft background",
    description: "Another soft background material ui chip but it has border. ",
    codeString: chipSoftBgOutlinedString,
    preview: <ChipSoftBgOutlinedPreview />,
  },
  {
    id: "chip-5",
    title: "Chip with custom size",
    description:
      "We added custom height, width and border radius for each chip. You can customize it as you want.",
    codeString: chipCustomSizeString,
    preview: <ChipCustomSizePreview />,
  },
  {
    id: "chip-6",
    title: "Chip with gradient background",
    description:
      "Material ui chip with single color gradient and double gradient.",
    codeString: chipGradientBgString,
    preview: <ChipGradientBgPreview />,
  },
  {
    id: "chip-7",
    title: "Chip with pill badge",
    description:
      "If you need small sized chip, you can use this pill variant designed with material ui.",
    codeString: chipPillBadgeString,
    preview: <ChipPillBadgePreview />,
  },
  {
    id: "chip-8",
    title: "Chip with icon",
    description: "If you need icon chip, use this variant.",
    codeString: chipIconString,
    preview: <ChipIconPreview />,
  },
  {
    id: "chip-9",
    title: "Chip with avatar",
    description: "You can use custom avatar inside chip. ",
    codeString: chipCustomAvatarString,
    preview: <ChipCustomAvatarPreview />,
  },
  {
    id: "chip-10",
    title: "Custom number",
    description:
      "This chip variant is simple but useful is you want to display number inside chip. ",
    codeString: chipCustomNumberString,
    preview: <ChipCustomNumberPreview />,
  },
  {
    id: "chip-11",
    title: "Chip with avatar",
    description: "",
    codeString: chipDeletableIconString,
    preview: <ChipDeletableIconPreview />,
  },
  {
    id: "chip-12",
    title: "Chip with avatar",
    description: "",
    codeString: chipStatusString,
    preview: <ChipStatusPreview />,
  },
  {
    id: "chip-13",
    title: "Chip with only icon",
    description: "",
    codeString: chipOnlyIconString,
    preview: <ChipOnlyIconPreview />,
  },
  {
    id: "chip-14",
    title: "Chip with clickable",
    description: "",
    codeString: chipActionClickableString,
    preview: <ChipActionClickablePreview />,
  },
  {
    id: "chip-15",
    title: "Chip with deletable",
    description: "",
    codeString: chipActionDeletableString,
    preview: <ChipActionDeletablePreview />,
  },
  {
    id: "chip-16",
    title: "Chip with clickable deletable",
    description: "",
    codeString: chipActionClickableDeletableString,
    preview: <ChipActionClickableDeletablePreview />,
  },
  {
    id: "chip-17",
    title: "Chip with checkbox",
    description: "",
    codeString: chipCheckboxString,
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
          { label: "Chip", path: "" },
        ]}
      />
      <PageTitle
        title="Chip"
        description="Use MUI-KIT Chip to display compact, interactive elements for selections, filters, or input triggers"
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
