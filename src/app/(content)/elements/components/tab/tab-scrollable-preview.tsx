import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabScrollablePreview = () => {
  const [activeTab, setActiveTab] = React.useState<string>("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };
  const tabs = [
    {
      id: "one",
      label: "1",
    },
    {
      id: "two",
      label: "2",
    },
    {
      id: "three",
      label: "3",
    },
    {
      id: "four",
      label: "4",
    },
    {
      id: "five",
      label: "5",
    },
    {
      id: "six",
      label: "6",
    },
    {
      id: "seven",
      label: "7",
    },
    {
      id: "eight",
      label: "8",
    },
    {
      id: "nine",
      label: "9",
    },
    {
      id: "ten",
      label: "10",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "one":
        return (
          <Typography>
            Find helpful answers and guides to improve your experience with our
            tools and services
          </Typography>
        );
      case "two":
        return <Typography>Guide</Typography>;
      case "three":
        return <Typography>Help</Typography>;
      default:
        return <Typography>Default</Typography>;
    }
  };
  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};
