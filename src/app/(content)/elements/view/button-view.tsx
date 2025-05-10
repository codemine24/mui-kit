"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { Box, Divider } from "@mui/material";
import React from "react";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../components/button/button-1";
import { Button2Preview } from "../components/button/button-2";
import { Button3Preview } from "../components/button/button-3.";
import { Button4Preview } from "../components/button/button-4";
import { Button5Preview } from "../components/button/button-5";
const sections = [
  { title: "#1 Contained", id: "button-section-1" },
  { title: "#2 Outlined", id: "button-section-2" },
  { title: "#3 Text", id: "button-section-3" },
  { title: "#4 Soft", id: "button-section-4" },
  { title: "#5 Icon Buttons", id: "button-section-5" },
];
export const ButtonView = () => {
  const {  setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections);
  }, []);

  return (
    <Box>
      <Box>
        <CustomBreadCrumbs
          pathArr={[
            { label: "Elements", path: "/elements" },
            { label: "Button", path: "" },
          ]}
        />
        <PageTitle
          title="Button"
          description="Material UI core button with extended design, and functionality."
        />
        <Divider sx={{ my: 4 }} />

        {/* contained buttons */}
        <Box sx={{ mb: 4 }}>
          <SectionTitle title="Contained" id="button-section-1" />

          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button1Preview />}
          />
        </Box>
      </Box>
      {/* outlined buttons */}
      <Box>
        <Box sx={{ mb: 4 }}>
          <SectionTitle title="Outlined" id="button-section-2" />

          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button2Preview />}
          />
        </Box>
      </Box>
      {/* text buttons */}
      <Box>
        <Box sx={{ mb: 4 }}>
          <SectionTitle title="Text" id="button-section-3" />

          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button3Preview />}
          />
        </Box>
      </Box>
      {/* soft buttons */}
      <Box>
        <Box sx={{ mb: 4 }}>
          <SectionTitle title="Soft" id="button-section-3" />

          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button4Preview />}
          />
        </Box>
      </Box>
      {/* icon buttons */}
      <Box>
        <Box sx={{ mb: 4 }}>
          <SectionTitle title="Icon Buttons" id="button-section-3" />

          <CodePreviewCopyWrapper
            codeString={button1CodeString}
            preview={<Button5Preview />}
          />
        </Box>
      </Box>
    </Box>
  );
};
