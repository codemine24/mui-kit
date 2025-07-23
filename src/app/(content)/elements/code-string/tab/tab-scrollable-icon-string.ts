export const tabScrollableIconString = `import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabScrollableIconPreview = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  const tabs = [
    { id: 1, icon: <HomeIcon />, label: "Home" },
    { id: 2, icon: <AccountCircleIcon />, label: "Profile" },
    { id: 3, icon: <SettingsIcon />, label: "Settings" },
    { id: 4, icon: <HomeIcon />, label: "Dashboard" },
    { id: 5, icon: <AccountCircleIcon />, label: "Account" },
    { id: 6, icon: <SettingsIcon />, label: "Preferences" },
    { id: 7, icon: <HomeIcon />, label: "Overview" },
    { id: 8, icon: <AccountCircleIcon />, label: "User" },
    { id: 9, icon: <SettingsIcon />, label: "Configuration" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <Typography>
            Find helpful answers and guides to improve your experience with our
            tools and services
          </Typography>
        );
      case 1:
        return <Typography>Guide</Typography>;
      case 2:
        return <Typography>Help</Typography>;
      default:
        return <Typography>Default</Typography>;
    }
  };

  return (
    <Box sx={{ maxWidth: { xs: 280, md: 800 } }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="icon position tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            icon={tab.icon}
            iconPosition="start"
            label={tab.label}
            sx={{
              "&.MuiButtonBase-root": {
                py: 0,
              },
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};`;
