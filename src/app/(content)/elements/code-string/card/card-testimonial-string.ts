export const cardTestimonialString = `import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

export const CardTestimonialPreview = () => {
    return (
        <Card sx={{ maxWidth: 400 }} variant="outlined">
            <CardContent>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    mb={1}
                    textAlign={{ xs: 'center', sm: 'left' }}
                >
                    <Avatar src="/user.jpg" />

                    <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 1, sm: 0 }}>
                        <Typography fontWeight="bold">Tania Andrew</Typography>
                        <Typography variant="caption" color="text.secondary">
                            DESIGNER @ GOOGLE
                        </Typography>
                    </Box>

                    <Box ml={{ xs: 0, sm: 'auto' }} mt={{ xs: 1, sm: 0 }}>
                        <Rating value={5} readOnly size="small" />
                    </Box>
                </Box>

                <Typography>
                    &quot;I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!&quot;
                </Typography>
            </CardContent>
        </Card>
    )
}`;
