"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { servicesCustomIconString } from "../code-string/services/services-custom-icon-string";
import { servicesWithCardString } from "../code-string/services/services-with-card-string";
import { ServicesCustomIconPreview } from "../components/services/services-custom-icon-preview copy";
import { ServicesWithCardPreview } from "../components/services/services-with-card-preview";
import { ExternalPackageAlert } from "@/components/external-package-alert";

const sections = [
  {
    id: "single-profile-1",
    title: "Creative artist",
    description:
      "If you are an artist this profile section could be a good fit for you to show your skills. ",
    codeString: servicesWithCardString,
    preview: <ServicesWithCardPreview />,
  },
  {
    id: "single-profile-2",
    title: "With custom icons",
    description:
      "If you don't want to use image box, you can go with custom icons. All these icons are imported from iconify but you can replace it with any icon library. ",
    codeString: servicesCustomIconString,
    preview: <ServicesCustomIconPreview />,
  },
];

export const ServicesView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections([]);
  }, [setSections]);
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Services", path: "" },
        ]}
      />
      <PageTitle
        title="Services"
        description="Showcase your services with modern service cards design with material ui only."
      />

      <Divider sx={{ my: 4 }} />
      <ExternalPackageAlert
        packages={[
          {
            name: "@iconify/react",
            url: "https://www.npmjs.com/package/@iconify/react",
          },
        ]}
      />
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
