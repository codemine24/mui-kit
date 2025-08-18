"use client";
import { PageTitle } from "@/components/core/page-title";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const ContactView = () => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        width: { xs: "100%", md: "60%" },
        mx: "auto",
        minHeight: "calc(100vh - 170px)"
      }}>
      <PageTitle title="Contact" description="Need to get in touch? Here's how to reach us." />

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="body1">
          📧 For sponsorship or business inquiries, reach us at:{" "}
          <Link href="mailto:codemine24@gmail.com" underline="hover" color="primary">
            codemine24@gmail.com
          </Link>
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="body1">
          💬 Want to start a discussion or suggest an idea? Head over to our{" "}
          <Link
            href="https://github.com/codemine24/mui-kit/discussions"
            underline="hover"
            color="primary">
            GitHub Discussions
          </Link>
          .
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1">
          🌐 Visit our website:{" "}
          <Link href="https://www.codeminetechnologies.com/" underline="hover" color="primary">
            codeminetechnologies.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
