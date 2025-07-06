"use client";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

const steps: string[] = ["1", "2", "3"];

export const StepperWithoutLabelPreview = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = (): void => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = (): void => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box width="100%">
      <Stepper activeStep={activeStep} orientation="horizontal" alternativeLabel={false}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography fontWeight={600} sx={{ mt: 0, fontSize: "0.875rem", color: "#334155" }} />
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
