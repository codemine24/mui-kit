export const timelineChangeLogString = `import {
    Typography,
    Card,
    CardContent,
    Chip,
    Button,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const changelogData = [
    {
        version: 'Flowbite Application UI v2.0.0',
        date: 'January 13th, 2022',
        description:
            'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        isLatest: true,
        button: { label: 'Download ZIP' },
        status: 'complete',
    },
    {
        version: 'Flowbite Figma v1.3.0',
        date: 'December 7th, 2021',
        description:
            'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        status: 'incomplete',
    },
    {
        version: 'Flowbite Library v1.2.2',
        date: 'December 2nd, 2021',
        description:
            'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
        status: 'incomplete',
    },
];

export function TimelineChangeLog() {
    return (
        <Timeline position="right" sx={{ mt: 4, width: "100%" }}>
            {changelogData.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ flex: 0 }} />
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined" sx={{ bgcolor: "primary.light" }}>
                            {item.status === 'complete' ? (
                                <CheckCircleIcon fontSize="small" />
                            ) : (
                                <InsertDriveFileIcon fontSize="small" />
                            )}
                        </TimelineDot>
                        {index !== changelogData.length - 1 && (
                            <TimelineConnector />
                        )}
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: 1 }}>
                        <Card variant="outlined" sx={{ borderRadius: 2 }}>
                            <CardContent sx={{ py: 2, px: 2 }}>
                                <Typography fontWeight={600}>
                                    {item.version}
                                    {item.isLatest && (
                                        <Chip
                                            component="span"
                                            label="Latest"
                                            size="small"
                                            color="primary"
                                            sx={{ ml: 1 }}
                                        />
                                    )}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: 'block', mt: 0.5 }}
                                >
                                    Released on {item.date}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {item.description}
                                </Typography>
                                {item.button && (
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{ mt: 2, textTransform: 'none' }}
                                    >
                                        {item.button.label}
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