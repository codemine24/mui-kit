export const cardProperty2String = `import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import WifiIcon from '@mui/icons-material/Wifi';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';

export const CardProperty2 = () => {
    return (
        <Card sx={{ maxWidth: 360, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" // Replace with actual image if needed
                alt="Wooden House"
                sx={{ borderRadius: 2 }}
            />

            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" fontWeight={600}>
                        Wooden House, Florida
                    </Typography>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                        <Typography variant="body2" fontWeight={500}>5.0</Typography>
                    </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" mb={2}>
                    Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                </Typography>

                <Stack direction="row" spacing={1} mb={2}>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
                        <PhotoCameraIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
                        <WifiIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
                        <HomeIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
                        <TvIcon fontSize="small" />
                    </IconButton>
                    <Chip
                        label="+ 20"
                        size="small"
                        sx={{ backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: 2, fontSize: 12, px: 0.5, py: 2, fontWeight: 600 }}
                    />
                </Stack>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#1A202C', color: 'white', textTransform: 'none', borderRadius: 2 }}
                >
                    Reserve
                </Button>
            </CardContent>
        </Card>
    );
}`;
