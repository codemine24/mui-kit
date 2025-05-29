import { Box, Grid, Typography } from "@mui/material";

export const AboutVideoPreview = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={"img"}
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              //   borderRadius: 2,
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ p: { xs: 2, md: 4 }, background: "#5B9279" }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "white",
              letterSpacing: 6,
              fontSize: { xs: 12, md: 14 },
            }}
          >
            Sub Heading
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "white",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 500,
              letterSpacing: 2,
            }}
          >
            About us
          </Typography>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 2,
              fontSize: { xs: 12, md: 14 },
            }}
          >
            We started this journey in 2011 and moving forward we are providing
            quality service to our clients.
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 12, md: 14 },
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto, consequatur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Neque maxime laudantium placeat nemo
            dolorum vel vitae, perferendis corporis voluptas vero animi
            excepturi a quae non pariatur itaque delectus quia ipsam!
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 12, md: 14 },
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto.
          </Typography>

            
        </Grid>
      </Grid>
    </Box>
  );
};
