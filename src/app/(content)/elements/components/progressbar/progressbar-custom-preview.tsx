"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ProgressbarCustomPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const progressValue = 50;

    return (
        <Stack width={['100%', '80%']} spacing={2}>
            <Box position="relative" width="100%">
                {/* The background track */}
                <Box
                    sx={{
                        height: 20,
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
                            width: `${progressValue}%`,
                            backgroundColor: '#1a90ff',
                            borderRadius: 5,
                            position: 'relative',
                            transition: 'width 0.3s ease',
                        }}
                    >
                        {/* The label centered in the filled area */}
                        <Typography
                            variant="body2"
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
                            {`${progressValue}%`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
};
