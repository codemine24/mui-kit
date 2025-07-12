"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const FocusBoxPreview = () => {
  return (
    <Grid container spacing={3} sx={{ width: "100%", maxWidth: "1140px" }}>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
        position={"relative"}
      >
        <Card
          sx={{
            height: "100%",
            transition: "0.3s",
            backgroundColor: "common.primary",
            boxShadow: "none",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1503602642458-232111445657?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              height: { xs: 350, lg: 300 },
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              width: "80%",
              margin: "auto",
              transform: "translateY(-40px)",
              boxShadow: "0px 0px 1px 1px rgba(209, 199, 199, 0.52)",
              borderRadius: "5px",
              backgroundColor: "common.secondary",
              position: "relative",
              zIndex: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                fontWeight={600}
                sx={{
                  color: "common.black",
                }}
              >
                Investment Starter Guide
              </Typography>
              <Typography variant="body2" color="common.black">
                Learn the basics of smart investing in just 30 days. Our
                beginner-friendly approach helps you build confidence and make
                informed financial decisions.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                px: 2,
                pb: 3,
                borderRadius: "0 0 5px 5px",
                backgroundColor: "#fff",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  backgroundColor: "#2975FF",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  "&:hover": {
                    backgroundColor: "#0052CC",
                  },
                }}
              >
                Get Started Now
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
        position={"relative"}
      >
        <Card
          sx={{
            height: "100%",
            transition: "0.3s",
            backgroundColor: "common.primary",
            boxShadow: "none",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              height: { xs: 350, lg: 300 },
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              width: "80%",
              margin: "auto",
              transform: "translateY(-40px)",
              boxShadow: "0px 0px 1px 1px rgba(209, 199, 199, 0.52)",
              borderRadius: "5px",
              backgroundColor: "common.secondary",
              position: "relative",
              zIndex: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                fontWeight={600}
                sx={{
                  color: "common.black",
                }}
              >
                Investment Starter Guide
              </Typography>
              <Typography variant="body2" color="common.black">
                Learn the basics of smart investing in just 30 days. Our
                beginner-friendly approach helps you build confidence and make
                informed financial decisions.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                px: 2,
                pb: 3,
                borderRadius: "0 0 5px 5px",
                backgroundColor: "#fff",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  backgroundColor: "#2975FF",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  "&:hover": {
                    backgroundColor: "#0052CC",
                  },
                }}
              >
                Get Started Now
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
