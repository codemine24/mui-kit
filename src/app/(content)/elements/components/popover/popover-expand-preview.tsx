"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popover from "@mui/material/Popover";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import NotificationIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

type SubMenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type MenuItemType = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  subMenuItems?: SubMenuItem[];
  onClick?: () => void;
};

const menuItems: MenuItemType[] = [
  { id: "home", label: "Home", icon: <HomeIcon />, onClick: () => {} },
  {
    id: "profile",
    label: "Profile",
    icon: <PersonIcon />,
    subMenuItems: [
      { id: "profile-view", label: "View Profile", onClick: () => {} },
      { id: "profile-edit", label: "Edit Profile", onClick: () => {} }
    ]
  },
  { id: "messages", label: "Messages", icon: <EmailIcon />, onClick: () => {} },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    subMenuItems: [
      { id: "settings-general", label: "General", onClick: () => {} },
      { id: "settings-security", label: "Security", icon: <SecurityIcon />, onClick: () => {} },
      {
        id: "settings-notifications",
        label: "Notifications",
        icon: <NotificationIcon />,
        onClick: () => {}
      }
    ]
  },
  {
    id: "help",
    label: "Help & Support",
    icon: <HelpIcon />,
    subMenuItems: [
      { id: "help-faq", label: "FAQ", onClick: () => {} },
      { id: "help-contact", label: "Contact Us", onClick: () => {} },
      { id: "help-about", label: "About", icon: <InfoIcon />, onClick: () => {} }
    ]
  },
  { id: "logout", label: "Logout", icon: <LogoutIcon />, onClick: () => {} }
];

export const PopoverExpandPreview = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandedMenuId, setExpandedMenuId] = useState<string | null>(null);

  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorEl && (event.target as HTMLElement).contains(anchorEl)) return;
    setAnchorEl(null);
    setExpandedMenuId(null);
  };

  const handleMenuItemClick = (item: MenuItemType | SubMenuItem, event: React.MouseEvent) => {
    if ("subMenuItems" in item && item.subMenuItems) {
      event.stopPropagation();
      setExpandedMenuId(expandedMenuId === item.id ? null : item.id);
    } else if (item.onClick) {
      item.onClick();
      setAnchorEl(null);
    }
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleToggle}>
        Menu
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        disableAutoFocus
        disableEnforceFocus
        PaperProps={{
          sx: {
            width: 280,
            height: 320,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }
        }}>
        <ClickAwayListener onClickAway={handleClose}>
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#c1c1c1 transparent"
            }}>
            <MenuList autoFocusItem={open}>
              {menuItems.map((item) => (
                <Box key={item.id}>
                  <MenuItem
                    onClick={(e) => handleMenuItemClick(item, e)}
                    sx={{
                      paddingY: 1.5,
                      "&:hover": {
                        backgroundColor: "action.hover"
                      }
                    }}>
                    {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.label} />
                    {item.subMenuItems &&
                      (expandedMenuId === item.id ? (
                        <ExpandLessIcon fontSize="small" />
                      ) : (
                        <ExpandMoreIcon fontSize="small" />
                      ))}
                  </MenuItem>

                  {item.subMenuItems && (
                    <Collapse in={expandedMenuId === item.id} timeout="auto" unmountOnExit>
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
                            }}>
                            {subItem.icon && (
                              <ListItemIcon sx={{ minWidth: 36 }}>{subItem.icon}</ListItemIcon>
                            )}
                            <ListItemText
                              primary={<Typography variant="body2">{subItem.label}</Typography>}
                            />
                          </MenuItem>
                        ))}
                      </Box>
                    </Collapse>
                  )}
                </Box>
              ))}
            </MenuList>
          </Box>
        </ClickAwayListener>
      </Popover>
    </Box>
  );
};
