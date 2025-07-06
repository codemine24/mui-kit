export const drawerBackdropString = `import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Inbox from '@mui/icons-material/Inbox';
import Mail from '@mui/icons-material/Mail';

export const DrawerBackdrop = () => {
    const drawerRef = React.useRef<HTMLDivElement | null>(null);
    const [customColorOpen, setCustomColorOpen] = React.useState(false);
    const [customBlurOpen, setCustomBlurOpen] = React.useState(false);
    const [noBackdropOpen, setNoBackdropOpen] = React.useState(false);


    // Detect clicks outside the drawer
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setNoBackdropOpen(false);
            }
        }

        if (noBackdropOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [noBackdropOpen]);

    const onClose = () => {
        setCustomColorOpen(false);
        setCustomBlurOpen(false);
        setNoBackdropOpen(false);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={() => setCustomColorOpen(true)}>Custom Color</Button>
            <Button onClick={() => setCustomBlurOpen(true)}>Custom Backdrop</Button>
            <Button onClick={() => setNoBackdropOpen(true)}>No Backdrop</Button>

            {/* Custom Color backdrop */}
            <Drawer anchor="right" open={customColorOpen} onClose={onClose} slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(230, 0, 118, 0.1)', // Custom color
                        backdropFilter: 'blur(3px)', // Optional blur effect
                    },
                },
            }}>
                {DrawerList}
            </Drawer>

            {/* Custom Backdrop backdrop */}
            <Drawer anchor="right" open={customBlurOpen} onClose={onClose} slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: 'blur(3px)', // Optional blur effect
                    },
                },
            }}>
                {DrawerList}
            </Drawer>

            {/* No Backdrop backdrop */}
            <Drawer hideBackdrop slotProps={{ paper: { ref: drawerRef } }} anchor="right" open={noBackdropOpen} onClose={onClose}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
`;
