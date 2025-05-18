export const cardImageBg3String = `import {
    Box,
    Button,
    Typography
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { ArrowCircleRight } from '@mui/icons-material';

export const CardImageBg3 = () => {
    return (
        <Box sx={{
            position: 'relative',
            zIndex: 30,
            width: '100%',
            height: { xs: 350, md: 450 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Background Image */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://wallpapercave.com/wp/wp6689710.jpg)'
            }} />

            {/* Dark Overlay */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                bgcolor: 'rgba(17, 24, 39, 0.75)'
            }} />

            {/* Main Content */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 30,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    boxShadow: { xs: 'none', md: 6 },
                    borderRadius: 2,
                    width: { xs: '100%', md: '85%' },
                    height: { xs: 'auto', md: "85%" },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: {
                        xs: 'none',
                        md: 'url(https://wallpapercave.com/wp/wp6689710.jpg)',
                    },
                }}>
                    <Grid container spacing={0.125} sx={{ overflow: 'hidden', height: '100%' }}>
                        {/* Left Column */}
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                position: 'relative',
                                height: '100%',
                                p: 2
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: { sm: 'flex-start', md: 'center' },
                                    height: '100%'
                                }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontStyle: 'italic',
                                            color: 'white',
                                            textAlign: "center",
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        The Mysteries Of The Forest
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    position: 'absolute',
                                    borderLeft: '4px solid',
                                    borderColor: 'grey.400',
                                    left: 10,
                                    top: 20,
                                    py: 4,
                                    px: 1,
                                    height: '60%',
                                    display: {
                                        xs: 'none',
                                        md: 'block',
                                    }
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    borderTop: '4px solid',
                                    borderColor: 'grey.400',
                                    left: 20,
                                    bottom: 0,
                                    py: 1,
                                    px: 4,
                                    width: '60%',
                                    display: {
                                        xs: 'none',
                                        md: 'block',
                                    }
                                }} />
                            </Box>
                        </Grid>

                        {/* Right Column */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                height: '100%',
                                width: '100%',
                                bgcolor: {
                                    xs: 'transparent',
                                    md: 'rgba(230, 0, 118, .3)',
                                },
                                borderRadius: '0 8px 8px 0'
                            }}>
                                <Box sx={{ p: { xs: 2, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#fff',
                                            mb: 4,
                                            fontSize: {
                                                xs: '0.75rem',
                                                md: '0.875rem',
                                            }
                                        }}
                                    >
                                        Forests are truly amazing places.
                                        Combining impressive biodiversity with natural beauty,
                                        the woods of the world can be both captivating and perplexing.
                                    </Typography>

                                    <Box>
                                        <Button
                                            variant="contained"
                                            endIcon={<ArrowCircleRight />}
                                            sx={{
                                                opacity: 0.75,
                                                bgcolor: 'grey.100',
                                                color: 'text.primary',
                                                fontWeight: 'bold',
                                                fontSize: '0.875rem',
                                                py: 1,
                                                px: 2,
                                            }}
                                        >
                                            LEARN MORE
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};`;
