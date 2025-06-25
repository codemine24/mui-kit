import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";

export const NewsletterSubscriptionLiquidPreview = () => {
  const [email, setEmail] = useState("");
  const [waveOffset, setWaveOffset] = useState(0);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(waveInterval);
  }, []);

  return (
    <Box sx={{ width: "100%", py: { xs: 2, md: 4 }, position: "relative", overflow: "hidden", bgcolor: isDark ? "#18122B" : "#f9f6fb" }}>
      {/* Liquid SVG BG */}
      <Box sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 800 700" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
            </linearGradient>
          </defs>
          <path
            d={`M0,${300 + Math.sin(waveOffset * 0.02) * 50}
                 Q${250 + Math.cos(waveOffset * 0.03) * 30},${200 + Math.sin(waveOffset * 0.025) * 40}
                 ${500 + Math.sin(waveOffset * 0.02) * 20},${250 + Math.cos(waveOffset * 0.03) * 30}
                 T1000,${300 + Math.sin(waveOffset * 0.02) * 50}
                 V1000 H0 Z`}
            fill="url(#liquidGradient)"
          />
        </svg>
      </Box>
      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 900, mx: "auto", px: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md:2} }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 40, md: 64 },
              lineHeight: 1.1,
              color: isDark ? "#fff" : "#18122B",
              mb: 1,
            }}
          >
            Liquid
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #ec4899 0%, #9333ea 50%, #4f46e5 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Intelligence
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 400,
              maxWidth: 600,
              mx: "auto",
              mt: 2,
            }}
          >
            Flow with the current of innovation. Our newsletter adapts and morphs to deliver exactly what you need, when you need it.
          </Typography>
        </Box>
        {/* Card */}
        <Box sx={{ position: "relative", maxWidth: 420, mx: "auto" }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: 6,
              background: "linear-gradient(90deg, #ec4899 0%, #9333ea 50%, #4f46e5 100%)",
              filter: "blur(32px)",
              opacity: 0.25,
              zIndex: 0,
              animation: 'pulse 2s infinite',
            }}
          />
          <Card
            sx={{
              position: "relative",
              borderRadius: 6,
              boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(147,51,234,0.10)",
              border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #fff",
              background: isDark
                ? "linear-gradient(135deg, rgba(36, 33, 54, 0.95) 0%, rgba(24, 18, 43, 0.98) 100%)"
                : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              zIndex: 1,
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 2 } }}>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Box sx={{ position: "relative", width: 80, height: 80, mx: "auto", mb: 2 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "linear-gradient(90deg, #ec4899 0%, #4f46e5 100%)",
                      animation: "spin 2s linear infinite",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 8,
                      borderRadius: "50%",
                      background: isDark ? "#18122B" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WavesIcon sx={{ fontSize: 36, color: "#9333ea" }} />
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: isDark ? "#fff" : "#18122B", mb: 1 }}>
                  Flow State
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? "#bdb4d8" : "#5b5b7a" }}>
                  Enter the stream of consciousness
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <TextField
                  type="email"
                  placeholder="Let your email flow..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                  sx={{
                    input: {
                      textAlign: "center",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      background: "linear-gradient(90deg, #fce7f3 0%, #e0e7ff 100%)",
                      borderRadius: 3,
                      color: isDark ? "#fff" : "#18122B",
                      '::placeholder': {
                        color: isDark ? "#bdb4d8" : "#5b5b7a",
                        opacity: 0.8,
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: 56,
                      borderRadius: 3,
                      background: isDark
                        ? "linear-gradient(90deg, rgba(147,51,234,0.08) 0%, rgba(236,72,153,0.08) 100%)"
                        : "linear-gradient(90deg, #fce7f3 0%, #e0e7ff 100%)",
                      boxShadow: isDark ? "0 2px 8px rgba(147,51,234,0.10)" : "0 2px 8px rgba(147,51,234,0.08)",
                    },
                  }}
                />
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                // disabled={!email}
                sx={{
                  height: 56,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background: "linear-gradient(90deg, #ec4899 0%, #9333ea 50%, #4f46e5 100%)",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(147,51,234,0.15)",
                  textTransform: "none",
                  letterSpacing: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  '&:hover': {
                    background: "linear-gradient(90deg, #db2777 0%, #7c3aed 50%, #3730a3 100%)",
                    boxShadow: "0 12px 40px rgba(147,51,234,0.20)",
                    transform: "scale(1.04)",
                  },
                  '&:disabled': {
                    background: isDark
                      ? "linear-gradient(90deg, #232136 0%, #18122B 100%)"
                      : "linear-gradient(90deg, #f3e8ff 0%, #fce7f3 100%)",
                    color: isDark ? "#bdb4d8" : "#bdb4d8",
                    boxShadow: "none",
                  },
                }}
                endIcon={<WavesIcon sx={{ fontSize: 24 }} />}
              >
                Merge with the Flow
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
