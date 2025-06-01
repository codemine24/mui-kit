import { Box, Typography } from "@mui/material";

export const CopyrightSingleColPreview = () => {
  return (
    <Box sx={{ py: 1, backgroundColor: "rgba(0, 0, 0, 0.9)", width: "100%" }}>
      <Typography
        sx={{
          color: "#9a9a9a",
          fontSize: { xs: 12, md: 14 },
          textAlign: "center",
        }}
      >
        @{new Date().getFullYear()} Company Inc. All rights reserved
      </Typography>
    </Box>
  );
};
