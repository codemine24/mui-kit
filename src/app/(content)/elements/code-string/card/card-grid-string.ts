export const cardGridString = `import { Avatar, Box, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export const CardGridPreview = () => {
    const testimonials = [
        {
            title: "Very easy this was to integrate",
            quote: "If you care for your time, I hands down would go with this.",
            author: "Bonnie Green",
            role: "Developer at Open AI",
            avatar: "/api/placeholder/40/40"
        },
        {
            title: "Solid foundation for any project",
            quote: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            author: "Roberta Casas",
            role: "Lead designer at Dropbox",
            avatar: "/api/placeholder/40/40"
        },
        {
            title: "Mindblowing workflow",
            quote: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
            author: "Jese Leos",
            role: "Software Engineer at Facebook",
            avatar: "/api/placeholder/40/40"
        },
        {
            title: "Efficient Collaborating",
            quote: "You have many examples that can be used to create a fast prototype for your team.",
            author: "Joseph McFall",
            role: "CTO at Google",
            avatar: "/api/placeholder/40/40"
        }
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const columns = isMobile ? 1 : 2;

    return (
        <Grid container sx={{ width: { xs: "100%", md: "90%" } }}>
            {testimonials.map((testimonial, index) => {
                const isLastCol = (index + 1) % columns === 0;
                const isLastRow = index >= testimonials.length - columns;

                return (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                borderColor: 'divider',
                                borderStyle: 'solid',
                                borderWidth: '0px',
                                borderTopWidth: '1px',
                                borderLeftWidth: '1px',
                                ...(isLastCol && { borderRightWidth: '1px' }),
                                ...(isLastRow && { borderBottomWidth: '1px' }),
                                p: 4,
                                borderRadius: 0,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography variant="h6" textAlign="center" fontWeight={600} gutterBottom>
                                {testimonial.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                                {testimonial.quote}
                            </Typography>
                            <Box mt="auto">
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar src={testimonial.avatar} alt={\`\${testimonial.author} avatar\`} sx={{ width: 32, height: 32 }} />
                                    <Box>
                                        <Typography variant="body2" fontWeight={500}>
                                            {testimonial.author}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
};
`