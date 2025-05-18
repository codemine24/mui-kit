'use client';

import { Button, Dialog, IconButton, Typography, Box } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const DialogWelcomePreview = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Button variant="contained" onClick={handleToggle}>
                Open Welcome Dialog
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 2,
                            textAlign: 'center',
                            p: 1
                        }
                    }
                }}
            >
                <Box sx={{ position: 'relative', p: 2 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>

                    <Box sx={{ mb: 2, mt: 2 }}>
                        <Box
                            sx={{
                                width: 70,
                                height: 70,
                                bgcolor: '#e8e3ff',
                                borderRadius: 2,
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2
                            }}
                        >
                            <Box
                                component="img"
                                src="https://i.pinimg.com/736x/88/3b/4b/883b4b72846a83bcfe03ae189a431922.jpg"
                                alt="Team icon"
                                sx={{ width: 40, height: 40 }}
                            />
                        </Box>

                        <Typography variant="h6" fontWeight="medium" sx={{ mb: 1 }}>
                            Welcome to Teams!
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Let's get started. You and your team can now use Zapier for Teams for free for 14 days. Explore our guide or jump right into your dashboard.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: 'rgba(0,0,0,0.12)',
                                    color: 'text.primary',
                                    textTransform: 'none'
                                }}
                            >
                                View Zaps
                            </Button>

                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#5c4ddd',
                                    textTransform: 'none'
                                }}
                            >
                                Open Guide
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}