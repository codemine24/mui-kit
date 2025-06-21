import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

const specialists = [
  { src: '/avatars/avatar1.jpg', radius: 180, angle: 0 },
  { src: '/avatars/avatar2.jpg', radius: 140, angle: 60 },
  { src: '/avatars/avatar3.jpg', radius: 100, angle: 120 },
  { src: '/avatars/avatar4.jpg', radius: 180, angle: 180 },
  { src: '/avatars/avatar5.jpg', radius: 140, angle: 240 },
  { src: '/avatars/avatar6.jpg', radius: 100, angle: 300 },
  { src: '/avatars/avatar7.jpg', radius: 180, angle: 45 },
];

const icons = [
  { src: '/icons/chat.png', radius: 100, angle: 0 },
  { src: '/icons/megaphone.png', radius: 140, angle: 90 },
  { src: '/icons/idea.png', radius: 100, angle: 180 },
  { src: '/icons/target.png', radius: 140, angle: 270 },
];

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const particleFloat = keyframes`
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-10px); opacity: 0.6; }
`;

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
  padding: theme.spacing(8),
  background: 'radial-gradient(circle at right, #0D0D2B, #2E0854)',
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Particle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: '#fff',
  opacity: 0.2,
  animation: `${particleFloat} 3s ease-in-out infinite`,
}));

const LeftText = styled(Box)(({ theme }) => ({
  maxWidth: '500px',
  zIndex: 2,
  '& h2': {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    fontSize: '2.8rem',
    lineHeight: 1.2,
  },
  '& h3': {
    color: '#AC8FFF',
    fontWeight: 600,
    fontSize: '2.2rem',
  },
}));

const OrbitContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '420px',
  height: '420px',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px',
  },
}));

const OrbitCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
}));

const OrbitRotating = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: `${rotate} 60s linear infinite`,
}));

const OrbitItem = styled(Box)<{ angle: number; radius: number }>(({ angle, radius }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
}));

const Hero = () => {
  return (
    <HeroWrapper>
      {/* Background Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Particle
          key={i}
          sx={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <LeftText>
        <Typography variant="h2">
          Unlock Top Marketing Talent You Thought Was Out of Reach —
        </Typography>
        <Typography variant="h3">
          Now Just One Click Away!
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #7F00FF, #E100FF)',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: '0px 4px 12px rgba(226, 0, 255, 0.4)',
            }}
          >
            START PROJECT
          </Button>
        </Box>
      </LeftText>

      <OrbitContainer>
        {[180, 140, 100].map((r, i) => (
          <OrbitCircle key={`circle-${i}`} sx={{ width: r * 2, height: r * 2 }} />
        ))}

        <OrbitRotating>
          {specialists.map((item, index) => (
            <OrbitItem key={`specialist-${index}`} angle={item.angle} radius={item.radius}>
              <Avatar
                src={item.src}
                sx={{
                  width: 48,
                  height: 48,
                  border: '2px solid #fff',
                  boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                }}
              />
            </OrbitItem>
          ))}

          {icons.map((icon, index) => (
            <OrbitItem key={`icon-${index}`} angle={icon.angle} radius={icon.radius}>
              <Box
                component="img"
                src={icon.src}
                alt="icon"
                sx={{ width: 36, height: 36, filter: 'drop-shadow(0 0 6px rgba(255, 0, 255, 0.5))' }}
              />
            </OrbitItem>
          ))}
        </OrbitRotating>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>
            20k+
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#ccc' }}>
            Specialists
          </Typography>
        </Box>
      </OrbitContainer>
    </HeroWrapper>
  );
};

export default Hero;
