"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";

export const DialogHeaderFooterPreview = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <Box sx={{ position: "relative", p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}>
            <Close fontSize="small" />
          </IconButton>

          <Typography variant="h6" fontWeight="bold">
            Get access to Datadog&apos;s Trust Center
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Everything you need to complete your review of Datadog&apos;s Trust Center
          </Typography>

          <Box component="form" noValidate>
            <Typography variant="body2" fontWeight="medium" mb={1}>
              Work email
            </Typography>
            <TextField
              fullWidth
              placeholder="name@example.com"
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography variant="body2" fontSize="14px" mb={2}>
              Already have access?{" "}
              <Link href="#" underline="hover">
                Log in
              </Link>
            </Typography>

            <Typography variant="body2" fontWeight="medium" mb={1}>
              Full name
            </Typography>
            <TextField fullWidth variant="outlined" size="small" sx={{ mb: 2 }} />

            <Typography variant="body2" fontWeight="medium" mb={1}>
              Company name
            </Typography>
            <TextField fullWidth variant="outlined" size="small" sx={{ mb: 2 }} />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography variant="body2">
                  I have read and agree to Datadeet&apos;s{" "}
                  <Link href="#" underline="hover">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" underline="hover">
                    Privacy Policy
                  </Link>
                </Typography>
              }
              sx={{ mb: 1 }}
            />

            <Box display="flex" justifyContent="flex-end" gap={1}>
              <Button onClick={handleClose} color="inherit">
                Cancel
              </Button>
              <Button variant="contained" color="primary" disableElevation onClick={handleClose}>
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
