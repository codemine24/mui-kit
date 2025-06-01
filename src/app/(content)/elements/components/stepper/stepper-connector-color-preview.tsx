"use client";

import { Box, Button } from "@mui/material";
import {
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    stepConnectorClasses,
    styled,
    alpha,
} from "@mui/material";
import { useState } from "react";

const steps = ['Step 1', 'Step 2', 'Step 3'];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 12,
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
        height: 2,
        border: 0,
        backgroundColor: alpha(theme.palette.error.main, 0.5),
        borderRadius: 2,
    },
}));

export const StepperConnectorColorPreview = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                connector={<CustomConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 4 }}>
                <Button variant="outlined" disabled={activeStep === 0} onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}>
                    Previous
                </Button>
                <Button variant="contained" disabled={activeStep === steps.length - 1} onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};