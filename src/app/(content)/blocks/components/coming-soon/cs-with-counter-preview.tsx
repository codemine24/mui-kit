import { Box, Grid, Typography } from "@mui/material";

export const CSWithCounterPreview = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "400px", md: "500px", lg: "600px" },
        width: "100%",
        bgcolor: "#0a0f2c",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          letterSpacing: 2,
          mb: 6,
          textAlign: "center",
          fontSize: { xs: 32, md: 48 },
        }}
      >
        We are coming soon
      </Typography>
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: 4,
          px: { xs: 3, md: 6 },
          py: 4,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          width: { xs: "100%", md: "600px", lg: "800px" },
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          {[
            { label: "Days", value: "2" },
            { label: "Hours", value: "06" },
            { label: "Minutes", value: "15" },
            { label: "Seconds", value: "48" },
          ].map((item) => (
            <Grid size={3} key={item.label}>
              <Typography
                sx={{
                  color: "#5e78f5",
                  fontWeight: 400,
                  fontSize: { xs: 32, md: 48 },
                }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", color: "#a3accb" }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Description Text */}
      <Typography
        variant="body2"
        sx={{
          maxWidth: 600,
          mt: 4,
          textAlign: "center",
          color: "#a3accb",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Typography>
    </Box>
  );
};
