export const featureProductWithCarouselString = `
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const productImage = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80";

const feedbacks = [
  {
    feedback:
      '"I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur."',
    name: "DANA DOE",
    role: "CEO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    feedback:
      '"Amazing product! It really helped our business grow. Highly recommended."',
    name: "JOHN SMITH",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    feedback:
      '"Great quality and fast delivery. Will buy again for sure!"',
    name: "JANE DOE",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export const FeatureProductWithCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 3,
        boxShadow: 3,
        p: { xs: 2, md: 4 },
        maxWidth: 900,
        mx: "auto",
        my: 4,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 220, md: 320 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fafbfc",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src={productImage}
              alt="Featured Product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#1a2440",
                fontFamily: "serif",
                mb: 1,
              }}
            >
              Featured<br />Product
            </Typography>
            <Typography sx={{ color: "#929292", mb: 2, fontSize: 16 }}>
              Aliquet adipiscing vivamus ultricies ipsum, commodo vitae, elit nec! Ipsum luctus. Eget non vitae scelerisque eget sapien!e libero, lorem nam quis vitae.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating value={5} readOnly size="small" sx={{ color: "#fbb040" }} />
            
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                mt: 1,
                minHeight: 110,
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <IconButton onClick={handlePrev} size="small" sx={{ mr: 1 }} aria-label="previous feedback">
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontStyle: "italic", color: "#929292", mb: 1, fontSize: 15 }}>
                  {feedbacks[current].feedback}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Avatar
                    src={feedbacks[current].avatar}
                    alt={feedbacks[current].name}
                    sx={{ width: 36, height: 36, mr: 1.5 }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#1a2440", fontSize: 15, lineHeight: 1 }}>{feedbacks[current].name}</Typography>
                    <Typography sx={{ color: "#929292", fontSize: 13 }}>{feedbacks[current].role}</Typography>
                  </Box>
                </Box>
              </Box>
              <IconButton onClick={handleNext} size="small" sx={{ ml: 1 }} aria-label="next feedback">
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: 150,
                fontWeight: 600,
                fontSize: 16,
                borderRadius: 2,
                boxShadow: "none",
                textTransform: "none",
              }}
            >
              VIEW DETAILS
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; 
`;