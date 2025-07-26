import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/system';

type CircularProgressProps = {
    value: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    trackColor?: string;
    showLabel?: boolean;
};

const CircularProgress = ({
    value,
    size = 150,
    strokeWidth = 8,
    color = '#1a90ff',
    trackColor = '#e0e0e0',
    showLabel = false,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <Box position="relative" width={size} height={size}>
            <svg width={size} height={size}>
                {/* Track circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            {/* Centered Label */}
            {showLabel && (
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h6" fontWeight={700} color={color}>
                        {Math.round(value)}%
                    </Typography>
                </Box>
            )}
        </Box>
    );
};


export const ProgressbarCircularBasicPreview = () => {
    return (
        <Stack width={['100%', '80%']} direction={"row"} spacing={2}>
            <CircularProgress value={40} />
            <CircularProgress value={60} showLabel />
            <CircularProgress value={100} showLabel />
        </Stack>
    );
};
