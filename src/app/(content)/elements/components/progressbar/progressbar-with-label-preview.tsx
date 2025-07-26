"use client";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ProgressbarWithLabelPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Stack width={['100%', '80%']} spacing={2}>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="text.secondary">50%</Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="text.secondary">60%</Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress
                        variant="determinate"
                        value={100}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: theme.palette.secondary.main,
                            },
                        }}
                    />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="text.secondary">100%</Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress
                        variant="determinate"
                        value={80}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: theme.palette.error.main,
                            },
                        }}
                    />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="text.secondary"><CancelIcon color="error" /></Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress
                        variant="determinate"
                        value={100}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: isDarkMode ? theme.palette.grey[800] : theme.palette.grey[200],
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                                backgroundColor: theme.palette.success.main,
                            },
                        }}
                    />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="text.secondary"><CheckCircleIcon color="success" /></Typography>
                </Box>
            </Box>
        </Stack>
    );
}
