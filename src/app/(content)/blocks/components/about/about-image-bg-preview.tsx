import { Box, Button, Grid, Typography } from "@mui/material";

export const AboutImageBgPreview = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", height: "400px" }}>
            {/* Yellow Background */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(136deg,#d55296 0%,#e60077 100%)",
              }}
            />
            {/* Image */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
                mt: 3,
                ml: 3,
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ px: { xs: 0, md: 8 } , py: { xs: 6, md: 2 }}}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#e60077",
              borderLeft: "2px solid #e60077",
              px: 2,
              display: "inline-block",
            }}
          >
            Since 2011
          </Typography>

          <Typography
            sx={{
              textTransform: "uppercase",
              color: "text.primary",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 600,
            }}
          >
            About us
          </Typography>

          <Typography
            sx={{
              pt: 2,
              color: "text.secondary",
              fontWeight: 200,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto, consequatur .
          </Typography>
          <Typography
            sx={{
              py: 2,
              color: "text.secondary",
              fontWeight: 200,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto, consequatur .
          </Typography>

          <Button
            variant="outlined"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: { xs: 12, md: 14 },
              color: "#e60077",
              borderColor: "#e60077",
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
