"use client";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

export const Tab8Preview = () => {
  const tabData = [
    {
      id: 0,
      title: "Dashboard",
      content: (
        <Typography component={"span"}>
          {" "}
          Your dashboard shows key metrics: 15 new orders, 32 pending tasks, and
          5 urgent alerts today. Revenue increased by 12% this week. Quick
          actions allow you to manage workflows efficiently.
        </Typography>
      ),
    },

    {
      id: 1,
      title: "Profile",
      content: (
        <>
          <Box
            component={"img"}
            src="https://cdn.pixabay.com/photo/2022/11/05/22/11/channel-7572879_1280.jpg"
          />
          <Typography>
            Explore in-depth information, including technical specifications,
            materials, dimensions, and usage instructions. This section provides
            everything you need to fully understand the product or item.
          </Typography>
        </>
      ),
    },

    {
      id: 2,
      title: "Settings",
      content: (
        <Typography component={"span"}>
          {" "}
          Manage your account settings, notifications, and privacy preferences.
          Customize your experience to match your needs.
        </Typography>
      ),
    },
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="custom colored tabs"
        >
          {tabData.map((tab) => (
            <CustomTab key={tab.id} label={tab.title} />
          ))}
        </CustomTabs>
      </Box>
      {tabData.map((tab) => (
        <CustomTabPanel key={`panel-${tab.id}`} value={value} index={tab.id}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
