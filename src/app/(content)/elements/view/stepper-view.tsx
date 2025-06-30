"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";

import {
  StepperArrowPreview,
  StepperClickablePreview,
  StepperConnectorColorPreview,
  StepperCustomConnectorSizePreview,
  StepperCustomElementPreview,
  StepperCustomIconPreview,
  StepperDotPreview,
  StepperDynamicPreview,
  StepperLinerPreview,
  StepperResponsivePreview,
  StepperSkippedPreview,
  StepperStaticPreview,
  StepperTimelinePreview,
  StepperWithDescriptionPreview,
  StepperWithoutLabelPreview
} from "../components/stepper";

import { PATHS } from "@/router/paths";
import {
  stepperArrowString,
  stepperClickableString,
  stepperConnectorColorString,
  stepperCustomConnectorSizeString,
  stepperCustomElementString,
  stepperCustomIconString,
  stepperDotString,
  stepperDynamicString,
  stepperLinerString,
  stepperResponsiveString,
  stepperSkippedString,
  stepperStaticString,
  stepperTimelineString,
  stepperWithDescriptionString,
  stepperWithoutLabelString
} from "../code-string/stepper";

const sections = [
  {
    id: "stepper-1",
    title: "Static",
    description: "Most classic still most commonly used stepper. No fancy styles, simple stepper.",
    codeString: stepperStaticString,
    preview: <StepperStaticPreview />
  },
  {
    id: "stepper-2",
    title: "Responsive",
    description: "Same as static stepper, but it will adjust with most of the website layout.",
    codeString: stepperResponsiveString,
    preview: <StepperResponsivePreview />
  },
  {
    id: "stepper-3",
    title: "Liner",
    description: "Spot, connector, and label will always be in linear position. ",
    codeString: stepperLinerString,
    preview: <StepperLinerPreview />
  },
  {
    id: "stepper-4",
    title: "Dot",
    description: "No extra label or fancy style. Simple dot to make the design cleaner. ",
    codeString: stepperDotString,
    preview: <StepperDotPreview />
  },
  {
    id: "stepper-5",
    title: "Without Label",
    description: "Simple stepper without label. ",
    codeString: stepperWithoutLabelString,
    preview: <StepperWithoutLabelPreview />
  },
  {
    id: "stepper-6",
    title: "With Description",
    description:
      "Add description with your stepper to help your visitor to understand the message. ",
    codeString: stepperWithDescriptionString,
    preview: <StepperWithDescriptionPreview />
  },
  {
    id: "stepper-7",
    title: "Dynamic",
    description: "This stepper will have different color for active and completed step. ",
    codeString: stepperDynamicString,
    preview: <StepperDynamicPreview />
  },
  {
    id: "stepper-8",
    title: "Clickable",
    description: "You can jump between steps by clicking on any specific step. ",
    codeString: stepperClickableString,
    preview: <StepperClickablePreview />
  },
  {
    id: "stepper-9",
    title: "Skippable",
    description: "This stepper will allow you to skip any step if you want. ",
    codeString: stepperSkippedString,
    preview: <StepperSkippedPreview />
  },
  {
    id: "stepper-10",
    title: "Arrow",
    description: "Use custom arrow icon as connector. ",
    codeString: stepperArrowString,
    preview: <StepperArrowPreview />
  },
  {
    id: "stepper-11",
    title: "Custom Icon",
    description: "You can use any kind of custom icons as connector. ",
    codeString: stepperCustomIconString,
    preview: <StepperCustomIconPreview />
  },
  {
    id: "stepper-12",
    title: "Vertical",
    description: "Vertical stepper will allow you to use stepper like a timeline. ",
    codeString: stepperTimelineString,
    preview: <StepperTimelinePreview />
  },
  {
    id: "stepper-13",
    title: "Custom Connector Size",
    description: "You can increase or decrease connector size (width and height). ",
    codeString: stepperCustomConnectorSizeString,
    preview: <StepperCustomConnectorSizePreview />
  },
  {
    id: "stepper-14",
    title: "Connector Color",
    description: "Use custom color for connector and label. ",
    codeString: stepperConnectorColorString,
    preview: <StepperConnectorColorPreview />
  },
  {
    id: "stepper-15",
    title: "Custom Element",
    description: "No only elements, you can use custom elements like image as spot. ",
    codeString: stepperCustomElementString,
    preview: <StepperCustomElementPreview />
  }
];

export const StepperView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
          { label: "Stepper", path: "" }
        ]}
      />
      <PageTitle
        title="Stepper"
        description="Material UI core stepper with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Stepper Section */}
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />

          <CodePreviewCopyWrapper codeString={section.codeString} preview={section.preview} />
        </Box>
      ))}
    </Box>
  );
};
