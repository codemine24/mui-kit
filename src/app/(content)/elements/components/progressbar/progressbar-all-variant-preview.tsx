import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';

export const ProgressbarAllVariantPreview = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Stack width={['100%', '80%']} spacing={2}>
            {/* Blue */}
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
                        backgroundColor: isDarkMode ? '#308fe8' : '#1a90ff',
                    },
                }}
            />

            {/* Red */}
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
                        backgroundColor: isDarkMode ? '#F44336' : '#F44336',
                    },
                }}
            />

            {/* Green */}
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
                        backgroundColor: isDarkMode ? '#4CAF50' : '#4CAF50',
                    },
                }}
            />

            {/* Orange */}
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
                        backgroundColor: isDarkMode ? '#FF9800' : '#FF9800',
                    },
                }}
            />

            {/* Yellow */}
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
                        backgroundColor: isDarkMode ? '#FFC107' : '#FFC107',
                    },
                }}
            />

            {/* Pink */}
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
                        backgroundColor: isDarkMode ? '#E91E63' : '#E91E63',
                    },
                }}
            />
        </Stack>
    )
}