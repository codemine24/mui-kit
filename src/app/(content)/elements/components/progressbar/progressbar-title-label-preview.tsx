import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export const ProgressbarTitleLabelPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Stack width={['100%', '80%']} spacing={2}>
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" color="text.secondary">Progress</Typography>
                    <Typography variant="body2" color="text.secondary">60%</Typography>
                </Box>
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
                            backgroundColor: theme.palette.secondary.main,
                        },
                    }}
                />
            </Box>
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" color="text.secondary">Progress</Typography>
                    <Typography variant="body2" color="text.secondary">80%</Typography>
                </Box>
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
                            backgroundColor: theme.palette.secondary.main,
                        },
                    }}
                />
            </Box>

            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" color="text.secondary">Progress</Typography>
                    <Typography variant="body2" color="text.secondary">100%</Typography>
                </Box>
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
        </Stack>
    )
}