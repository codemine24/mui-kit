import { Card, CardMedia, Box, CardContent, Typography, Stack } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

export const ProfileCardPreview2 = () => {
    return (
        <Card sx={{ maxWidth: 345, margin: "auto", borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                height="180"
                image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Profile Image"
            />
            <Box sx={{ bgcolor: '#1F2937', color: 'white', p: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <HeadphonesIcon fontSize="small" />
                <Typography variant="body2">Focusing</Typography>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    Patterson johnson
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.
                </Typography>
                <Stack spacing={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BusinessIcon fontSize="small" color="action" />
                        <Typography variant="body2">MerakiTeam</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon fontSize="small" color="action" />
                        <Typography variant="body2">California</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2">patterson@example.com</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}