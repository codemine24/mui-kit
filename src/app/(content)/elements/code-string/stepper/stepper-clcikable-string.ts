export const stepperClickableString = `import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const steps = ['Basic Info', 'Details', 'Confirmation'];

export const StepperClickable = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (step: number) => () => {
        setActiveStep(step);
    };

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel onClick={handleStepClick(index)} style={{ cursor: 'pointer' }}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" align="center">
                    Step {activeStep + 1}: {steps[activeStep]}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        variant="outlined"
                    >
                        Back
                    </Button>
                    <Button
                        disabled={activeStep === steps.length - 1}
                        onClick={handleNext}
                        variant="contained"
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
`;
