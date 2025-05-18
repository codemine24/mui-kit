export const cardProperty1String = `import Image from "next/image";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { DirectionsCar, Bathtub, Nightlight } from "@mui/icons-material";

export const CardProperty1 = () => {
    return (
        <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, p: 2 }}>
            <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Paella dish"
                sx={{ height: 300, borderRadius: 2 }}
            />
            <CardContent sx={{ p: 0, mt: 2 }}>
                <Typography variant="body2" component="div" color="text.secondary" gutterBottom>
                    $240,000
                </Typography>
                <Typography variant="h6">
                    123 Wallaby Avenue, Park Road
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <DirectionsCar fontSize="small" color="primary" />
                        <Typography variant="caption">2 spaces</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Bathtub fontSize="small" color="primary" />
                        <Typography variant="caption">2 rooms</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Nightlight fontSize="small" color="primary" />
                        <Typography variant="caption">4 rooms</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
`