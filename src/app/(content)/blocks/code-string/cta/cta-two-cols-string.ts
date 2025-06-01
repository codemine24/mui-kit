export const ctaTwoColsString = `import { Box, Button, Grid, Typography } from "@mui/material";

export const CTATwoColsPreview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: \`url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")\`,
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          zIndex: 1,
        }}
      />
      <Grid container sx={{ position: "relative", zIndex: 2 }} spacing={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 9, lg: 10 }}>
          <Typography
            sx={{
              color: "#555555",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            A Call To Action
          </Typography>
          <Typography
            sx={{
              color: "common.black",
              fontFamily: "serif",
              fontWeight: 500,
              fontSize: { xs: 38, md: 44, lg: 52 },
              pr: { xs: 0, md: "5%", lg: "30%" },
              lineHeight: 1,
            }}
          >
            Start your free 14-day trial today!
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3, lg: 2 }}
          sx={{
            display: { xs: "block", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" sx={{ background: "#000" }}>
            Get Started{" "}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};`
