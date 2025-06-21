export const testimonialGridMultiColumnString = `import { Avatar, Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const rightColumnTestimonials = [
  {
    id: 1,
    text: 'Click edit button to change this text. Lorem ipsum dolor sit amet.',
    name: 'FIRSTNAME SURNAME',
    title: 'Designer',
  },
  {
    id: 2,
    text: 'Click edit button to change this text. Lorem ipsum dolor sit amet.',
    name: 'FIRSTNAME SURNAME',
    title: 'Designer',
    avatar: '/images/avatar.png',
  },
  {
    id: 3,
    text: 'Click edit button to change this text. Lorem ipsum dolor sit amet.',
    name: 'FIRSTNAME SURNAME',
    title: 'Designer',
    avatar: '/images/avatar-2.png',
    highlighted: true,
  },
];

export const TestimonialGridMultiColumnString = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Box
          sx={{
            display: 'inline-block',
            mb: 2,
            position: 'relative',
            height: '22px',
            width: '60px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '2px',
              bgcolor: 'text.primary',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <Box
            sx={{
              width: '2px',
              height: '100%',
              bgcolor: 'text.primary',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Testimonials
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: 'text.secondary', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Sub Heading
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{  height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leoNam commodo suscipit quam. Etiam rhoncus.
                Nunc nonummy metus.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                adipiscing sem neque sed ipsum. Maecenas egestas arcu quis ligula mattis placerat.
                Cras varius.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. In
                enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. In ut quam vitae odio
                lacinia tincidunt.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Vivamus euismod mauris. Sed cursus turpis vitae tortor. Maecenas tempus, tellus
                eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                ipsum.
              </Typography>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>FIRSTNAME SURNAME</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  Designer
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={{ xs: 2, md: 4 }}>
            {rightColumnTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                variant="outlined"
                sx={{
                  borderWidth: testimonial.highlighted ? 2 : 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme => theme.palette.mode === 'light' 
                      ? '0 8px 25px rgba(0, 0, 0, 0.15)'
                      : '0 8px 25px rgba(255, 255, 255, 0.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                    {testimonial.text}
                  </Typography>
                  <Box sx={testimonial.avatar ? { display: 'flex', alignItems: 'center' } : undefined}>
                    {testimonial.avatar && (
                      <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                    )}
                    <Box>
                      <Typography sx={{ fontWeight: 'bold' }}>{testimonial.name}</Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};`; 