
"use client";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider } from "@mui/material";

export const ButtonView = () => {
  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Components", path: "/elements" },
          { label: "Button", path: "" },
        ]}
      />
      <PageTitle
        title="Button"
        description="Material UI core button with extended design, and functionality. "
      />
      <Divider sx={{ my: 4 }} />
      {/* <CodePreviewCopyWrapper
        codeString={button1CodeString}
        preview={<Button1Preview />}
      /> */}
    </Box>
  );
};
