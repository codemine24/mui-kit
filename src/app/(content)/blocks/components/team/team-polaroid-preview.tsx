'use client';


import { Avatar, Box, Container, Grid, Typography } from '@mui/material';

export const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: '/images/avatar.png',
    initials: 'SC',
    bio: 'Passionate about building products that make a difference. 10+ years in tech leadership.',
    email: 'sarah@company.com',
    linkedin: '#',
  },
  {
    name: 'Alex Johnson',
    role: 'Head of Operations',
    image: '/images/avatar-2.png',
    initials: 'AJ',
    bio: 'Operations leader focused on scaling processes and building efficient systems.',
    email: 'alex@company.com',
    linkedin: '#',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Design',
    image: '/images/avatar.png',
    initials: 'EW',
    bio: 'Creative director focused on user-centered design and brand experiences.',
    email: 'emily@company.com',
    linkedin: '#',
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    image: '/images/avatar-2.png',
    initials: 'DK',
    bio: 'Product strategist with a track record of launching successful digital products.',
    email: 'david@company.com',
    linkedin: '#',
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Marketing',
    image: '/images/avatar.png',
    initials: 'LT',
    bio: 'Growth marketing expert specializing in digital campaigns and brand building.',
    email: 'lisa@company.com',
    linkedin: '#',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    image: '/images/avatar-2.png',
    initials: 'MR',
    bio: 'Full-stack engineer with expertise in scalable systems and team leadership.',
    email: 'marcus@company.com',
    linkedin: '#',
  },
]; 

export const TeamPolaroidPreview = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container>
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary', fontSize: { xs: 28, md: 36 } }}
          >
            Team Memories
          </Typography>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: '700px',
              color: 'text.secondary',
            }}
          >
            Captured moments, lasting impressions
          </Typography>
        </Box>
        <Grid container spacing={8} justifyContent="center">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                className="group"
                sx={{
                  position: 'relative',
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)}deg)`,
                  transition: (theme) => theme.transitions.create('transform'),
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* Polaroid frame */}
                <Box
                  sx={{
                    bgcolor: 'white',
                    p: 2,
                    pb: 5,
                    boxShadow: 8,
                    borderRadius: 1,
                    backgroundColor: 'background.paper',
                    transition: (theme) => theme.transitions.create('box-shadow'),
                    '&:hover': {
                      boxShadow: 16,
                    },
                  }}
                >
                  {/* Photo area */}
                  <Box
                    sx={{
                      aspectRatio: '1 / 1',
                      bgcolor: 'grey.100',
                      mb: 2,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={member.image}
                      alt={member.name}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      {member.initials}
                    </Avatar>

                    {/* Vintage filter overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to bottom right, rgba(255, 235, 153, 0.2), transparent, rgba(255, 198, 179, 0.2))',
                        mixBlendMode: 'overlay',
                      }}
                    />
                  </Box>

                  {/* Handwritten text area */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'text.primary' }}
                    >
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'cursive', color: 'warning.dark' }}>
                      {member.role}
                    </Typography>
                  </Box>
                </Box>

                {/* Tape effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 64,
                    height: 24,
                    bgcolor: 'rgba(255, 229, 102, 0.8)',
                    borderRadius: '2px',
                    boxShadow: 1,
                    border: '1px solid rgba(255, 214, 0, 0.5)',
                  }}
                />

                {/* Hover info */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    p: 3,
                    borderRadius: 1,
                    opacity: 0,
                    transition: (theme) => theme.transitions.create('opacity'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '.group:hover &': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'warning.light', mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {member.bio}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 