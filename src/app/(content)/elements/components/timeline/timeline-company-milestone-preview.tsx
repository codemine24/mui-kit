import {
    Box,
    Typography,
    Card,
    Avatar,
    Stack,
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

const timelineItems = [
    {
        title: 'Office Inauguration Function',
        description: 'Started journey with new office',
        date: 'Oct 01 2020',
        avatars: ['/avatar.jpg', '/avatar.jpg', '/avatar.jpg'],
    },
    {
        title: 'Reached New Record',
        description: 'Life time accreditation from IAO (First Business Advisory Firm in India)',
        date: 'Sept 16 2020',
    },
    {
        title: 'Design Meetup',
        description:
            'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!',
        date: 'Sept 12 2020',
    },
    {
        title: 'New People Joined with our journey',
        description: 'John Smith, Designer',
        date: 'Aug 20 2020',
        avatars: ['/avatar.jpg'],
    },
];


const DateBox = ({ date, index }: { date: string; index: number }) => {
    const [month, day, year] = date.split(' ');

    return (
        <Box
            sx={{
                textAlign: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                width: 64,
                ml: index % 2 === 0 ? 0 : "auto",
            }}
        >
            <Typography
                variant="caption"
                sx={{ textTransform: 'uppercase', color: 'text.secondary' }}
            >
                {month}
            </Typography>
            <Typography variant="h6" fontWeight={700} lineHeight={1} fontSize={24}>
                {day}
            </Typography>
            <Typography
                variant="caption"
                sx={{ textTransform: 'uppercase', color: 'text.secondary' }}
            >
                {year}
            </Typography>
        </Box>
    );
};

export function TimelineCompanyMilestonePreview() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ py: 8, width: '100%' }}>
            <Timeline position={isMobile ? 'right' : 'alternate-reverse'}>
                {timelineItems.map((item, index) => (
                    <TimelineItem key={index}>
                        {/* On mobile, TimelineSeparator appears on the left by default */}
                        <TimelineOppositeContent
                            sx={{
                                display: isMobile ? 'none' : 'block',
                            }}

                            variant="body2"
                            color="text.secondary"

                        >
                            <DateBox date={item.date} index={index} />
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index !== timelineItems.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: 2 }}>
                            <Card
                                elevation={0}
                                sx={{
                                    p: 0,
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Box sx={{ textAlign: 'left', p: 2, width: '100%' }}>
                                    <Typography fontWeight={600}>{item.title}</Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ mt: 0.5, fontSize: 12, color: 'text.secondary' }}
                                    >
                                        {item.description}
                                    </Typography>

                                    {item.avatars && (
                                        <Stack mt={2} direction="row" spacing={1}>
                                            {item.avatars.map((src, i) => (
                                                <Avatar key={i} src={src} sx={{ borderRadius: 1 }} />
                                            ))}
                                        </Stack>
                                    )}
                                </Box>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}