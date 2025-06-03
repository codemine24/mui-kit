export const stepperArrowString = `"use client";

import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
import { Check } from "@mui/icons-material";

interface StepItem {
  label: string;
}

const steps: StepItem[] = [
  { label: "Personal Info" },
  { label: "Profile Details" },
  { label: "Preferences" },
];

const ArrowConnector = styled(KeyboardDoubleArrowRightIcon)(() => ({
  [\`\&.MuiStepConnector-root\`]: {
        padding: 0,
    },
    [\`\& .MuiStepConnector-line\`]: {
        display: 'none',
    },
    [\`\&.MuiStepConnector-horizontal\`]: {
        marginLeft: 0,
        marginRight: 0,
    },
}));

interface CustomStepIconProps {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
}

const CustomStepIconRoot = styled("div", {
  shouldForwardProp: (prop) => prop !== "ownerState",
})<{ ownerState: { completed: boolean; active: boolean } }>(
  ({ theme, ownerState }) => ({
    background: ownerState.completed
      ? theme.palette.success.main
      : ownerState.active
      ? \`linear-gradient(136deg, \${theme.palette.primary.main} 0%, \${theme.palette.secondary.main} 100%)\`
      : theme.palette.grey[300],
    zIndex: 1,
    color:
      ownerState.active && ownerState.completed
        ? theme.palette.primary.main
        : "#ffff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "1rem",
  })
);

function CustomStepIcon(props: CustomStepIconProps) {
  const { active, completed, icon } = props;

  return (
    <CustomStepIconRoot ownerState={{ completed, active }}>
      {completed ? <Check /> : icon}
    </CustomStepIconRoot>
  );
}

export const StepperArrowPreview = () => {
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
    <Box px={2}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={false}
        connector={
          isMobile ? <KeyboardDoubleArrowDownIcon /> : <ArrowConnector />
        }
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              slots={{ stepIcon: CustomStepIcon }}
              sx={{
                "& .MuiStepLabel-label": {
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color:
                    index < activeStep
                      ? "secondary.main"
                      : index === activeStep
                      ? "primary.main"
                      : "",
                  ml: 1,
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
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
};`;
