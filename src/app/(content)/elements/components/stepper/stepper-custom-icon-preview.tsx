"use client";

import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StepIconProps } from "@mui/material/StepIcon";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

const steps = [
  { label: "Home", icon: HomeIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Profile", icon: PersonIcon }
];

// Styled container for the icon
const StepIconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "completed"
})<{ active?: boolean; completed?: boolean }>(({ theme, active, completed }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: completed
    ? "#E60076"
    : active
    ? theme.palette.primary.main
    : theme.palette.grey[400],
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -8
}));

// Component that returns the icon with conditional background
const CustomStepIcon = (icons: React.ElementType[]) =>
  function StepIcon(props: StepIconProps) {
    const { active, completed, icon } = props;
    const Icon = icons[Number(icon) - 1];
    return (
      <StepIconContainer active={active} completed={completed}>
        <Icon fontSize="small" />
      </StepIconContainer>
    );
  };

export const StepperCustomIconPreview = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box width="100%">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              slots={{
                stepIcon: CustomStepIcon(steps.map((s) => s.icon))
              }}>
              {step.label}
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
