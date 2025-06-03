import { KeyboardArrowUp } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";

export const CopyrightTwoColPreview = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        px: { xs: 2, md: 4 },
        py: 1,
        width: "100%",
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#9a9a9a",
            fontSize: { xs: 12, md: 14 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          @{new Date().getFullYear()} Company Inc. All rights reserved
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <IconButton
          onClick={handleScrollToTop}
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
            padding: 0.2,
            color: "white",
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Grid>
    </Grid>
  );
};
