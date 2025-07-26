import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ProgressbarCustomWithLabelPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Stack width={['100%', '80%']} spacing={2}>
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" color="text.secondary">Progress</Typography>
                    <Typography variant="body2" color="text.secondary">60%</Typography>
                </Box>

                <Box position="relative" width="100%" flex={1}>
                    {/* The background track */}
                    <Box
                        sx={{
                            height: 15,
                            borderRadius: 5,
                            backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* The filled bar */}
                        <Box
                            sx={{
                                height: '100%',
                                width: '50%',
                                backgroundColor: '#1a90ff',
                                borderRadius: 5,
                                position: 'relative',
                                transition: 'width 0.3s ease',
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 15,
                        borderRadius: 5,
                        backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {/* The filled bar */}
                    <Box
                        sx={{
                            height: '100%',
                            width: '50%',
                            backgroundColor: '#1a90ff',
                            borderRadius: 5,
                            position: 'relative',
                            transition: 'width 0.3s ease',
                        }}
                    >
                        {/* The label centered in the filled area */}
                        <Typography
                            variant="caption"
                            color="white"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" width="100%" flex={1}>
                    {/* The background track */}
                    <Box
                        sx={{
                            height: 15,
                            borderRadius: 5,
                            backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* The filled bar */}
                        <Box
                            sx={{
                                height: '100%',
                                width: '50%',
                                backgroundColor: '#1a90ff',
                                borderRadius: 5,
                                position: 'relative',
                                transition: 'width 0.3s ease',
                            }}
                        >
                        </Box>
                    </Box>
                </Box>

                {/* The label centered in the filled area */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                    }}
                >
                    50%
                </Typography>
            </Box>
        </Stack>
    );
}