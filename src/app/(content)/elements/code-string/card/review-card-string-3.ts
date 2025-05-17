export const ReviewCardString3 = `import { Card, CardContent, Typography, Box, Avatar, Rating } from "@mui/material";

export const ReviewCardPreview3 = () => {
    return (
        <Card sx={{ maxWidth: 400 }} variant="outlined">
            <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                    <Avatar src="/user.jpg" />
                    <Box ml={2}>
                        <Typography fontWeight="bold">Tania Andrew</Typography>
                        <Typography variant="caption" color="text.secondary">DESIGNER @ GOOGLE</Typography>
                    </Box>
                    <Box ml="auto">
                        <Rating value={5} readOnly size="small" />
                    </Box>
                </Box>
                <Typography>
                    "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                </Typography>
            </CardContent>
        </Card>
    )
}`
