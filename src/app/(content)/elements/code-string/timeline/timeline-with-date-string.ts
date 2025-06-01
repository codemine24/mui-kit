export const timelineWithDateString = `import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Box } from '@mui/material';

const timelineData = [
    {
        date: 'Mar 15, 2024',
        title: 'Project Kickoff',
        description: 'Initial team meeting and project scope definition.\nEstablished key milestones and resource allocation.',
        active: true,
    },
    {
        date: 'Mar 22, 2024',
        title: 'Design Phase',
        description: 'Completed wireframes and user interface mockups.\nStakeholder review and feedback incorporated.',
        active: true,
    },
    {
        date: 'Apr 5, 2024',
        title: 'Development Sprint',
        description: 'Backend API implementation and frontend component development in progress.',
        active: true,
    },
    {
        date: 'Apr 19, 2024',
        title: 'Testing & Deployment',
        description: 'Quality assurance testing, performance optimization, and production deployment preparation.',
        active: false,
    },
];

export function TimelineWithDate() {
    return (
        <Timeline position="right">
            {timelineData.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent
                        sx={{ m: 0, flex: 0.20 }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        {item.date}
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        {/* Custom rounded shape */}
                        <Box
                            sx={{
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                border: '2px solid #E91E63',
                            }}
                        />
                        {index !== timelineData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>

                    <TimelineContent sx={{ pb: 4, pt: 0, px: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
                            {item.description}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
`