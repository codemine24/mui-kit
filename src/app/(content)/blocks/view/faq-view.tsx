"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { contactWithFormString } from "../code-string/contact/contact-with-form-preview";
import { contactWithMapString } from "../code-string/contact/contact-with-map-preview";
import { faqSingleColString } from "../code-string/faq/faq-single-col-string";
import { ContactWithMapPreview } from "../components/contact/contact-with-map-preview";
import { FaqSingleColPreview } from "../components/faq/faq-single-col-preview";
import { FaqTwoColPreview } from "../components/faq/faq-two-col-preview";

const sections = [
  {
    id: "contact-1",
    title: "Single column",
    description:
      "Single column FAQ section that will fit most of the websites.",
    codeString: faqSingleColString,
    preview: <FaqSingleColPreview />,
  },
  {
    id: "contact-2",
    title: "Single column",
    description:
      "Two column with description and FAQ that will fit most of the websites.",
    codeString: contactWithFormString,
    preview: <FaqTwoColPreview />,
  },
  {
    id: "contact-3",
    title: "With map",
    description:
      "The contact section with a modern map and contact information. ",
    codeString: contactWithMapString,
    preview: <ContactWithMapPreview />,
  },
];

export const FaqView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Contact", path: "" },
        ]}
      />
      <PageTitle
        title="Contact Section"
        description="Contact us is one of the most commonly used section in website. This section is designed with purely material ui and nothing else. "
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
