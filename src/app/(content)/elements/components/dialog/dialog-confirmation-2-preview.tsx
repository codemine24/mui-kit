"use client";

import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const DialogConfirmation2Preview = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        maxWidth="xs"
        fullWidth
        onClose={onClose}
        aria-labelledby="dialog-title"
        slotProps={{
          paper: {
            sx: {
              borderRadius: "15px"
            }
          }
        }}>
        <DialogTitle id="dialog-title" sx={{ fontSize: "1.2rem", textAlign: "center" }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "center" }}>
            Are you sure{" "}
            <Typography component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
              item
            </Typography>{" "}
            will be removed?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 0, borderTop: "1px solid #ccc" }}>
          <Box sx={{ flex: 1 }} display="flex" justifyContent="center">
            <Button fullWidth variant="text" sx={{ p: 1.5 }} onClick={onClose}>
              Cancel
            </Button>
          </Box>
          <Box
            sx={{ flex: 1, borderLeft: "1px solid #ccc" }}
            display="flex"
            justifyContent="center">
            <Button fullWidth variant="text" color="error" sx={{ p: 1.5 }} onClick={onClose}>
              Yes
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
