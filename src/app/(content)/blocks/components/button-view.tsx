
"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../preview/button-preview";

export const ButtonView = () => {
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Button", path: "" },
        ]}
      />
      <PageTitle
        title="Button"
        description="Material UI core button with extended design, and functionality. "
      />
      <Divider sx={{ my: 4 }} />
      <CodePreviewCopyWrapper
        codeString={button1CodeString}
        preview={<Button1Preview />}
      />
    </Box>
  );
};
