"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { contactClassicString } from "../code-string/contact/contact-classic-string";
import { contactWithFormString } from "../code-string/contact/contact-with-form-preview";
import { contactWithMapString } from "../code-string/contact/contact-with-map-preview";
import { ContactClassicPreview } from "../components/contact/contact-classic-preview";
import { ContactWithFormPreview } from "../components/contact/contact-with-form-preview";
import { ContactWithMapPreview } from "../components/contact/contact-with-map-preview";

const sections = [
  {
    id: "contact-1",
    title: "Classic contact section",
    description:
      "Simple classic contact section. If you want to use contact section without form you can use this section.",
    codeString: contactClassicString,
    preview: <ContactClassicPreview />,
  },
  {
    id: "contact-2",
    title: "With form",
    description:
      "The contact section with a modern form and basic information. ",
    codeString: contactWithFormString,
    preview: <ContactWithFormPreview />,
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

export const ContactBlockView = () => {
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
