export const testimonialGridSpotlightString = `import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: 'Marcus Chen',
    title: 'Head of Product, InnovateX',
    quote: "The level of detail and customization is unparalleled. This platform has streamlined our workflow and boosted productivity by over 40%. It's a game-changer for our entire team.",
    avatar: '/images/avatar.png',
  },
  {
    id: 2,
    name: 'Isabella Rossi',
    title: 'Marketing Director, GrowthHub',
    quote: 'From the intuitive user interface to the exceptional customer support, every aspect of our experience has been outstanding. We saw a significant increase in user engagement within the first month.',
    avatar: '/images/avatar-2.png',
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'Lead Developer, Quantum Solutions',
    quote: "As a developer, I'm incredibly impressed with the robust API and clean documentation. Integrating our existing systems was seamless, saving us weeks of development time.",
    avatar: '/images/avatar.png',
  },
];

export const TestimonialGridSpotlightString = () => {
  const [spotlightId, setSpotlightId] = useState(2);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
       
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="text.secondary">
            What People Say
          </Typography>
          <Typography variant="h2" sx={{ my: 1, fontFamily: "'Merriweather', serif" }}>
            Testimonials
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto' }}>
            Siverra lectus mauris ultrices eros in. Eget egestas purus viverra accumsan in nisl
            nulla nisi scelerisque euvestibulum sed risus ultricies.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box sx={{ width: '50px', height: '2px', bgcolor: 'text.secondary' }} />
          </Box>
        </Box>

        <Box sx={{ position: 'relative', mt: { xs: 4, md: 8 } }}>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              top: '50%',
              left: \`calc(50% + (\${spotlightId - 2} * (100% / 3)))\`,
              width: 'calc(100% / 3.2)',
              height: '100%',
              bgcolor: 'background.paper',
              borderRadius: '40px',
              boxShadow: (theme) => \`0 0 0 8px \${theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]}\`,
              transition: 'left 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ position: 'relative', zIndex: 2 }}
          >
            {testimonials.map((testimonial) => {
              const isSpotlight = spotlightId === testimonial.id;
              return (
                <Grid
                  key={testimonial.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                  onMouseEnter={() => setSpotlightId(testimonial.id)}
                  onMouseLeave={() => setSpotlightId(2)}
                  sx={{
                    transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
                    transform: isSpotlight ? 'scale(1)' : 'scale(0.9)',
                    opacity: isSpotlight ? 1 : 0.6,
                  }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      boxShadow: 'none',
                      height: '100%',
                      bgcolor: 'transparent',
                    }}
                  >
                    <CardContent>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 100,
                          height: 100,
                          m: 'auto',
                          mb: 3,
                          border: '4px solid',
                          borderColor: (theme) => theme.palette.grey[200],
                          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                        }}
                      />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, fontStyle: 'italic' }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="overline" color="text.secondary">
                        {testimonial.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};`; 