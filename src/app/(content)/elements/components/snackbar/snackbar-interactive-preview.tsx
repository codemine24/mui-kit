"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Paper, alpha } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import { useTheme } from "@mui/material/styles";

export const SnackbarInteractivePreview = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                Open
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
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                            <Button
                                size="small"
                                sx={{
                                    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                                    color: theme.palette.secondary.main,
                                    borderRadius: "10px",
                                    minWidth: "auto",
                                }}
                            >
                                <UpdateIcon />
                            </Button>
                            <Box>
                                <Typography variant="body1" fontWeight={500} sx={{ lineHeight: "1.2" }}>
                                    Update Available
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "text.secondary", mt: 1, mb: 2 }}>
                                    New version of the app is available. Update now to get the latest features and security updates.
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    <Button size="small" variant="contained" color="secondary" onClick={handleClose}>
                                        Update Now
                                    </Button>
                                    <Button size="small" variant="outlined" color="secondary" onClick={handleClose}>
                                        Remind Me
                                    </Button>
                                </Box>
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
