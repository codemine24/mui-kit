'use client';

import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    StepConnector,
    stepConnectorClasses,
    styled,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';

const steps = ['Step 1', 'Step 2', 'Step 3'];

// Custom connector that supports both orientations
const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 12,
    },
    [`&.${stepConnectorClasses.vertical}`]: {
        marginLeft: 12,
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderLeftWidth: 4,
        borderTopWidth: 4,
        borderColor: theme.palette.mode === 'dark' ? '#555' : '#ccc',
    },
}));

export const StepperCustomConnectorPreview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [activeStep, setActiveStep] = useState(0);
    const [completed] = useState(new Set<number>());

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((_, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        if (activeStep === 0) return;
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const isLastStep = () => activeStep === steps.length - 1;
    const allStepsCompleted = () => steps.every((_, i) => i in completed);

    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Stepper
                activeStep={activeStep}
                orientation={isMobile ? 'vertical' : 'horizontal'}
                alternativeLabel={false}
                connector={<CustomConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    mt: 4,
                }}
            >
                <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                    Previous
                </Button>
                <Button variant="contained" disabled={isLastStep() && !allStepsCompleted()} onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};
