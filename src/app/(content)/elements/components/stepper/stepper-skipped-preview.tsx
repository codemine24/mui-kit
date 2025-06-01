'use client';

import React, { useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
} from '@mui/material';

const steps = ['Account Info', 'Profile Details', 'Preferences', 'Review'];

export const StepperSkippedPreview = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState<Set<number>>(new Set());

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isStepSkipped = (step: number) => skipped.has(step);
    const isStepCompleted = (step: number) => !isStepSkipped(step) && step < activeStep;

    const handleSkip = () => {
        const newSkipped = new Set(skipped);
        newSkipped.add(activeStep);
        setSkipped(newSkipped);
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleNext = () => {
        setSkipped((prev) => {
            const newSkipped = new Set(prev);
            newSkipped.delete(activeStep);
            return newSkipped;
        });
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Box sx={{ width: '100%', p: isMobile ? 2 : 4 }}>
            <Stepper
                activeStep={activeStep}
                orientation={isMobile ? 'vertical' : 'horizontal'}
                alternativeLabel={!isMobile}
            >
                {steps.map((label, index) => {
                    const skipped = isStepSkipped(index);
                    const completed = isStepCompleted(index);
                    const isActive = index === activeStep;

                    return (
                        <Step key={label} completed={completed && !skipped}>
                            <StepLabel
                                optional={
                                    skipped ? (
                                        <Typography variant="caption" color="text.secondary">
                                            Skipped
                                        </Typography>
                                    ) : undefined
                                }
                                sx={{
                                    '& .MuiStepLabel-label': {
                                        color: skipped
                                            ? 'gray'
                                            : isActive
                                                ? 'primary.main'
                                                : completed
                                                    ? 'success.main'
                                                    : 'text.primary',
                                        fontWeight: isActive ? 700 : 'normal',
                                        fontSize: isMobile ? '0.875rem' : '1rem',
                                    },
                                    '& .MuiStepIcon-root': {
                                        color: skipped
                                            ? 'gray'
                                            : isActive
                                                ? 'primary.main'
                                                : completed
                                                    ? 'success.main'
                                                    : 'text.disabled',
                                    },
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <Box sx={{ mt: 4 }}>
                <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    align="center"
                >
                    Step {activeStep + 1}: {steps[activeStep]}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
                        gap: 2,
                    }}
                >
                    <Button
                        fullWidth={isMobile}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                    <Button
                        fullWidth={isMobile}
                        onClick={handleSkip}
                        color="warning"
                        disabled={activeStep === steps.length - 1}
                    >
                        Skip
                    </Button>
                    <Button
                        fullWidth={isMobile}
                        onClick={handleNext}
                        variant="contained"
                        disabled={activeStep === steps.length - 1}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
