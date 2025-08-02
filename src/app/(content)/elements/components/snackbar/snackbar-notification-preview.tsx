"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Typography, Paper } from "@mui/material";

export const SnackbarNotificationPreview = () => {
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
                            alignItems: "flex-start",
                            gap: 2,
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" />
                            <Box>
                                <Typography variant="body1" fontWeight={500} sx={{ lineHeight: "1.2" }}>
                                    Jon Doe
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "text.secondary" }}>
                                    Commented on your post
                                </Typography>
                                <Typography variant="caption" sx={{ color: "primary.main" }}>
                                    a few seconds ago
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
