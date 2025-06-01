import * as React from 'react';
import { Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

const CustomCircle = ({ color = '#1976d2' }: { color?: string }) => (
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

export function TimelineSimplePreview() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <CustomCircle color="#E91E63" />
                    <TimelineConnector sx={{ backgroundColor: '#E91E63' }} />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <CustomCircle color="#3F51B5" />
                    <TimelineConnector sx={{ backgroundColor: '#3F51B5' }} />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <CustomCircle color="#4CAF50" />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
