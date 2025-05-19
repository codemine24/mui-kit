"use client";

import React from "react";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";

import {
  DialogCustomBackdropPreview,
  DialogPlacementPreview,
  DialogSizesPreview,
  DialogStaticPreview,
  DialogConfirmation1Preview,
  DialogConfirmation2Preview,
  DialogMultiStepPreview,
  DialogScrollablePreview,
  DialogFullScreenPreview,
  DialogAnimationPreview,
  DialogHeaderFooterPreview,
  DialogImageViewPreview,
  DialogSignInPreview,
  DialogCTAPreview,
  DialogWelcomePreview,
} from "../components/dialog";
import {
  dialogCustomBackdropString,
  dialogPlacementString,
  dialogSizesString,
  dialogStaticString,
  dialogConfirmation1String,
  dialogConfirmation2String,
  dialogMultiStepString,
  dialogScrollableString,
  dialogFullScreenString,
  dialogAnimationString,
  dialogHeaderFooterString,
  dialogImageViewPreviewString,
  dialogSignInString,
  dialogCTAString,
  dialogWelcomeString,
} from "../code-string/dialog";

const sections = [
  {
    id: "dialog-sizes",
    title: "Different sizes dialog",
    description:
      "Choose your desire dialog four different sizes given by material ui. ",
    codeString: dialogSizesString,
    preview: <DialogSizesPreview />,
  },
  {
    id: "dialog-placement",
    title: "Different placement",
    description:
      "We have 5 different position for a dialog. Top-left, top-right, bottom-left, bottom-right and center. ",
    codeString: dialogPlacementString,
    preview: <DialogPlacementPreview />,
  },
  {
    id: "dialog-static",
    title: "Static dialog",
    description:
      "This dialog will not close on outside click. If you need a dialog that will not close on outside click, use this.",
    codeString: dialogStaticString,
    preview: <DialogStaticPreview />,
  },
  {
    id: "dialog-custom-backdrop",
    title: "Custom Backdrop",
    description:
      "We have 3 different variant for backdrop. `none`, `blur` and `custom color`. ",
    codeString: dialogCustomBackdropString,
    preview: <DialogCustomBackdropPreview />,
  },
  {
    id: "dialog-confirmation",
    title: "Confirmation dialog",
    description: "Confirmation dialog for deleting an item. ",
    codeString: dialogConfirmation1String,
    preview: <DialogConfirmation1Preview />,
  },
  {
    id: "dialog-confirmation-2",
    title: "Confirmation dialog v2",
    description: "Another modern and elegant confirmation dialog. ",
    codeString: dialogConfirmation2String,
    preview: <DialogConfirmation2Preview />,
  },
  {
    id: "dialog-multi-step",
    title: "Multi Step Dialog",
    description:
      "If your need a dialog with multiple steps functionality, you can use this one. We used dummy form fields, but you can replace it with your actual content. ",
    codeString: dialogMultiStepString,
    preview: <DialogMultiStepPreview />,
  },
  {
    id: "dialog-scrollable",
    title: "Scrollable dialog",
    description:
      "We have 2 scrollable dialog. `Paper` will have header footer sticky and body will be scrollable. But `body` variant will be entirely scrollable. ",
    codeString: dialogScrollableString,
    preview: <DialogScrollablePreview />,
  },
  {
    id: "dialog-full-screen",
    title: "Full Screen",
    description: "Native material ui dialog with solid background",
    codeString: dialogFullScreenString,
    preview: <DialogFullScreenPreview />,
  },
  {
    id: "dialog-animation",
    title: "Animation",
    description: "Native material ui dialog with solid background",
    codeString: dialogAnimationString,
    preview: <DialogAnimationPreview />,
  },
  {
    id: "dialog-header-footer",
    title: "Header Footer",
    description: "Native material ui dialog with solid background",
    codeString: dialogHeaderFooterString,
    preview: <DialogHeaderFooterPreview />,
  },
  {
    id: "dialog-image-view",
    title: "Image View",
    description: "Native material ui dialog with solid background",
    codeString: dialogImageViewPreviewString,
    preview: <DialogImageViewPreview />,
  },
  {
    id: "dialog-signin",
    title: "Sign In",
    description: "Native material ui dialog with solid background",
    codeString: dialogSignInString,
    preview: <DialogSignInPreview />,
  },
  {
    id: "dialog-cta",
    title: "CTA",
    description: "Native material ui dialog with solid background",
    codeString: dialogCTAString,
    preview: <DialogCTAPreview />,
  },
  {
    id: "dialog-welcome",
    title: "Welcome",
    description: "Native material ui dialog with solid background",
    codeString: dialogWelcomeString,
    preview: <DialogWelcomePreview />,
  },
];

export const DialogView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Dialog", path: "" },
        ]}
      />
      <PageTitle
        title="Dialog"
        description="Material UI core dialog with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Dialog - 1 */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          {" "}
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
