import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardWithImagePreview3() {
    return (
        <Card sx={{ maxWidth: 380, mx: "auto" }}>
            <CardContent>
                <Typography variant="h5">Special New Arrivals</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor ducimus laboriosam, nisi a quisquam voluptas quaerat nulla consequatur quod impedit illum delectus cupiditate dolorum?
                </Typography>
                <CardMedia
                    component="img"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                    sx={{ height: 250, borderRadius: "8px", mt: 3 }}
                />
            </CardContent>
        </Card>
    )
}