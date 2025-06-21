import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HeroParallaxPreview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box component="main" sx={{ height: '200vh', backgroundColor: '#0f172a' }}>
      <Box
        component="section"
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Parallax Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s linear',
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.2) 100%)',
            zIndex: 2,
          }}
        />

        {/* Foreground Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            textAlign: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', px: 3 }}>
            <Box
              sx={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'all 1s cubic-bezier(.4,0,.2,1)',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#34d399',
                  letterSpacing: 2,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                EXPLORE THE UNKNOWN
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mt: 3,
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#fff',
                  lineHeight: 1.1,
                }}
              >
                Journey Beyond
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #34d399, #2dd4bf, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  Expectations
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 5,
                  color: '#e0e7ef',
                  maxWidth: 600,
                  mx: 'auto',
                  fontWeight: 400,
                }}
              >
                Discover breathtaking landscapes and create memories that last a lifetime. Adventure awaits at every summit.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                sx={{ mt: 6 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #059669, #06b6d4)',
                    color: '#fff',
                    px: 6,
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderRadius: 999,
                    boxShadow: 3,
                    textTransform: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #047857, #0891b2)',
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                >
                  Start Adventure
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#34d399',
                    color: '#34d399',
                    px: 6,
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderRadius: 999,
                    textTransform: 'none',
                    background: 'rgba(255,255,255,0.05)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: '#34d399',
                      color: '#111827',
                      borderColor: '#34d399',
                    },
                  }}
                >
                  View Gallery
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: 32,
            transform: 'translateX(-50%)',
            zIndex: 4,
            color: 'rgba(255,255,255,0.7)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(-10px)' },
            },
          }}
        >
          <Typography variant="body2" sx={{ mb: 1, fontSize: '1rem' }}>
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 20,
              height: 30,
              border: '2px solid rgba(255,255,255,0.4)',
              borderRadius: 16,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 16,
                background: 'rgba(255,255,255,0.6)',
                borderRadius: 2,
                mt: 1.5,
                animation: 'pulse 1.5s infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.3 },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroParallaxPreview;
