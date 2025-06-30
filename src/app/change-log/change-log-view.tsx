"use client";
import { PageTitle } from "@/components/core/page-title";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const ChangeLogView = () => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        width: { xs: "100%", md: "60%" },
        mx: "auto",
        minHeight: "calc(100vh - 170px)"
      }}>
      <PageTitle
        title="Changelog"
        description="Keep track of the latest features, improvements, and bug fixes in MUI Kit."
      />
      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ mb: 2, color: "primary.main" }}>
        ✅ <strong>Beta</strong> – July 1, 2025
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, pl: 2 }}>
        - This beta variant has limited <b>Elements</b> and <b>Blocks</b>. We are working hard to
        add more over time.
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, pl: 2 }}>
        - Please feel free to use the components and test the ui. If you find any bugs, please
        report use at{" "}
        <Link
          href="mailto:codemine24@gmail.com"
          target="_blank"
          rel="noopener"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            mx: 0.5,
            "&:hover": { textDecoration: "underline" }
          }}>
          codemine24@gmail.com
        </Link>
        .
      </Typography>
    </Box>
  );
};
