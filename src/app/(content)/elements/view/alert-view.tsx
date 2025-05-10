"use client";
import React from "react";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { Box, Divider } from "@mui/material";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import SoftAlerts from "../components/alert/alert-1";
import OutlinedAlerts from "../components/alert/alert-2";
import SolidAlerts from "../components/alert/alert-3";
import DescriptionAlerts from "../components/alert/alert-4";
import { SoftAlertsCodeString } from "../code-string/alert/alert-1";
import { OutlinedAlertsCodeString } from "../code-string/alert/alert-2";
import { SolidAlertsCodeString } from "../code-string/alert/alert-3";
import { DescriptionAlertsCodeString } from "../code-string/alert/alert-4";

export const AlertView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections([]);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: "/elements" },
          { label: "Alert", path: "" },
        ]}
      />
      <PageTitle
        title="Alert"
        description="Material UI core accordion with extended design, and functionality. "
      />

      <Divider sx={{ my: 4 }} />

      {/* Alert - 1 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Soft" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={SoftAlertsCodeString}
          preview={<SoftAlerts />}
        />
      </Box>

      {/* Alert - 2 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Outlined" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={OutlinedAlertsCodeString}
          preview={<OutlinedAlerts />}
        />
      </Box>

      {/* Alert - 3 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="Solid" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={SolidAlertsCodeString}
          preview={<SolidAlerts />}
        />
      </Box>

      {/* Alert - 4 */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle title="With Description" id="button-section-1" />

        <CodePreviewCopyWrapper
          codeString={DescriptionAlertsCodeString}
          preview={<DescriptionAlerts />}
        />
      </Box>
    </Box>
  );
};
