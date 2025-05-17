export const ProfileCardString = `'use client'

import { Box, Button, Card, CardContent, CardMedia, IconButton, List, ListItemButton, ListItemText, Popper, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

export default function ProfileCardPreview() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Card sx={{ maxWidth: 400, mx: "auto", p: 3, position: "relative" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <CardMedia
                    component="img"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                    sx={{ width: 100, height: 100, borderRadius: "999px", mt: 3 }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5">John Doe</Typography>
                    <Typography variant="body2">Frontend Developer</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mt: 3 }}>
                        <Button variant="contained" color="secondary">Add Friend</Button>
                        <Button variant="outlined">Message</Button>
                    </Box>
                </CardContent>
                <IconButton aria-describedby={id} onClick={handleClick} sx={{ position: "absolute", top: 8, right: 8 }}>
                    <MoreHorizIcon />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} sx={{ bgcolor: "background.paper" }}>
                    <List dense>
                        <ListItemButton><ListItemText primary="View Profile" /></ListItemButton>
                        <ListItemButton><ListItemText primary="Send Message" /></ListItemButton>
                        <ListItemButton><ListItemText primary="Block" /></ListItemButton>
                    </List>
                </Popper>
            </Box>
        </Card>
    );
}`;