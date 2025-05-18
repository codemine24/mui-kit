import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from "@mui/material";

export const DialogStaticPreview = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose: DialogProps['onClose'] = (event, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            return;
        }
        onClose();
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={() => setOpen(true)}>Open static modal</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                disableEscapeKeyDown
                aria-labelledby="dialog-static-title"
            >
                <DialogTitle id="dialog-static-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
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
};