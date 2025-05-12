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
import ActionAlerts from "../components/alert/alert-5";
import { SoftAlertsCodeString } from "../code-string/alert/alert-1";
import { OutlinedAlertsCodeString } from "../code-string/alert/alert-2";
import { SolidAlertsCodeString } from "../code-string/alert/alert-3";
import { DescriptionAlertsCodeString } from "../code-string/alert/alert-4";
import { ActionAlertsCodeString } from "../code-string/alert/alert-5";

const sections = [
  {
    id: "alert-1",
    title: "Soft",
    description:
      "Use Material UI soft alerts with extended design. No extra package required.",
    codeString: SoftAlertsCodeString,
    preview: <SoftAlerts />,
  },
  {
    id: "alert-2",
    title: "Outlined",
    description: "Use this alert if you are a fan of outlined style",
    codeString: OutlinedAlertsCodeString,
    preview: <OutlinedAlerts />,
  },
  {
    id: "alert-3",
    title: "Solid",
    description:
      "Alerts with solid background. Simple but compatible with most of the client requirements.",
    codeString: SolidAlertsCodeString,
    preview: <SolidAlerts />,
  },
  {
    id: "alert-4",
    title: "With Description",
    description:
      "Add some description with regular alert to help your visitor to understand the message",
    codeString: DescriptionAlertsCodeString,
    preview: <DescriptionAlerts />,
  },
  {
    id: "alert-5",
    title: "With Action & Chip",
    description: "",
    codeString: ActionAlertsCodeString,
    preview: <ActionAlerts />,
  },
];

export const AlertView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
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

      {/* Alert Section */}
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
