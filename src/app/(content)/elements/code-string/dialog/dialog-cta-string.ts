export const dialogCTAString = `'use client';

import { Dialog, IconButton, Stack, Typography, Box, Button, } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export const DialogCTA = () => {
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
                Open CTA Dialog
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 2,
                            overflow: 'visible'
                        }
                    }
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    position: 'relative',
                    overflow: 'auto'
                }}>
                    {/* Left side content */}
                    <Box sx={{ p: 3, width: { xs: '100%', md: '50%' }, order: { xs: 2, md: 1 } }}>
                        <Typography variant="h6" fontWeight="medium" sx={{ mb: 1 }}>
                            Can we keep in touch?
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Subscribe to get promos and messages from Canva about all three good things you can unleash—like anything in Fromt Professional!
                        </Typography>

                        <Stack spacing={1.5} sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                        mr: 1,
                                        mt: 0.2
                                    }}
                                >
                                    ✓
                                </Box>
                                <Typography variant="body2">
                                    Access to 100s of handy designs tips and tutorials
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                        mr: 1,
                                        mt: 0.2
                                    }}
                                >
                                    ✓
                                </Box>
                                <Typography variant="body2">
                                    Top-trending templates
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                        mr: 1,
                                        mt: 0.2
                                    }}
                                >
                                    ✓
                                </Box>
                                <Typography variant="body2">
                                    Special content from our photographers, illustrators and other creators
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                        mr: 1,
                                        mt: 0.2
                                    }}
                                >
                                    ✓
                                </Box>
                                <Typography variant="body2">
                                    Recommended templates just for you
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'inline-block',
                                        mr: 1,
                                        mt: 0.2
                                    }}
                                >
                                    ✓
                                </Box>
                                <Typography variant="body2">
                                    Canva's professional web marketing
                                </Typography>
                            </Box>
                        </Stack>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: '#9c27b0',
                                textTransform: 'none',
                                mb: 1.5,
                                borderRadius: 1
                            }}
                        >
                            Yes, subscribe me
                        </Button>

                        <Button
                            variant="text"
                            fullWidth
                            sx={{
                                color: 'text.secondary',
                                textTransform: 'none'
                            }}
                            onClick={handleClose}
                        >
                            Not now
                        </Button>
                    </Box>

                    {/* Right side illustration */}
                    <Box sx={{
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        position: 'relative',
                        order: { xs: 1, md: 2 }
                    }}>
                        <Box
                            component="img"
                            src="https://img.freepik.com/premium-vector/new-message-icon-with-notification-envelope-pointer-with-incoming-message-social-media_662353-547.jpg"
                            alt="Envelope illustration"
                            sx={{
                                maxWidth: { xs: '100%', md: '80%' },
                                maxHeight: { xs: '100%', md: '80%' }
                            }}
                        />
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}`