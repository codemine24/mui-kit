import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Stack, Typography } from "@mui/material";

export const FancyBackgroundPreview = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex", // Added for centering
        alignItems: "center", // Vertical centering
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, verticalAlign: "middle" }}>
        <Stack sx={{ justifyContent: "center" }}>
          <Box />
          <Typography>Lorem ipsum dolor sit amet.</Typography>
          <BoltIcon />
          <Typography>Lorem ipsum dolor sit amet.</Typography>
        </Stack>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Craft Beautiful
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Patterns Backgrounds
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            width: { xs: "100%", sm: "65%" },
            m: "auto",
          }}
        >
          Professional-grade background patterns and gradients. Easily copy the
          code and seamlessly integrate it into your projects.Crafted with
          modern CSS and Tailwind
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary">
            <ShoppingCartIcon />
            Add to Card
          </Button>
          <Button variant="outlined" color="primary">
            <ShoppingCartIcon />
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
