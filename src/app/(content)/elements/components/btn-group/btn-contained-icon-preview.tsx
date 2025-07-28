import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup, { buttonGroupClasses } from "@mui/material/ButtonGroup";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

export const BtnContainedIconPreview = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        sx={{
          borderRadius: "50px",
          [`& .${buttonGroupClasses.grouped}`]: {
            p: "10px 20px",
            borderRadius: "0px !important",
            bgcolor: "#5046E4",
          },
          [`& .${buttonGroupClasses.grouped}:first-of-type`]: {
            borderTopLeftRadius: "50px !important",
            borderBottomLeftRadius: "50px !important",
          },
          [`& .${buttonGroupClasses.grouped}:last-of-type`]: {
            borderTopRightRadius: "50px !important",
            borderBottomRightRadius: "50px !important",
          },
        }}
      >
        <Button sx={{ gap: 1 }}>
          <SettingsIcon />
          Settings
        </Button>
        <Button sx={{ gap: 1 }}>
          <DashboardIcon />
          Dashboard
        </Button>
        <Button sx={{ gap: 1 }}>
          <SignalCellularAltIcon />
          Analytics
        </Button>
        <Button
          id="dropdown-button"
          aria-controls={open ? "dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ minWidth: "40px", gap: 1 }}
        >
          <SubscriptionsIcon />
          Subscription
          <KeyboardArrowDownIcon />
        </Button>
      </ButtonGroup>

      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Free</MenuItem>
        <MenuItem onClick={handleClose}>Pre paid</MenuItem>
        <MenuItem onClick={handleClose}>Post paid</MenuItem>
      </Menu>
    </Box>
  );
};
