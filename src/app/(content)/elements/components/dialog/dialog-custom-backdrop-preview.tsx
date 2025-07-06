"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export const DialogCustomBackdropPreview = () => {
  const [customColorOpen, setCustomColorOpen] = React.useState(false);
  const [customBlurOpen, setCustomBlurOpen] = React.useState(false);
  const [noBackdropOpen, setNoBackdropOpen] = React.useState(false);

  const onClose = () => {
    setCustomColorOpen(false);
    setCustomBlurOpen(false);
    setNoBackdropOpen(false);
  };

  return (
    <Box>
      <Stack direction="row" flexWrap="wrap" rowGap={2} spacing={2}>
        <Button variant="contained" onClick={() => setCustomColorOpen(true)}>
          Custom Color
        </Button>
        <Button variant="contained" onClick={() => setCustomBlurOpen(true)}>
          Custom Blur
        </Button>
        <Button variant="contained" onClick={() => setNoBackdropOpen(true)}>
          No Backdrop
        </Button>
      </Stack>

      {/* Custom color backdrop */}
      <Dialog
        open={customColorOpen}
        onClose={onClose}
        aria-labelledby="dialog-title"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(230, 0, 118, 0.1)", // Custom color
              backdropFilter: "blur(3px)" // Optional blur effect
            }
          }
        }}>
        <DialogTitle id="dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>

      {/* Custom blur backdrop */}
      <Dialog
        open={customBlurOpen}
        onClose={onClose}
        aria-labelledby="dialog-title"
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(10px)" // Optional blur effect
            }
          }
        }}>
        <DialogTitle id="dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>

      {/* No backdrop */}
      <Dialog open={noBackdropOpen} onClose={onClose} aria-labelledby="dialog-title" hideBackdrop>
        <DialogTitle id="dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
