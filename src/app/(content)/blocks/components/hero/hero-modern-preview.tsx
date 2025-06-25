import { Box, Typography, Button, TextField, Stack } from "@mui/material";

export const HeroModernPreview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: { xs: 1, sm: 2, md: 10 },
        py: { xs: 2, md: 8 },
        bgcolor: "background.paper",
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={{ xs: 4, sm: 6, md: 10, lg: 12 }}
        alignItems={{ xs: 'flex-start', lg: 'center' }}
        justifyContent="center"
        sx={{ maxWidth: 1440, mx: "auto", width: "100%" }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1, maxWidth: 520, width: '100%', mx: { xs: "auto", lg: 0 }, py: { xs: 4, md: 8 }, pr: { lg: 6 } }}>
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "inline-block",
                bgcolor: "#000",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                mb: 2,
              }}
            >
              New Release
            </Box>
          </Box>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem", lg: "4.2rem" },
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: -1,
              wordBreak: 'break-word',
              mb: 2,
            }}
          >
            Meet Your
            <Box component="span" sx={{ display: "block", fontWeight: 900 }}>
              Next-Gen Workspace
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: { xs: 16, md: 18 },
              mb: 4,
              maxWidth: 420,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            All your projects, docs, and team collaboration in one place. Boost productivity, stay organized, and work smarter with powerful tools designed for modern teams and creators.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, maxWidth: 500 }}>
              <TextField
                placeholder="Enter your email"
                size="medium"
                fullWidth
                sx={{ bgcolor: "background.paper", borderRadius: 2, color: "text.primary" }}
                InputProps={{
                  sx: { borderRadius: 2 },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "50%" },
                  bgcolor: "#000",
                  color: "#fff",
                  px: 3,
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': { bgcolor: "#222" },
                }}
              >
                Join Waitlist
              </Button>
            </Box>
          </Box>
          <Typography sx={{ color: "#6b7280", fontSize: 14 }}>
            Join 50,000+ professionals already using our platform
          </Typography>
        </Box>
        {/* Right Side */}
        <Box sx={{ 
          flex: 1, 
          display: { xs: 'none', md: 'flex' }, 
          justifyContent: { xs: 'flex-start', lg: 'center' }, 
          alignItems: { xs: 'center', lg: 'center' }, 
          width: "100%", 
          mt: { xs: 2, lg: 0 } 
        }}>
          <Box sx={{ position: "relative", display: "flex", justifyContent: "center", width: { xs: '100%', sm: 200, md: 260, lg: 320 }, maxWidth: { xs: '100%', sm: 320, md: 380 }, height: { xs: 180, sm: 200, md: 260, lg: 380 } }}>
            <Box
              sx={{
                aspectRatio: { xs: '1/1', md: '4/5' },
                width: '100%',
                height: '100%',
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: 3,
                backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Optionally overlay a semi-transparent dark layer for contrast */}
              <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.10)', borderRadius: 4 }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { xs: -18, md: -32 },
                right: { xs: -18, md: -32 },
                width: { xs: 44, md: 84 },
                height: { xs: 44, md: 84 },
                backgroundColor: "background.paper",
                borderRadius: "50%",
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 20, md: 32 },
                  height: { xs: 20, md: 32 },
                  bgcolor: "#000",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
} 