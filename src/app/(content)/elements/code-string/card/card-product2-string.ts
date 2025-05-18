export const cardProduct2String = `import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

export const ProductCardPreview2 = () => {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" height="200" image="https://images.unsplash.com/photo-1629367494173-c78a56567877" alt="Paella" />
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography fontWeight="bold">Apple AirPods</Typography>
                    <Typography color="primary" fontWeight="bold">$95.00</Typography>
                </Box>
                <Typography variant="body2" mt={1}>
                    With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 1 }}>Add to Cart</Button>
            </CardContent>
        </Card>
    )
}`