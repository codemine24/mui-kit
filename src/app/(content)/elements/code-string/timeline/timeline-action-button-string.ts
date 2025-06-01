export const timelineActionButtonString = `import {
    Button,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';

const timelineData = [
    {
        date: 'Mar 15, 2024',
        title: 'Project Kickoff',
        description: 'Initial team meeting.',
        action: "View Details"
    },
    {
        date: 'Mar 22, 2024',
        title: 'Design Phase',
        description: 'Completed wireframes.',
        action: "View Details"
    },
    {
        date: 'Apr 5, 2024',
        title: 'Development Sprint',
        description: 'Backend development.',
    },
    {
        date: 'Apr 19, 2024',
        title: 'Testing & Deployment',
        description: 'Performance optimization.',
    },
];


export function TimelineActionButton() {
    return (
        <Timeline position="right">
            {timelineData.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ flex: 0 }} />
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        {index !== timelineData.length - 1 && <TimelineConnector sx={{ bgcolor: "divider.default" }} />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ pb: 2 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                mt: 1,
                                borderRadius: 2,
                            }}
                        >
                            <CardContent sx={{ py: 1.5, px: 2 }}>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ mt: 0.5, display: 'block' }}
                                >
                                    {item.date}
                                </Typography>
                                <Typography variant="body1" fontWeight={600}>
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">{item.description}</Typography>
                                {item.action && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        sx={{ mt: 1 }}
                                    >
                                        {item.action}
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
`