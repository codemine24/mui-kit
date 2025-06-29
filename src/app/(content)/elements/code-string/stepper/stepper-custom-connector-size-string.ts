export const stepperCustomConnectorSizeString = `import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = ["Step 1", "Step 2", "Step 3"];

// Custom connector that supports both orientations
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 12
  },
  [\`&.\${stepConnectorClasses.vertical}\`]: {
    marginLeft: 12
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: theme.palette.mode === "dark" ? "#555" : "#ccc"
  }
}));

export const StepperCustomConnector = () => {
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
`;
