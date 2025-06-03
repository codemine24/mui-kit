import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab';
import { Email, Home, Settings, Person } from '@mui/icons-material';

const timelineItems = [
    {
        icon: <Email fontSize='large' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        icon: <Home fontSize='large' />,
        description: 'Life time accreditation from IAO (First Business Advisory Firm in India)',
    },
    {
        icon: <Settings fontSize='large' />,
        description:
            'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!',
    },
    {
        icon: <Person fontSize='large' />,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
];


export function TimelineSocialPreview() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ width: '100%' }}>
            <Timeline sx={{ p: 0 }} position={isMobile ? 'right' : 'alternate'}>
                {timelineItems.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{ flex: isMobile ? 0.2 : 1, m: 0 }}>
                            <Box height={45} width={45} display="flex" alignItems="center" justifyContent="center" bgcolor="#E91E63" sx={{ ml: { xs: 0, sm: index % 2 !== 0 ? 0 : "auto" }, fontSize: 25, color: "#fff", fontWeight: 700 }}>
                                {index + 1}
                            </Box>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: '#E91E63' }} />
                            {index !== timelineItems.length - 1 && (
                                <TimelineConnector sx={{ bgcolor: 'divider' }} />
                            )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ pb: 4 }}>
                            <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', p: 2, borderRadius: '8px' }}>
                                <Box sx={{ mb: 2 }}>
                                    {item.icon}
                                </Box>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}