"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import HorizontalSplit from "@mui/icons-material/HorizontalSplit";
import ContactSupport from "@mui/icons-material/ContactSupport";
import BookmarkAdd from "@mui/icons-material/BookmarkAdd";
import Equalizer from "@mui/icons-material/Equalizer";
import KeyboardCommandKey from "@mui/icons-material/KeyboardCommandKey";

interface MenuItemType {
  label: string;
  icon?: React.ReactNode;
}

export const PopoverMenuPreview = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const menuItems: MenuItemType[] = [
    { label: "Quick Booking", icon: <BookmarkAdd fontSize="small" /> },
    { label: "Templates", icon: <HorizontalSplit fontSize="small" /> },
    { label: "Tracking Data", icon: <Equalizer fontSize="small" /> },
    { label: "Contact Us", icon: <ContactSupport fontSize="small" /> }
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
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}>
        <ClickAwayListener onClickAway={handleClose}>
          <Paper sx={{ width: "250px" }}>
            <MenuList>
              {menuItems.map((item, index) => (
                <MenuItem key={index} sx={{ py: 1 }} onClick={handleClose}>
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap={1}>
                      {item.icon}
                      {item.label}
                    </Box>
                    <Box sx={{ width: 40, display: "flex", alignItems: "center", gap: 1 }}>
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
