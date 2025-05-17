export const CardWithImageString5 = `import { Card, Stack, CardMedia, Chip, Typography, Box } from "@mui/material";

export const CardWithImagePreview5 = () => {
    return (
        <Card sx={{ maxWidth: 345, margin: "auto", borderRadius: 4, overflow: 'visible', boxShadow: 0, bgcolor: '#fff', pb: 2 }}>
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
                sx={{ height: 300, borderRadius: 2 }}
            />
            <Box
                sx={{
                    mt: -8,
                    mx: 2,
                    bgcolor: '#fff',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: 2,
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label="NEW" size="small" sx={{ bgcolor: '#E6F4EA', color: '#1A7F62', fontWeight: 'bold' }} />
                    <Typography variant="caption" color="text.secondary">
                        2 BATHS • 3 ROOMS
                    </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1, color: '#000' }}>
                    A RANDOM TITLE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $1800 <Typography component="span" variant="caption">/wk</Typography>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    <Typography component="span" sx={{ color: '#1A7F62', fontWeight: 600 }}>4/5 ratings</Typography>{' '}
                    <Typography component="span" variant="caption" color="text.secondary">(based on 234 ratings)</Typography>
                </Typography>
            </Box>
        </Card>
    )
}`