export const CardWithImageString7 = `import { Card, CardMedia, Box, Typography, Avatar } from "@mui/material";

export const CardWithImagePreview7 = () => {
    return (
        <Card sx={{ position: 'relative', width: { xs: "100%", md: 500 }, height: { xs: 350, sm: 450, md: 500 }, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Team"
                height="100%"
                sx={{ filter: 'brightness(0.5)' }}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="white"
                textAlign="center"
            >
                <Typography variant="h3">How we design and code open-source projects?</Typography>
                <Typography fontWeight="bold" sx={{ mt: 3 }}>Lewis Daniel</Typography>
                <Avatar src="/lewis.png" sx={{ mt: 1, width: 90, height: 90 }} />
            </Box>
        </Card>
    )
}`

