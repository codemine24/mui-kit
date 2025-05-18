export const cardGridString = `import { Box, Grid, Paper, Typography, Avatar, Stack, Container } from '@mui/material';

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

    return (
        <Grid container spacing={0} sx={{ width: { xs: "100%", md: "90%" } }}>
            {testimonials.map((testimonial, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            border: '1px solid',
                            borderColor: 'grey.200',
                            p: 4,
                            height: '100%',
                            borderTopWidth: '1px',
                            borderBottomWidth: '0.5px',
                            borderRadius: 0,
                            borderLeftWidth: index % 2 === 0 ? '1px' : '0.5px',
                            borderRightWidth: index % 2 === 0 ? '0.5px' : '1px',
                            borderStyle: 'solid',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6" textAlign="center" fontWeight={600} gutterBottom>
                            {testimonial.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                            "{testimonial.quote}"
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
            ))}
        </Grid>
    );
};
`