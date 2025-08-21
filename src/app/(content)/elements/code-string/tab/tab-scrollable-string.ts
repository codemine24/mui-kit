export const TabScrollableString=   `import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export const TabScrollablePreview = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

   const tabs = [
    {
      id: 1,
      label: "one",
    },
    {
      id: 2,
      label: "two",
    },
    {
      id: 3,
      label: "three",
    },
    {
      id: 4,
      label: "four",
    },
    {
      id: 5,
      label: "five",
    },
    {
      id: 6,
      label: "six",
    },
    {
      id: 7,
      label: "seven",
    },
    {
      id: 8,
      label: "eight",
    },
    {
      id: 9,
      label: "nine",
    },
    {
      id: 10,
      label: "ten",
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
};`