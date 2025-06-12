export const featureProductHeroString = `
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const productImage = "https://i.ibb.co/3yQz7Qw/spacestation.png"; // Example 3D space station image

export const FeatureProductHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        background: "radial-gradient(ellipse at center, #23294d 0%, #0a0e1a 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Semi-transparent overlay for effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(20, 24, 40, 0.7)",
          zIndex: 1,
        }}
      />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", zIndex: 2, maxWidth: 1200, mx: "auto" }}
      >
        {/* Left: Text Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ color: "#fff", px: { xs: 2, md: 6 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                mb: 2,
                lineHeight: 1.1,
                fontSize: { xs: 32, md: 44 },
              }}
            >
              FEATURED<br />PRODUCT
            </Typography>
            <Box sx={{ width: 60, height: 3, background: "#fff", mb: 3 }} />
            <Typography sx={{ color: "#e0e0e0", mb: 3, fontSize: 17, maxWidth: 420 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Typography sx={{ color: "#b0b0b0", mb: 3, fontSize: 14, maxWidth: 420 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor feugiat nibh sem, vel viverra.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontWeight: 600,
                fontSize: 16,
                borderRadius: 2,
                px: 4,
                py: 1.2,
                '&:hover': { background: '#fff', color: '#23294d', borderColor: '#fff' },
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Grid>
        {/* Right: Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: 260, md: 380 },
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src={productImage}
              alt="Featured Product"
              style={{
                maxWidth: "100%",
                maxHeight: 340,
                objectFit: "contain",
                filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; `;