export const stepperDotString = `
'use client';

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";

const steps = [1, 2, 3];

const DotConnector = styled(StepConnector)(({ theme }) => ({
    [\`\&.\${stepConnectorClasses.alternativeLabel}\`]: {
        top: 10,
    },
    [\`\& .\${stepConnectorClasses.line}\`]: {
        borderColor: '#E2E8F0',
        borderTopWidth: 2,
        borderRadius: 1,
        top: 6,
    },
}));

const DotStepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(
  ({ ownerState }) => ({
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: ownerState.active ? '#4ADE80' : ownerState.completed ? '#E60076' : '#E2E8F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  })
);

function DotStepIcon(props: StepIconProps) {
    const { active, completed } = props;
    return <DotStepIconRoot ownerState={{ active, completed }} />;
}

export const StepperDotPreview = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState<number>(1);

    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (activeStep > 0) setActiveStep((prev) => prev - 1);
    };

    return (
        <Box width="100%">
            <Stepper
                activeStep={activeStep}
                connector={<DotConnector />}
                alternativeLabel={!isMobile}
            >
                {steps.map((_, index) => (
                    <Step key={index}>
                        <StepLabel StepIconComponent={DotStepIcon} />
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
`;
