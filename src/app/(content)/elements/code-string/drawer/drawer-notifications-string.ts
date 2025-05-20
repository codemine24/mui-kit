export const drawerNotificationsString = `import React from 'react';
import {
    Drawer, Box, Typography, IconButton, Divider, List, ListItem, ListItemText, Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const notifications = [
    { id: 1, title: 'Order Shipped', message: 'Your order #1234 has been shipped.', time: '2h ago' },
    { id: 2, title: 'New Message', message: 'Support: How can we help you?', time: '1d ago' },
];

export const DrawerNotificationsPreview = () => {
    const [open, setOpen] = React.useState(false);

    const onClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer anchor="right" open={open} onClose={onClose}>
                <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Header */}
                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">Notifications</Typography>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>
                    <Divider sx={{ borderColor: 'divider' }} />

                    {/* Content */}
                    <Box sx={{ flex: 1, overflowY: 'auto', p: 2, pt: 0 }}>
                        <List>
                            {notifications.map((n, index) => (
                                <Box key={n.id}>
                                    <ListItem key={n.id} alignItems="flex-start">
                                        <ListItemText
                                            primary={n.title}
                                            secondary={
                                                <>
                                                    <Typography component="span" variant="body2" color="text.primary">
                                                        {n.message}
                                                    </Typography>
                                                    <Typography variant="caption" display="block">{n.time}</Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    {index < notifications.length - 1 && <Divider sx={{ borderColor: 'divider' }} component="li" />}
                                </Box>
                            ))}
                        </List>
                    </Box>
                    <Divider sx={{ borderColor: 'inherit' }} />

                    {/* Footer */}
                    <Box sx={{ p: 2 }}>
                        <Button fullWidth variant="contained" onClick={onClose}>View All</Button>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}`;