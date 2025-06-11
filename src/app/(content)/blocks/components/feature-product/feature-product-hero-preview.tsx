import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Updated space station image URL - using a 3D ring-shaped space station similar to the reference
const productImage = "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

export const FeatureProductHero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: `url('https://www.transparenttextures.com/patterns/stardust.png'), radial-gradient(ellipse at center, #1a1f3a 0%, #0b0f1e 100%)`,
        backgroundSize: "300px 300px, cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stars overlay for better effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                      radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                      radial-gradient(2px 2px at 160px 30px, #ddd, transparent)`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 100px",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "1100px" },
          minHeight: { xs: 400, md: 500 },
          background: "rgba(13, 18, 35, 0.9)",
          borderRadius: 4,
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          zIndex: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="flex-start" spacing={0}>
          {/* Left: Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ color: "#fff", pr: { md: 4 }, position: "relative", zIndex: 3 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                  lineHeight: 1,
                  fontSize: { xs: 36, md: 52 },
                  textAlign: { xs: "center", md: "left" },
                  textTransform: "uppercase",
                  background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FEATURED<br />PRODUCT
              </Typography>
              <Box 
                sx={{ 
                  width: 80, 
                  height: 4, 
                  background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.3) 100%)", 
                  mb: 4, 
                  ml: { xs: "auto", md: 0 }, 
                  mr: { xs: "auto", md: 0 } 
                }} 
              />
              <Typography 
                sx={{ 
                  color: "rgba(255,255,255,0.85)", 
                  mb: 5, 
                  fontSize: { xs: 16, md: 18 }, 
                  lineHeight: 1.6,
                  maxWidth: 450, 
                  textAlign: { xs: "center", md: "left" } 
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.8)",
                  borderWidth: 2,
                  fontWeight: 600,
                  fontSize: 16,
                  letterSpacing: 1,
                  borderRadius: 2,
                  px: 6,
                  py: 2,
                  display: "block",
                  mx: { xs: "auto", md: 0 },
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  '&:hover': { 
                    background: '#fff', 
                    color: '#0b0f1e', 
                    borderColor: '#fff',
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(255,255,255,0.3)"
                  },
                }}
              >
                BUY NOW
              </Button>
            </Box>
          </Grid>
          
          {/* Right: Product Image */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: { xs: "static", md: "absolute" },
                right: { md: -150 },
                top: { md: "50%" },
                transform: { md: "translateY(-50%)" },
                mt: { xs: 6, md: 0 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: 350, md: 500 },
                  width: "100%",
                }}
              >
                <img
                  src={productImage}
                  alt="Featured Space Station"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 15px 50px rgba(0,0,0,0.8)) brightness(1.1) contrast(1.1)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
                {/* Glow effect behind the image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120%",
                    height: "120%",
                    background: "radial-gradient(circle, rgba(100,149,237,0.3) 0%, transparent 70%)",
                    borderRadius: "50%",
                    zIndex: -1,
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </Box>
  );
}; 