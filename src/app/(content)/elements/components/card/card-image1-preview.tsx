import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export const CardImage1Preview = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                <Button variant="contained" endIcon={<ArrowRightAlt />}>Read More</Button>
            </CardActions>
        </Card>
    );
};