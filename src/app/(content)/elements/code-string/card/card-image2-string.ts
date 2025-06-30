export const cardImage2String = `import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const CardImage2 = () => {
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
