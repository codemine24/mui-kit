"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Typography, Paper } from "@mui/material";

export const SnackbarSimpleMessagePreview = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                Open Snackbar
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Paper
                    sx={{
                        width: "auto",
                        maxWidth: "400px",
                        borderRadius: "4px",
                        padding: 2,
                        boxSizing: "border-box",
                        backgroundColor: "background.paper",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 2,
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Avatar />
                            <Box>
                                <Typography variant="body2" fontWeight={500}>
                                    Jon Doe sent you a message
                                </Typography>
                                <Typography variant="caption">
                                    Jon sent you an invite to join the team and get started.
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton size="small" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Paper>
            </Snackbar>
        </Box>
    );
};
