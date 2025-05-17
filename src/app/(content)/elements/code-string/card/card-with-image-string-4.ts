export const CardWithImageString4 = `import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid";

export const CardWithImagePreview4 = () => {
    return (
        <Card sx={{ maxWidth: 600, mx: "auto", position: "relative" }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                sx={{ height: 300, borderRadius: "4px" }}
            />
            <CardContent sx={{ position: "absolute", inset: 0, p: "10px !important", }}>
                <Grid2 container sx={{ height: "100%" }}>
                    <Grid2 size={6} sx={{ bgcolor: "background.paper", height: "100%", p: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cupiditate?</Typography>
                            <Typography color='secondary' sx={{ mt: 2 }}>John Doe</Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    )
}`