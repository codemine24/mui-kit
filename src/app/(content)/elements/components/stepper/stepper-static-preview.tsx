"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3"];

export const StepperStaticPreview = () => {
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
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 4 }}>
        <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
          Previous
        </Button>
        <Button
          variant="contained"
          disabled={isLastStep() && !allStepsCompleted()}
          onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
