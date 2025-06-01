export const timelineProjectsString = `import {
    Button,
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

import CheckIcon from '@mui/icons-material/Check';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type TimelineStatus = 'complete' | 'pending' | 'inProgress';

const timelineData: {
    date?: string;
    title: string;
    link?: string;
    status: TimelineStatus;
}[] = [
        {
            date: 'Mar 15, 2024',
            title: 'Credit Assessment Approved',
            status: 'complete',
        },
        {
            date: 'Mar 22, 2024',
            title: 'Proposal Sent',
            link: 'View Proposal',
            status: 'complete',
        },
        {
            title: 'Manage Proposal',
            link: 'View & Send Document',
            status: 'inProgress',
        },
        {
            title: 'Contact',
            link: 'Contact Client',
            status: 'pending',
        },
    ];

// Choose icon and dot color based on status
const getIconAndColor = (status: TimelineStatus) => {
    switch (status) {
        case 'complete':
            return { icon: <CheckIcon fontSize="small" />, color: 'success' };
        case 'inProgress':
            return { icon: <MoreHorizIcon fontSize="small" />, color: 'primary' };
        case 'pending':
        default:
            return { icon: <HourglassEmptyIcon fontSize="small" />, color: 'grey' };
    }
};

export function TimelineProjects() {
    return (
        <Timeline position="right">
            {timelineData.map((item, index) => {
                const { icon, color } = getIconAndColor(item.status);

                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{ flex: 0 }} />
                        <TimelineSeparator>
                            <TimelineDot color={color as any}>
                                {icon}
                            </TimelineDot>
                            {index !== timelineData.length - 1 && (
                                <TimelineConnector sx={{ bgcolor: 'divider' }} />
                            )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ pb: 4 }}>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ mt: 0.5, display: 'block' }}
                            >
                                {item.date || ''}
                            </Typography>
                            <Typography variant="body1" fontWeight={600}>
                                {item.title}
                            </Typography>
                            {item.link && (
                                <Button
                                    variant="text"
                                    color="primary"
                                    size="small"
                                    sx={{ mt: 1 }}
                                >
                                    {item.link}
                                </Button>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
}
`