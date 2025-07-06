export const cardProfile3String = `import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CardProfile3 = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 3 }}>
            <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Contemplative Reptile"
                sx={{ borderRadius: "999px", height: 140, width: 140, mx: "auto" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Stack spacing={2}>
                    <Box>
                        <Typography gutterBottom variant="h6">
                            Patterson Johnson
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Designer
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus laboriosam molestiae quae obcaecati soluta facilis natus enim, laudantium nihil earum
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}`;
