export const progressbarCustomString = `import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const ProgressbarCustomPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Stack width={['100%', '80%']} spacing={2}>
            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 10,
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
                    />
                </Box>
            </Box>

            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 10,
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
                            width: '80%',
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: 5,
                            position: 'relative',
                            transition: 'width 0.3s ease',
                        }}
                    />
                </Box>
            </Box>

            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 10,
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
                            width: '70%',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 5,
                            position: 'relative',
                            transition: 'width 0.3s ease',
                        }}
                    />
                </Box>
            </Box>

            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 10,
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
                            width: '100%',
                            backgroundColor: "#E60076",
                            borderRadius: 5,
                            position: 'relative',
                            transition: 'width 0.3s ease',
                        }}
                    />
                </Box>
            </Box>
        </Stack>
    );
};`;
