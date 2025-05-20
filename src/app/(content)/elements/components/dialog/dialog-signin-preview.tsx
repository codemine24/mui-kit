import { Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography, Box, Button, FormControlLabel, Checkbox, Link } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export const DialogSignInPreview = () => {
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
                Open Sign In Dialog
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        p: 1
                    }
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <DialogTitle
                        sx={{
                            pt: 2,
                            pb: 2,
                            fontWeight: 'medium',
                            fontSize: '1.3rem'
                        }}
                    >
                        Sign in to our platform
                    </DialogTitle>

                    <DialogContent sx={{ pb: 3, pt: 0 }}>
                        <Stack spacing={2.5}>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                    Your email
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="name@company.com"
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>

                            <Box>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                    Your password
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="••••••••"
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size="small"
                                        />
                                    }
                                    label={
                                        <Typography variant="body2">
                                            Remember me
                                        </Typography>
                                    }
                                />

                                <Link href="#" underline="hover" color="primary" variant="body2">
                                    Lost Password?
                                </Link>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    textTransform: 'none',
                                    bgcolor: 'primary.main',
                                    borderRadius: 1,
                                    fontSize: '0.9rem'
                                }}
                            >
                                Login to your account
                            </Button>

                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body2" color="text.secondary" component="span">
                                    Not registered?
                                </Typography>
                                {' '}
                                <Link href="#" underline="hover" color="primary" variant="body2">
                                    Create account
                                </Link>
                            </Box>
                        </Stack>
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    );
}