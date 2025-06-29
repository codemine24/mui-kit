export const dialogStaticString = `import React from "react";
import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const DialogStatic = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose: DialogProps["onClose"] = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }
    onClose();
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open static modal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        aria-labelledby="dialog-static-title"
      >
        <DialogTitle id="dialog-static-title">
          {"I'm a static dialog"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you click outside of this dialog, it will not close. This dialog will be closed if you click on action buttons.  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Disagree
          </Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};`;
