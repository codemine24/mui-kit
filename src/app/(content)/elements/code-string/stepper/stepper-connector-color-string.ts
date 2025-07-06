export const stepperConnectorColorString = `import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled, alpha } from "@mui/material/styles";

const steps = ["Step 1", "Step 2", "Step 3"];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 12
  },
  [\`&.\${stepConnectorClasses.active}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage: \`linear-gradient(to right, \${theme.palette.primary.main}, \${theme.palette.secondary.main})\`
    }
  },
  [\`&.\${stepConnectorClasses.completed}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage: \`linear-gradient(to right, \${theme.palette.success.main}, \${theme.palette.success.light})\`
    }
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    height: 2,
    border: 0,
    backgroundColor: alpha(theme.palette.error.main, 0.5),
    borderRadius: 2
  }
}));

export const StepperConnectorColor = () => {
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
};`;
