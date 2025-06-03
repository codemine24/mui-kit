'use client';

import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    useMediaQuery,
    Box,
    Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

interface StepItem {
    label: string;
    description: string;
}

const steps: StepItem[] = [
    { label: 'Step', description: 'This is a description text.' },
    { label: 'Step', description: 'This is a description text.' },
    { label: 'Step', description: 'This is a description text.' },
];

export const StepperResponsivePreview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleNext = (): void => {
        if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    };

    const handleBack = (): void => {
        if (activeStep > 0) setActiveStep((prev) => prev - 1);
    };

    return (
        <Box width="100%">
            <Stepper
                activeStep={activeStep}
                orientation={isMobile ? 'vertical' : 'horizontal'}
                alternativeLabel={!isMobile}
            >
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: isMobile ? 'flex-start' : 'center',
                                    textAlign: isMobile ? 'left' : 'center',
                                }}
                            >
                                <Typography fontWeight={600}>{step.label}</Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 0.5, maxWidth: 200 }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box
                mt={4}
                display="flex"
                justifyContent="center"
                gap={2}
            >
                <Button
                    variant="outlined"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
