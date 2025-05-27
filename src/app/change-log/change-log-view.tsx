"use client";
import { PageTitle } from "@/components/core/page-title";
import { Box, Divider, Typography } from "@mui/material";

export const ChangeLogView = () => {
  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        width: { xs: "100%", md: "60%" },
        mx: "auto",
        minHeight: "calc(100vh - 170px)",
      }}
    >
      <PageTitle
        title="Changelog"
        description="Keep track of the latest features, improvements, and bug fixes in MUI Kit."
      />
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        ✅ <strong>v1.2.0</strong> – May 25, 2025
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, pl: 2 }}>
        - Added new <strong>Slider</strong> and <strong>Mega Menu</strong> components <br />
        - Improved performance for all form elements <br />
        - Minor bug fixes and accessibility improvements
      </Typography>

      <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
        ✅ <strong>v1.1.0</strong> – May 10, 2025
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, pl: 2 }}>
        - Introduced extended variants for Buttons, Cards, and Tabs <br />
        - Added dark mode support <br />
        - Enhanced theme configuration
      </Typography>

      <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
        ✅ <strong>v1.0.0</strong> – Initial Release
      </Typography>
      <Typography variant="body2" sx={{ pl: 2 }}>
        - Core component extensions released <br />
        - Project officially open-sourced
      </Typography>
    </Box>
  );
};
