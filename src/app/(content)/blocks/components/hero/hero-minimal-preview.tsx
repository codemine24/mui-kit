import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const HeroMinimalPreview = () => {
  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 14 },
        py: { xs: 2, md: 1 },
        bgcolor: 'background.paper',
      }}
    >
      {/* Subtle background gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'background.paper',
        }}
      />
      <Box sx={{ maxWidth: 1600, mx: 'auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 8, lg: 0 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Side */}
          <Box sx={{ flex: 1, maxWidth: 520, width: '100%', py: { xs: 6, md: 10 }, pr: { lg: 6 } }}>
            <Stack spacing={5}>
              <Stack spacing={2.5}>
                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#9ca3af',
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                    }}
                  >
                    Introducing
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4.2rem' },
                      fontWeight: 300,
                      lineHeight: 1.05,
                      letterSpacing: -1,
                      wordBreak: 'break-word',
                    }}
                  >
                    The Ultimate
                    <Box component="span" sx={{ display: 'block', fontWeight: 900 }}>
                      Productivity Hub
                    </Box>
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: '#64748b',
                    fontSize: { xs: 16, md: 18 },
                    maxWidth: 420,
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Supercharge your workflow with powerful tools for teams and creators. Organize projects, collaborate in real time, and bring your ideas to life—all in one beautiful workspace.
                </Typography>
              </Stack>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                alignItems={{ xs: 'flex-start', sm: 'center' }} 
                spacing={{ xs: 2, sm: 3 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#000',
                    color: '#fff',
                    borderRadius: 999,
                    px: 4,
                    width: { xs: '100%', md: 'auto' },
                    height: 44,
                    fontWeight: 400,
                    fontSize: 16,
                    boxShadow: 'none',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    minWidth: 180,
                    '&:hover': { bgcolor: '#111' },
                  }}
                  endIcon={<ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />}
                >
                  Get Started Free
                </Button>
                <Typography sx={{ color: '#6b7280', fontSize: 14, fontWeight: 300 }}>
                  No credit card required. Start collaborating instantly.
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* Right Side */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Box sx={{ position: 'relative', width: { xs: 260, sm: 320, md: 360, lg: 400 }, height: { xs: 260, sm: 320, md: 360, lg: 400 } }}>
              {/* Main image circle */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              />
              {/* Top right white circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 24, md: 32 },
                  right: { xs: 24, md: 32 },
                  width: { xs: 64, md: 96 },
                  height: { xs: 64, md: 96 },
                  bgcolor: 'background.paper',
                  borderRadius: '50%',
                  boxShadow: 2,
                }}
              />
              {/* Bottom left gray circle */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 24, md: 32 },
                  left: { xs: 24, md: 32 },
                  width: { xs: 44, md:76 },
                  height: { xs: 44, md: 76 },
                  bgcolor: 'background.paper',
                  borderRadius: '50%',
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
} 