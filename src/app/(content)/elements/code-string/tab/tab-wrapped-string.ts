export const tabWrappedString = `import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabWrappedPreview = () => {
  const [activeTab, setActiveTab] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const tabs = [
    {
      id: "one",
      label:
        "Find helpful answers and guides to improve your experience with our tools and services",
    },
    {
      id: "two",
      label: "Guide",
    },
    {
      id: "three",
      label: "Help",
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
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={tab.label}
            wrapped
            sx={{ textTransform: "none", textAlign: "left" }}
          />
        ))}
      </Tabs>
      <Box sx={{ mt: 3 }}>{renderContent()}</Box>
    </Box>
  );
};`;
