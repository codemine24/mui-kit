import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

type DialogSizes = "xs" | "sm" | "md" | "lg" | "xl";

export const DialogSizesPreview = () => {
  const [open, setOpen] = React.useState(false);
  const [sizes, setSizes] = React.useState<DialogSizes | undefined>(undefined);

  const handleClickOpen = (size: DialogSizes | undefined) => {
    setOpen(true);
    setSizes(size);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Stack direction="row" flexWrap="wrap" rowGap={2} spacing={2}>
        <Button variant="contained" onClick={() => handleClickOpen("xs")}>
          Small Modal
        </Button>
        <Button variant="contained" onClick={() => handleClickOpen(undefined)}>
          Default Modal
        </Button>
        <Button variant="contained" onClick={() => handleClickOpen("md")}>
          Medium Modal
        </Button>
        <Button variant="contained" onClick={() => handleClickOpen("lg")}>
          Large Modal
        </Button>
      </Stack>
      <Dialog
        maxWidth={sizes}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-size-title">
        <DialogTitle id="dialog-size-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
