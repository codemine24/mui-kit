export const ButtonAnimatedCodeString = `
import { Box, Button, Stack } from "@mui/material";

export const ButtonAnimatedPreview = () => {
    return (
        <Box p={2}>
            <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
                <Button
                    variant="contained"
                    sx={{
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(0.9)',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(4px)',
                            boxShadow: '0 -6px 12px rgba(0,0,0,0.2)',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="contained"
                >
                    Click me
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        bgcolor: 'transparent',
                        color: 'primary.main',
                        border: '1px solid primary.main',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&::after': {
                            content: '" "',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 0,
                            height: '100%',
                            backgroundColor: 'primary.main',
                            zIndex: -1,
                            transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                            width: '100%',
                        },
                        '&:hover': {
                            color: '#ffffff',
                        },
                    }}
                >
                    Hover me
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&::after': {
                            content: '" "',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '0',
                            backgroundColor: 'primary.main',
                            zIndex: -1,
                            transition: 'height 0.3s ease',
                        },
                        '&:hover::after': {
                            height: '100%',
                        },
                        '&:hover': {
                            color: '#ffffff',
                        },
                    }}
                >
                    Hover me
                </Button>


                <Button
                    variant="outlined"
                    sx={{
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&::after': {
                            content: '" "',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '0',
                            backgroundColor: 'primary.main',
                            zIndex: -1,
                            transition: 'height 0.3s ease',
                        },
                        '&:hover::after': {
                            height: '100%',
                        },
                        '&:hover': {
                            color: '#ffffff',
                        },
                    }}
                >
                    Hover me
                </Button>

            </Stack>
        </Box>
    );
};
`;
