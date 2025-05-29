import { Box, Grid, Typography } from "@mui/material";

export const AboutReversedSectionsPreview = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#035E7B" }} />
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#035E7B",
              whiteSpace: "nowrap",
            }}
          >
            Our Story
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#035E7B" }} />
        </Box>

        <Typography
          sx={{
            textTransform: "uppercase",
            color: "text.primary",
            fontSize: { xs: 24, md: 32 },
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          About us
        </Typography>
      </Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              // borderRadius: 2,
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            ml: { xs: 0, md: -4, lg: -6 },
            mt: { xs: 0, md: 4, lg: 4 },
            zIndex: 2,
            bgcolor: "background.default",
            px: { xs: 2, md: 4 },
            py: { xs: 2, md: 4 },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            sx={{
              textTransform: "Capitalize",
              color: "text.primary",
              fontSize: { xs: 20, md: 22 },
              fontWeight: 500,
            }}
          >
            Mission
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
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 4 }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            mr: { xs: 0, md: -4, lg: -6 },
            mt: { xs: 0, md: 4, lg: 4 },
            zIndex: 2,
            bgcolor: "background.default",
            px: { xs: 2, md: 4 },
            py: { xs: 2, md: 4 },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            order: { xs: 2, md: 1 }
          }}
        >
          <Typography
            sx={{
              textTransform: "Capitalize",
              color: "text.primary",
              fontSize: { xs: 20, md: 22 },
              fontWeight: 500,
            }}
          >
            Vision
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
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{order: {xs: 1, md: 2}}}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
