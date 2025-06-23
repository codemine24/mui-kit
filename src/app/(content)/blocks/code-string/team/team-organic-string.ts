export const teamOrganicString = `'use client';
import { Avatar, Box, Container, Grid, Typography, keyframes, useTheme } from '@mui/material';


const pulse = keyframes\`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.9);
  }
\`;

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


export const TeamOrganicPreview = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Organic Team
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}>
            Natural connections, flowing creativity
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                className="group"
                sx={{
                  position: 'relative',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: \`\${60 + Math.sin(index) * 20}% \${40 + Math.cos(index) * 15}% \${
                      70 + Math.sin(index * 2) * 10
                    }% \${30 + Math.cos(index * 3) * 20}% / \${50 + Math.sin(index * 1.5) * 15}% \${
                      60 + Math.cos(index * 2.5) * 10
                    }% \${40 + Math.sin(index * 0.5) * 25}% \${80 + Math.cos(index * 1.8) * 15}%\`,
                    background:
                      theme.palette.mode === 'dark'
                        ? \`linear-gradient(135deg, 
                            hsl(\${120 + index * 60}, 25%, 20%) 0%, 
                            hsl(\${180 + index * 40}, 20%, 25%) 50%, 
                            hsl(\${240 + index * 30}, 22%, 22%) 100%)\`
                        : \`linear-gradient(135deg, 
                      hsl(\${120 + index * 60}, 70%, 85%) 0%, 
                      hsl(\${180 + index * 40}, 60%, 90%) 50%, 
                      hsl(\${240 + index * 30}, 65%, 88%) 100%)\`,
                    height: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <Avatar
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    sx={{
                      width: 96,
                      height: 96,
                      mb: 2,
                      border: '4px solid rgba(255, 255, 255, 0.5)',
                      transition: 'all 0.3s ease',
                      '.group:hover &': {
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.800',
                      }}
                    >
                      {member.initials}
                    </Typography>
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.800',
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700', mb: 2 }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.600',
                      lineHeight: 1.6,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '.group:hover &': {
                        opacity: 1,
                      },
                    }}
                  >
                    {member.bio}
                  </Typography>

                  {/* Floating elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 16,
                      height: 16,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(255, 255, 255, 0.4)',
                      borderRadius: '50%',
                      animation: \`\${pulse} 2s infinite\`,
                      top: \`\${20 + Math.sin(index) * 10}%\`,
                      left: \`\${15 + Math.cos(index) * 10}%\`,
                      animationDelay: \`\${index * 0.2}s\`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.15)'
                          : 'rgba(255, 255, 255, 0.6)',
                      borderRadius: '50%',
                      animation: \`\${pulse} 2s infinite\`,
                      bottom: \`\${25 + Math.sin(index * 2) * 15}%\`,
                      right: \`\${20 + Math.cos(index * 1.5) * 10}%\`,
                      animationDelay: \`\${index * 0.3}s\`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 12,
                      height: 12,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.08)'
                          : 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      animation: \`\${pulse} 2s infinite\`,
                      top: \`\${60 + Math.sin(index * 3) * 20}%\`,
                      right: \`\${10 + Math.cos(index * 2) * 15}%\`,
                      animationDelay: \`\${index * 0.4}s\`,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}`; 