export const popoverMenuString = `import { useState } from 'react';
import {
    Button,
    Popover,
    Paper,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Box,
} from '@mui/material';
import { HorizontalSplit, ContactSupport, BookmarkAdd, Equalizer, KeyboardCommandKey } from '@mui/icons-material';

interface MenuItemType {
    label: string;
    icon?: React.ReactNode;
}

export const PopoverMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const menuItems: MenuItemType[] = [
        { label: 'Quick Booking', icon: <BookmarkAdd fontSize="small" /> },
        { label: 'Templates', icon: <HorizontalSplit fontSize="small" /> },
        { label: 'Tracking Data', icon: <Equalizer fontSize="small" /> },
        { label: 'Contact Us', icon: <ContactSupport fontSize="small" /> },
    ];

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Open Menu
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper sx={{ width: '250px' }}>
                        <MenuList>
                            {menuItems.map((item, index) => (
                                <MenuItem key={index} sx={{ py: 1 }} onClick={handleClose}>
                                    <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box display="flex" alignItems="center" gap={1}>
                                            {item.icon}
                                            {item.label}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <KeyboardCommandKey fontSize="small" />
                                            {item.label.charAt(0).toUpperCase()}
                                        </Box>
                                    </Box>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Paper>
                </ClickAwayListener>
            </Popover>
        </>
    );
};
`