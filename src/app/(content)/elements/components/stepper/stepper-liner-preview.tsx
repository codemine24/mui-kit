"use client";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

interface StepItem {
  label: string;
}

const steps: StepItem[] = [{ label: "Step" }, { label: "Step" }, { label: "Step" }];

export const StepperLinerPreview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = (): void => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = (): void => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box width="100%">
      <Stepper
        activeStep={activeStep}
        orientation={isMobile ? "vertical" : "horizontal"}
        alternativeLabel={false}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography
                fontWeight={600}
                sx={{
                  ml: 1,
                  mt: isMobile ? 0.5 : 0,
                  fontSize: "0.875rem",
                  color: "#334155"
                }}>
                {step.label}
              </Typography>
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
