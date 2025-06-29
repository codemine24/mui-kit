export const cardBottomImageString = `import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardBottomImage = () => {
    return (
        <Card sx={{ maxWidth: 380 }}>
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
}`;
