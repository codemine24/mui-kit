'use client';


import { Mail, LinkedIn } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';


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


export const TeamCardPreview = () => {
  return (
    <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container>
        <Box sx={{ mb: 16, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Team
          </Typography>
          <Typography sx={{ mx: 'auto', maxWidth: '700px', color: 'text.secondary' }}>
            Meet the talented individuals behind our success
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                className="group"
                sx={{
                  height: '100%',
                  '&:hover': { boxShadow: 6 },
                  transition: (theme) => theme.transitions.create('box-shadow'),
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 80,
                        height: 80,
                        border: 2,
                        borderColor: 'grey.200',
                      }}
                    >
                      {member.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'semibold' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', mb: 1 }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {member.bio}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        opacity: 0,
                        transition: (theme) => theme.transitions.create('opacity'),
                        '.group:hover &': {
                          opacity: 1,
                        },
                      }}
                    >
                      <IconButton size="small" href={`mailto:${member.email}`}>
                        <Mail fontSize="small" />
                      </IconButton>
                      <IconButton size="small" href={member.linkedin}>
                        <LinkedIn fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 