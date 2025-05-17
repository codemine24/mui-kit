import {
    Box,
    Button,
    Typography
} from '@mui/material';
import Grid2 from '@mui/material/Grid';
import { ArrowCircleRight } from '@mui/icons-material';

export const ForestCardPreview = () => {
    return (
        <Box sx={{
            position: 'relative',
            zIndex: 30,
            width: '100%',
            height: '500px',
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
                    boxShadow: 6,
                    borderRadius: 2,
                    width: '85%',
                    height: 384,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp6689710.jpg)'
                }}>
                    <Grid2 container spacing={0.125} sx={{ overflow: 'hidden' }}>
                        {/* Left Column */}
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                my: 6,
                                px: 8,
                                height: '100%',
                            }}>
                                <Box sx={{
                                    borderLeft: '4px solid',
                                    borderColor: 'grey.400',
                                    py: 10,
                                    px: 5,
                                    mx: 0.5,
                                    position: 'absolute',
                                    left: 2
                                }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontStyle: 'italic',
                                            color: 'white',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        The Mysteries Of The Forest
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        color: 'grey.400',
                                        fontWeight: 600,
                                        fontSize: '1.25rem',
                                        mb: 4
                                    }}
                                >
                                    07
                                </Typography>
                                <Box sx={{
                                    position: 'absolute',
                                    borderTop: '4px solid',
                                    borderColor: 'grey.400',
                                    bottom: 60,
                                    py: 1,
                                    px: 4,
                                    width: '60%'
                                }} />
                            </Box>
                        </Grid2>

                        {/* Right Column */}
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                height: { xs: 'auto', md: 384 },
                                width: '100%',
                                bgcolor: 'rgba(230, 0, 118, .3)',
                                borderRadius: '0 8px 8px 0'
                            }}>
                                <Box sx={{ p: 8 }}>
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
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        p: 2
                                    }}>
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
                                                px: 2
                                            }}
                                        >
                                            LEARN MORE
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </Box>
    );
};