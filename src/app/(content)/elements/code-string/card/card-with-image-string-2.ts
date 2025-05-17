export const CardWithImageString2 = `import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const CardWithImagePreview2 = () => {
    return (
        <Card sx={{ maxWidth: 600, display: "flex", p: 2, gap: 2, alignItems: 'stretch', flexDirection: { xs: "column", md: "row" } }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                sx={{ width: { xs: "100%", md: 200 }, borderRadius: "8px" }}
            />
            <Box>
                <CardContent sx={{ p: 0 }}>
                    <Chip label="Startup" size="small" color="secondary" />
                    <Typography variant="h4" sx={{ my: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests.
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 0, mt: 2 }}>
                    <Button variant="text" endIcon={<ArrowRightAlt />}>Learn More</Button>
                </CardActions>
            </Box>
        </Card>
    );
}`;