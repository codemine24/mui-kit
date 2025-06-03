'use client'

import React from "react";
import {
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    Button,
    Box,
    stepConnectorClasses,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const steps: string[] = ["Step One", "Step Two", "Step Three"];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 30,
    },
    [`&.${stepConnectorClasses.active}`]: {
        "& .MuiStepConnector-line": {
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        "& .MuiStepConnector-line": {
            backgroundImage: `linear-gradient(to right, ${theme.palette.success.main}, ${theme.palette.success.light})`,
        },
    },
    "& .MuiStepConnector-line": {
        height: 4,
        border: 0,
        backgroundColor: theme.palette.grey[300],
        borderRadius: 2,
    },
}));

interface CustomStepIconProps {
    active: boolean;
    completed: boolean;
    icon: React.ReactNode;
}

const CustomStepIconRoot = styled("div", {
    shouldForwardProp: (prop) => prop !== "ownerState",
})<{
    ownerState: { completed: boolean; active: boolean };
}>(({ theme, ownerState }) => ({
    background: ownerState.completed
        ? theme.palette.success.main
        : ownerState.active
            ? `linear-gradient(136deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
            : theme.palette.grey[300],
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "1rem",
}));

function CustomStepIcon(props: CustomStepIconProps) {
    const { active, completed, icon } = props;

    return (
        <CustomStepIconRoot
            ownerState={{ completed, active }}
        >
            {completed ? <Check /> : icon}
        </CustomStepIconRoot>
    );
}

export const StepperDynamicPreview = () => {
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Box width="100%">
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<CustomConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel slots={{ stepIcon: CustomStepIcon }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 4 }} display="flex" justifyContent="center" gap={2}>
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
