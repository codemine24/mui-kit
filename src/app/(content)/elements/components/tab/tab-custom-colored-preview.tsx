"use client";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import * as React from "react";

// please replace it with your actual theme color
const tabColors = (mode: "light" | "dark") => ({
  text: mode === "light" ? "#9c27b0" : "#ba68c8",
  indicator: mode === "light" ? "#9c27b0" : "#ba68c8",
});

const CustomTabs = styled(Tabs)(({ theme }) => ({
  [`& .${tabsClasses.indicator}`]: {
    backgroundColor: tabColors(theme.palette.mode).indicator,
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  [`&.${tabClasses.selected}`]: {
    color: tabColors(theme.palette.mode).text,
  },
}));

export const TabCustomColoredPreview = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
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
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CustomTabs
          value={activeTab}
          onChange={handleChange}
          aria-label="custom colored tabs"
        >
          {tabs.map((tab) => (
            <CustomTab key={tab.id} label={tab.label} />
          ))}
        </CustomTabs>
      </Box>

      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};
