import { useState } from "react";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface StepItem {
  label: string;
  description: string;
}

const steps: StepItem[] = [
  { label: "Step", description: "This is a description text." },
  { label: "Step", description: "This is a description text." },
  { label: "Step", description: "This is a description text." }
];

export const StepperTimelinePreview = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = (): void => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = (): void => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box width="100%">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left"
                }}>
                <Typography fontWeight={600}>{step.label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, maxWidth: 200 }}>
                  {step.description}
                </Typography>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
