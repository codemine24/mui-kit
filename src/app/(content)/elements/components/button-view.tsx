"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { OnThisPage } from "@/components/on-this-page";
import { Box, Divider, Grid } from "@mui/material";
import { button1CodeString } from "../code-string/button-code-string";
import { Button1Preview } from "../preview/button1-preview";
import { Button2Preview } from "../preview/button2-preview";
import { Button3Preview } from "../preview/button3-preview";
import { Button4Preview } from "../preview/button4-preview";
import { Button5Preview } from "../preview/button5-preview";

export const ButtonView = () => {
  const sections = [
    { title: "#1 Contained", id: "button-section-1" },
    { title: "#2 Outlined", id: "button-section-2" },
    { title: "#3 Text", id: "button-section-3" },
    { title: "#4 Soft", id: "button-section-4" },
    { title: "#5 Icon Buttons", id: "button-section-5" },
  ];

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 10 }}>
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
      </Grid>
      <Grid size={{ xs: 0, md: 2 }}>
        <OnThisPage sections={sections} />
      </Grid>
    </Grid>
  );
};
