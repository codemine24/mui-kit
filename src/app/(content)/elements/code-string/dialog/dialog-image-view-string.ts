export const dialogImageViewPreviewString = `import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Download from "@mui/icons-material/Download";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Share from "@mui/icons-material/Share";

export const DialogImageView = () => {
    const [open, setOpen] = React.useState(false);
    const onClose = () => setOpen(false);
    return (
        <React.Fragment>
            <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
                <DialogContent sx={{ p: 0, borderRadius: 2 }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ width: 32, height: 32, mr: 1 }}>TA</Avatar>
                            <Box>
                                <Typography variant="subtitle2" component="div">
                                    Tania Andrew
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    @andrew
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton size="small" aria-label="like" sx={{ mr: 1 }}>
                                <FavoriteBorder fontSize="small" />
                            </IconButton>
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<Download />}
                                sx={{
                                    borderRadius: 1,
                                    textTransform: 'none',
                                    minWidth: 0,
                                    '& .MuiButton-startIcon': {
                                        mr: { xs: 0, sm: 1 },
                                    },
                                }}
                            >
                                <Typography variant="body2" fontWeight="medium" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                    Free Download
                                </Typography>
                            </Button>
                        </Box>
                    </Box>

                    {/* Image */}
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                        alt="Mountain landscape"
                        sx={{ height: { xs: 300, sm: 420 } }}
                    />

                    {/* Stats and Share */}
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ maxWidth: '60%' }}>
                            <Grid>
                                <Typography variant="caption" color="text.secondary">
                                    Views
                                </Typography>
                                <Typography variant="body2" fontWeight="medium">
                                    44,082,044
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="caption" color="text.secondary">
                                    Downloads
                                </Typography>
                                <Typography variant="body2" fontWeight="medium">
                                    553,031
                                </Typography>
                            </Grid>
                        </Grid>

                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Share />}
                            sx={{
                                borderRadius: 1,
                                textTransform: 'none',
                                borderColor: 'rgba(0, 0, 0, 0.12)',
                                color: 'text.secondary'
                            }}
                        >
                            Share
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
`;
