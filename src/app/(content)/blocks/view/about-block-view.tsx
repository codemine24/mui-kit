"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { aboutBasicString } from "../code-string/about/about-basic-string";
import { AboutBasicPreview } from "../components/about/about-basic-preview";

const sections = [
  {
    id: "about-1",
    title: "Basic About ",
    description:
      "Basic about section with title, description. Use this section to introduce your product or service.",
    codeString: aboutBasicString,
    preview: <AboutBasicPreview />,
  },
];

export const AboutBlockView = () => {


  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Alert", path: "" },
        ]}
      />
      <PageTitle
        title="About"
        description="About us section designed with purely material ui and nothing else. "
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
