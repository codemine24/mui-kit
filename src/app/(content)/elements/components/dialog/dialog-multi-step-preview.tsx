"use client";

import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const steps = ["My Information", "My Experience", "Application Questions", "Terms & Conditions"];

export const DialogMultiStepPreview = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    experience: "",
    applicationAnswer: "",
    agreed: false
  });

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const StepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              My Information
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              My Experience
            </Typography>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Describe your experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Application Questions
            </Typography>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Why do you want to apply?"
              name="applicationAnswer"
              value={formData.applicationAnswer}
              onChange={handleChange}
            />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6">Terms & Conditions</Typography>
            <Typography variant="body2" sx={{ my: 2 }}>
              Please read and agree to the terms and conditions to proceed.
            </Typography>
            <label>
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />{" "}
              I agree to the terms and conditions.
            </label>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Multi Step Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: "bold" }}>Application Form Preview</DialogTitle>
        <DialogContent>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              mb: 4,
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <StepContent />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleClose : handleNext}
              disabled={activeStep === steps.length - 1 && !formData.agreed}>
              {activeStep === steps.length - 1 ? "Export" : "Next"}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
