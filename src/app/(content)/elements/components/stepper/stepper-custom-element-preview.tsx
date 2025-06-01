'use client';

import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Box,
    Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';
import Image from 'next/image';

const steps = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Upload', image: 'https://mui.com/static/images/cards/paella.jpg' },
    { label: 'Settings', icon: SettingsIcon },
];

const StepIconContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'completed',
})<{ active?: boolean; completed?: boolean }>(({ theme, active, completed }) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: completed
        ? '#E60076'
        : active
            ? theme.palette.primary.main
            : theme.palette.grey[400],
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: -8,
}));

const CustomStepIcon = (stepData: typeof steps) =>
    function StepIcon(props: StepIconProps) {
        const { active, completed, icon } = props;
        const stepIndex = Number(icon) - 1;
        const step = stepData[stepIndex];

        return (
            <StepIconContainer active={active} completed={completed}>
                {step.icon ? (
                    <step.icon fontSize="small" />
                ) : step.image ? (
                    <Image
                        src={step.image}
                        alt={`step-${stepIndex}`}
                        width={30}
                        height={30}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                ) : null}
            </StepIconContainer>
        );
    };

export const StepperCustomElementPreview = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    return (
        <Box width="100%">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel StepIconComponent={CustomStepIcon(steps)}>
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box mt={4} display="flex" justifyContent="center" gap={2}>
                <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
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
};
