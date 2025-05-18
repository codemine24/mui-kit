export const cardECommerceString = `import { Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export const CardECommerce = () => {
    return (
        <Card sx={{ maxWidth: 300, position: "relative" }}>
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
}`;
