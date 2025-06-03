import * as React from 'react';
import { Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

const CustomCircle = ({ color = '#E91E63' }: { color?: string }) => (
    <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: color,
            border: '2px solid white',
            boxShadow: `0 0 0 2px ${color}`,
            marginTop: 1
        }}
    />
);

const timelineSteps = [
    { label: 'Eat', color: '#E91E63' },
    { label: 'Code', color: '#3F51B5' },
    { label: 'Sleep', color: '#4CAF50' },
];

export function TimelineClassicPreview() {
    return (
        <Timeline>
            {timelineSteps.map((step, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <CustomCircle color={step.color} />
                        {index < timelineSteps.length - 1 && (
                            <TimelineConnector sx={{ backgroundColor: step.color }} />
                        )}
                    </TimelineSeparator>
                    <TimelineContent>{step.label}</TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
