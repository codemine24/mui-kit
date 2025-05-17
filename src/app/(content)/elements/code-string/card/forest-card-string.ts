export const ForestCardString = `import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ForestCardPreview = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: 400,
                backgroundImage: 'url(https://images.unsplash.com/photo-1506765515384-028b60a970df)', // Replace with your own image if needed
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 4,
                py: 3,
                overflow: 'hidden',
            }}
        >
            <Box sx={{ backdropFilter: 'brightness(0.5)' }} />

            <Box sx={{ zIndex: 1 }}>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>07</Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, fontStyle: 'italic' }}>
                    THE MYSTERIES OF<br />THE FOREST
                </Typography>
            </Box>

            <Paper
                elevation={3}
                sx={{
                    maxWidth: 300,
                    backgroundColor: 'rgba(108, 43, 85, 0.85)',
                    color: 'white',
                    p: 2.5,
                    borderRadius: 1,
                    zIndex: 1,
                }}
            >
                <Typography variant="body2" sx={{ mb: 2 }}>
                    Forests are truly amazing places. Combining impressive biodiversity with natural beauty, the woods of the world can be both captivating and perplexing. A hike through a forest can be a relaxing way to pass an afternoon or, sometimes, a glimpse into the unknown.
                </Typography>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#fff', color: '#000', textTransform: 'none' }} endIcon={<ArrowForwardIosIcon fontSize="small" />}>
                    Learn More
                </Button>
            </Paper>
        </Box>
    );
}
`;
