"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Paper } from "@mui/material";

export const SnackbarUndoButtonPreview = () => {
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
                        maxWidth: "350px",
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
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Box>
                                <Typography variant="body2" fontWeight={500}>
                                    Schedule catch up
                                </Typography>
                                <Typography variant="caption">
                                    Friday, 28 Aug 2025 at 10:00 AM.
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            size="small"
                            variant="outlined"
                            color="inherit"
                            onClick={handleClose}
                            sx={{
                                borderColor: "divider",
                                color: "text.secondary",
                            }}
                        >
                            Undo
                        </Button>
                    </Box>
                </Paper>
            </Snackbar>
        </Box>
    );
};
