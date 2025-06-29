export const cardImageBgString = `import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const CardImageBg = () => {
    return (
        <Card sx={{ maxWidth: 600, position: "relative" }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                sx={{ height: 300, borderRadius: "4px" }}
            />
            <CardContent sx={{ position: "absolute", inset: 0, p: "10px !important", }}>
                <Grid container sx={{ height: "100%" }}>
                    <Grid size={6} sx={{ bgcolor: "background.paper", height: "100%", p: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cupiditate?</Typography>
                            <Typography color='secondary' sx={{ mt: 2 }}>John Doe</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}`;
