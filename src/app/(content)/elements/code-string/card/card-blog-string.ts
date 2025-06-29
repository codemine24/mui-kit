export const cardBlogString = `import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const CardBlog = () => {
    return (
        <Card sx={{ maxWidth: 360, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Group meeting"
                sx={{ borderRadius: 2 }}
            />

            <CardContent>
                <Chip
                    label="POPULAR"
                    color="primary"
                    size="small"
                    sx={{ fontWeight: 'bold', borderRadius: '8px', mb: 1 }}
                />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Website Review Check
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Lewis Daniel"
                        sx={{ width: 32, height: 32 }}
                    />
                    <Box>
                        <Typography variant="body2" fontWeight={600}>
                            Lewis Daniel
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            January 10, 2024
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
`;
