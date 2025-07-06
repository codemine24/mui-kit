import React from "react";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FolderIcon from "@mui/icons-material/Folder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const PopoverInfoPreview = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentPopover, setCurrentPopover] = React.useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, popoverId: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentPopover(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPopover(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" spacing={2}>
      {/* Security */}
      <Tooltip title="Security Info">
        <IconButton color="error" onClick={(e) => handleOpen(e, "security")}>
          <LockIcon />
        </IconButton>
      </Tooltip>

      {/* Settings */}
      <Tooltip title="App Settings">
        <IconButton color="primary" onClick={(e) => handleOpen(e, "settings")}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>

      {/* Support */}
      <Tooltip title="Need Help?">
        <IconButton color="info" onClick={(e) => handleOpen(e, "support")}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Tooltip>

      {/* Storage */}
      <Tooltip title="Storage Status">
        <IconButton color="warning" onClick={(e) => handleOpen(e, "storage")}>
          <FolderIcon />
        </IconButton>
      </Tooltip>

      {/* Schedule / Time */}
      <Tooltip title="Scheduled Info">
        <IconButton color="secondary" onClick={(e) => handleOpen(e, "time")}>
          <AccessTimeIcon />
        </IconButton>
      </Tooltip>

      {/* Popover Content */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
        <Typography sx={{ p: 2, maxWidth: 250 }}>
          {currentPopover === "security" &&
            "Your account is protected by two-factor authentication. Ensure your backup codes are stored safely."}
          {currentPopover === "settings" &&
            "Adjust preferences like theme, notifications, and language in the settings menu."}
          {currentPopover === "support" &&
            "Our support team is available 24/7 via live chat or email. Check our docs for FAQs."}
          {currentPopover === "storage" &&
            "You’ve used 12 GB out of your 20 GB plan. Delete unused files or upgrade your plan."}
          {currentPopover === "time" &&
            "Next scheduled sync is at 3:00 AM UTC. You can modify sync times in your settings."}
        </Typography>
      </Popover>
    </Stack>
  );
};
