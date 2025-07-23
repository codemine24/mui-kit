import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabCapsulePreview = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabs = [
    {
      id: 0,
      label: "Dashboard",
    },
    {
      id: 1,
      label: "Profile",
    },
    {
      id: 2,
      label: "Settings",
    },
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
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        sx={{
          "& .MuiTab-root": {
            [`&.${tabClasses.selected}`]: {
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
            },
            marginRight: "4px",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} aria-label={`${tab.label} tab`} />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};
