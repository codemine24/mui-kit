import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const productImage =
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";

export const FeatureProductSimplePreview = () => {
  return (
    <Box
      sx={{
        background: "#fafbfc",
        borderRadius: 3,
        boxShadow: 1,
        p: { xs: 2, md: 4 },
        maxWidth: 900,
        mx: "auto",
        my: 4,
        minHeight: 340,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} alignItems="center">
        {/* Left: Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ pr: { md: 6 }, py: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#1a2440",
                fontFamily: "serif",
                mb: 2,
              }}
            >
              Featured
              <br />
              Product
            </Typography>
            <Box sx={{ width: 40, height: 2, bgcolor: "#1a2440", mb: 2 }} />
            <Typography sx={{ color: "#929292", mb: 2, fontSize: 15 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Typography sx={{ color: "#929292", fontSize: 14, mb: 2 }}>
              <Box component={"span"} style={{ fontStyle: "italic" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </Box>
              <br />
              <Box
                component={"span"}
                style={{ fontWeight: 700, color: "#1a2440", letterSpacing: 1 }}
              >
                FIRSTNAME SURNAME, REVIEWER
              </Box>
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                px: 3,
                py: 1,
                fontSize: 15,
                borderColor: "#1a2440",
                color: "#1a2440",
                textTransform: "none",
                mt: 1,
                "&:hover": { borderColor: "#1a2440", background: "#f0f1f3" },
              }}
            >
              VIEW DETAILS
            </Button>
          </Box>
        </Grid>
        {/* Right: Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 200, md: 260 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            <Box
              component={"img"}
              src={productImage}
              alt="Featured Product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
