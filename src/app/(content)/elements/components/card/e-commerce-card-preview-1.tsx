import { Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export const ECommerceCardPreview1 = () => {
    return (
        <Card sx={{ maxWidth: 300, mx: "auto", position: "relative" }}>
            <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    I am super dog for you
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                <Button variant="contained" color="secondary" endIcon={<ArrowRightAlt />}>Read More</Button>
            </CardActions>

            <Chip label="$156" size="small" color="secondary" sx={{ position: "absolute", top: 6, right: 6, borderRadius: "4px" }} />
        </Card>
    )
}