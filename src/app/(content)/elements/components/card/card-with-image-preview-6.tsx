import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const CardWithImagePreview6 = () => {
    return (
        <Card sx={{ maxWidth: 500, display: "flex", p: 2, gap: 2, alignItems: 'stretch', flexDirection: { xs: "column", md: "row" } }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                sx={{ width: { xs: "100%", md: 220 }, height: 200, borderRadius: "8px" }}
            />
            <Box>
                <CardContent sx={{ p: 0 }}>
                    <Typography variant="h4" sx={{ my: 2 }}>
                        John Doe
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam architecto ex ipsa, accusantium deleniti veniam magni sit distinctio reprehenderit!
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}