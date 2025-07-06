export const dialogConfirmation1String = `import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";

export const DialogConfirmation1 = () => {
    const [open, setOpen] = React.useState(false);

    const onClose = () => setOpen(false);

    return (
        <Box>
            <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog
                open={open}
                maxWidth="sm"
                fullWidth
                onClose={onClose}
                aria-labelledby="dialog-title"

            >
                <DialogTitle id="dialog-title" sx={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    Confirm Delete
                    <Close onClick={onClose} sx={{ cursor: 'pointer' }} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>item</Typography>?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 2, justifyContent: 'start' }}>
                    <Button variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={onClose}>Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}`;
