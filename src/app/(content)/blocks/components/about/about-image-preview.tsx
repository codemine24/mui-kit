import { Box, Divider, Grid, Typography } from "@mui/material";

export const AboutImagePreview = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} sx={{ px: { xs: 0, md: 2 }, py: { xs: 2, md: 2 } }}>
          <Typography sx={{ textTransform: "uppercase", color: "#DA9100" }}>
            Subtitle
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
          <Divider
            sx={{
              my: 2,
              width: "10%",
              backgroundColor: "#DA9100",
              height: 4,
            }}
          />

          <Typography
            sx={{
              py: 2,
              fontSize: { xs: 16, md: 18 },
              color: "text.secondary",
              fontWeight: 200,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto, consequatur .
          </Typography>

          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            Mission
          </Typography>
          <Typography sx={{ pb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi.
          </Typography>
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            Mission
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={"img"}
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              //   borderRadius: 2,
            }}
          />
          <Typography
            sx={{
              borderLeft: (theme) => `2px solid ${theme.palette.divider}`,
              pl: 2,
              mt: 2,
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ducimus aliquid unde sint nulla sapiente. Rem consequatur deserunt
            repudiandae aliquam corrupti sit dolore sequi sed eaque voluptatum
            quia, ea natus blanditiis amet nam! Natus?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
