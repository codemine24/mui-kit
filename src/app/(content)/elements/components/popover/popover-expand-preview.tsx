"use client";

import { useState, useRef } from "react";
import {
    Button,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Collapse,
    Box,
    Typography
} from "@mui/material";
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Home as HomeIcon,
    Settings as SettingsIcon,
    Person as PersonIcon,
    Email as EmailIcon,
    Help as HelpIcon,
    Notifications as NotificationIcon,
    Info as InfoIcon,
    Security as SecurityIcon,
    Logout as LogoutIcon
} from "@mui/icons-material";

// Define our menu item types
type SubMenuItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};

type MenuItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    subMenuItems?: SubMenuItem[];
    onClick?: () => void;
};

// Menu items data
const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Home",
        icon: <HomeIcon />,
        onClick: () => { }
    },
    {
        id: "profile",
        label: "Profile",
        icon: <PersonIcon />,
        subMenuItems: [
            { id: "profile-view", label: "View Profile", onClick: () => { } },
            { id: "profile-edit", label: "Edit Profile", onClick: () => { } }
        ]
    },
    {
        id: "messages",
        label: "Messages",
        icon: <EmailIcon />,
        onClick: () => { }
    },
    {
        id: "settings",
        label: "Settings",
        icon: <SettingsIcon />,
        subMenuItems: [
            { id: "settings-general", label: "General", onClick: () => { } },
            { id: "settings-security", label: "Security", icon: <SecurityIcon />, onClick: () => { } },
            { id: "settings-notifications", label: "Notifications", icon: <NotificationIcon />, onClick: () => { } }
        ]
    },
    {
        id: "help",
        label: "Help & Support",
        icon: <HelpIcon />,
        subMenuItems: [
            { id: "help-faq", label: "FAQ", onClick: () => { } },
            { id: "help-contact", label: "Contact Us", onClick: () => { } },
            { id: "help-about", label: "About", icon: <InfoIcon />, onClick: () => { } }
        ]
    },
    {
        id: "logout",
        label: "Logout",
        icon: <LogoutIcon />,
        onClick: () => { }
    }
];


// Main component
export const PopoverExpandPreview = () => {
    const [open, setOpen] = useState(false);
    const [expandedMenuId, setExpandedMenuId] = useState<string | null>(null);
    const anchorRef = useRef<HTMLButtonElement>(null);

    // Handle button click to toggle menu
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // Handle menu close on click away
    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    // Handle menu item click
    const handleMenuItemClick = (
        item: MenuItem | SubMenuItem,
        event: React.MouseEvent
    ) => {
        if ('subMenuItems' in item && item.subMenuItems) {
            // For items with submenus, expand/collapse them
            event.stopPropagation();
            setExpandedMenuId(expandedMenuId === item.id ? null : item.id);
        } else if (item.onClick) {
            // For regular items, call their onClick handler
            item.onClick();
            setOpen(false);
        }
    };

    return (
        <Box>
            <Button
                ref={anchorRef}
                variant="contained"
                color="primary"
                onClick={handleToggle}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
            >
                Menu
            </Button>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                placement="bottom-start"
                sx={{ zIndex: 1300, width: 280 }}
                modifiers={[
                    {
                        name: 'flip',
                        enabled: false,
                    },
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            altAxis: true,
                            boundary: 'viewport',
                        },
                    },
                ]}
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                        <Paper elevation={3} sx={{ width: 280, maxHeight: 400, overflow: 'auto' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open}>
                                    {menuItems.map((item) => (
                                        <Box>
                                            <MenuItem
                                                key={item.id}
                                                onClick={(e) => handleMenuItemClick(item, e)}
                                                sx={{
                                                    paddingY: 1.5,
                                                    "&:hover": {
                                                        backgroundColor: "action.hover"
                                                    }
                                                }}
                                            >
                                                {item.icon && (
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                )}
                                                <ListItemText primary={item.label} />
                                                {item.subMenuItems && (
                                                    expandedMenuId === item.id ?
                                                        <ExpandLessIcon fontSize="small" /> :
                                                        <ExpandMoreIcon fontSize="small" />
                                                )}
                                            </MenuItem>

                                            {/* Submenu items with collapse animation */}
                                            {item.subMenuItems && (
                                                <Collapse
                                                    in={expandedMenuId === item.id}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <Box sx={{ pl: 2, pr: 1, pb: 1, bgcolor: "action.hover" }}>
                                                        {item.subMenuItems.map((subItem) => (
                                                            <MenuItem
                                                                key={subItem.id}
                                                                onClick={(e) => handleMenuItemClick(subItem, e)}
                                                                sx={{
                                                                    paddingY: 1,
                                                                    borderRadius: 1,
                                                                    "&:hover": {
                                                                        backgroundColor: "background.paper"
                                                                    }
                                                                }}
                                                            >
                                                                {subItem.icon && (
                                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                                        {subItem.icon}
                                                                    </ListItemIcon>
                                                                )}
                                                                <ListItemText
                                                                    primary={
                                                                        <Typography variant="body2">{subItem.label}</Typography>
                                                                    }
                                                                />
                                                            </MenuItem>
                                                        ))}
                                                    </Box>
                                                </Collapse>
                                            )}
                                        </Box>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};