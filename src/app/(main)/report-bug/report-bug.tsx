"use client";
import { PageTitle } from "@/components/core/page-title";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import BugReportIcon from "@mui/icons-material/BugReport";

export const ReportBugView = () => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        width: { xs: "100%", md: "60%" },
        mx: "auto",
        minHeight: "calc(100vh - 170px)"
      }}>
      <PageTitle
        title="Report a Bug"
        description="Help us improve by reporting issues and glitches."
      />

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        If you find something broken or not working as expected, please open a GitHub issue.
        Providing detailed steps to reproduce will help us resolve it faster.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<BugReportIcon />}
        href="https://github.com/codemine24/mui-kit/issues"
        target="_blank"
        rel="noopener noreferrer">
        Report a Bug
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Include screenshots, version info, and steps to reproduce the bug for best results.
      </Typography>
    </Box>
  );
};
